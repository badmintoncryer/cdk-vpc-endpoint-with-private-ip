import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { InterfaceVpcEndpointWithPrivateIp } from '../src/index';

test('InterfaceVpcEndpointWithPrivateIp is created with correct properties', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');
  const vpc = new ec2.Vpc(stack, 'VPC');

  const endpoint = new InterfaceVpcEndpointWithPrivateIp(stack, 'Endpoint', {
    vpc,
    service: ec2.InterfaceVpcEndpointAwsService.CODEBUILD,
  });

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::EC2::VPCEndpoint', {
    VpcId: {
      Ref: 'VPCB9E5F0B4',
    },
    ServiceName: {
      'Fn::Join': [
        '',
        [
          'com.amazonaws.',
          {
            Ref: 'AWS::Region',
          },
          '.codebuild',
        ],
      ],
    },
    PrivateDnsEnabled: true,
    SecurityGroupIds: [
      {
        'Fn::GetAtt': [
          'EndpointSecurityGroup3A4D971B',
          'GroupId',
        ],
      },
    ],
    SubnetIds: [
      {
        Ref: 'VPCPrivateSubnet1Subnet8BCA10E0',
      },
      {
        Ref: 'VPCPrivateSubnet2SubnetCFCDAA7A',
      },
    ],
    VpcEndpointType: 'Interface',
  });

  expect(endpoint.privateIps).toBeDefined();
  expect(endpoint.privateIps.length).toBe(2);
});
