# Interface VPC Endpoint with Private IP

This is a CDK construct that creates an interface VPC endpoint with a private IP address.

## Installation

```bash
npm install cdk-vpc-endpoint-with-private-ip
```

## Usage

You can create an interface VPC endpoint with a private IP address using the `VpcEndpointWithPrivateIp` construct.

The `InterfaceVpcEndpointProps` can be passed to the construct to configure the interface VPC endpoint.

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip';

declare const vpc: ec2.IVpc;

const endpoint = new InterfaceVpcEndpointWithPrivateIp(this, 'Endpoint', {
  vpc,
  service: ec2.InterfaceVpcEndpointAwsService.S3,
});

const privateIps = endpoint.privateIps;
```

**Note**: `privateIps` is an array of CDK Tokens, and the actual IP addresses are not determined until the stack is deployed.

## Special Thanks

I am greatly referencing the content of [this post](https://qiita.com/k_bobchin/items/c016cc65912a905b90ef).
