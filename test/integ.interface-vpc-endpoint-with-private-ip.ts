import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { InterfaceVpcEndpointWithPrivateIp } from '../src';

const app = new App();
const stack = new Stack(app, 'IntegTestStack');
const vpc = new ec2.Vpc(stack, 'Vpc', {
  natGateways: 0,
});

new InterfaceVpcEndpointWithPrivateIp(stack, 'Endpoint', {
  vpc,
  service: ec2.InterfaceVpcEndpointAwsService.CODEBUILD,
});

new IntegTest(app, 'IntegTest', {
  testCases: [stack],
});