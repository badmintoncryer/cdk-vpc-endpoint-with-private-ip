import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kazuho CryerShinozuka',
  authorAddress: 'malaysia.cryer@gmail.com',
  cdkVersion: '2.100.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'cdk-vpc-endpoint-with-private-ip',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/badmintoncryer/cdk-vpc-endpoint-with-private-ip.git',

  keywords: ['aws', 'cdk', 'ec2', 'aws-cdk'],
  gitignore: ['*.js', '*.d.ts', '!test/.*.snapshot/**/*', '.tmp'],
  deps: [],
  description: 'CDK Construct for a VPC Endpoint with private IPs',
  devDeps: [
    '@aws-cdk/integ-runner@2.100.0-alpha.0',
    '@aws-cdk/integ-tests-alpha@2.100.0-alpha.0',
  ],
  releaseToNpm: true,
  packageName: 'cdk-vpc-endpoint-with-private-ip',
  publishToPypi: {
    distName: 'cdk-vpc-endpoint-with-private-ip',
    module: 'cdk-vpc-endpoint-with-private-ip',
  },
});
project.projectBuild.testTask.exec(
  'yarn tsc -p tsconfig.dev.json && yarn integ-runner',
);
project.synth();
