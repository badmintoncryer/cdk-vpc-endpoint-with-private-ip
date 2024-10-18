import { Token } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

/**
 * CDK construct for an Interface VPC Endpoint with private IPs.
 */
export class InterfaceVpcEndpointWithPrivateIp extends ec2.InterfaceVpcEndpoint {
  /**
   * The private IPs of the network interfaces of the VPC endpoint.
   */
  public readonly privateIps: string[];

  constructor(scope: Construct, id: string, props: ec2.InterfaceVpcEndpointProps) {
    super(scope, id, props);

    const az = props.vpc.availabilityZones;

    const getEndpointIps = (index: number) => {
      const privateIpAddressField = `NetworkInterfaces.${index}.PrivateIpAddress`;
      const resource = new AwsCustomResource(this, `GetEndpointIp${index}`, {
        onUpdate: {
          service: 'EC2',
          action: 'describeNetworkInterfaces',
          parameters: {
            NetworkInterfaceIds: this.vpcEndpointNetworkInterfaceIds,
          },
          physicalResourceId: PhysicalResourceId.of(this.vpcEndpointId),
          outputPaths: [privateIpAddressField],
        },
        policy: AwsCustomResourcePolicy.fromSdkCalls({ resources: AwsCustomResourcePolicy.ANY_RESOURCE }),
      });
      return resource.getResponseField(privateIpAddressField);
    };

    this.privateIps = [...new Set(az.map((_, index) => Token.asString(getEndpointIps(index))))];
  }
}
