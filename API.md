# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InterfaceVpcEndpointWithPrivateIp <a name="InterfaceVpcEndpointWithPrivateIp" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp"></a>

CDK construct for an Interface VPC Endpoint with private IPs.

#### Initializers <a name="Initializers" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer"></a>

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip'

new InterfaceVpcEndpointWithPrivateIp(scope: Construct, id: string, props: InterfaceVpcEndpointProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_ec2.InterfaceVpcEndpointProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.addToPolicy">addToPolicy</a></code> | Adds a statement to the policy document of the VPC endpoint. The statement must have a Principal. |

---

##### `toString` <a name="toString" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToPolicy` <a name="addToPolicy" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.addToPolicy"></a>

```typescript
public addToPolicy(statement: PolicyStatement): void
```

Adds a statement to the policy document of the VPC endpoint. The statement must have a Principal.

Not all interface VPC endpoints support policy. For more information
see https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.addToPolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the IAM statement to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes">fromInterfaceVpcEndpointAttributes</a></code> | Imports an existing interface VPC endpoint. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isConstruct"></a>

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip'

InterfaceVpcEndpointWithPrivateIp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isOwnedResource"></a>

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip'

InterfaceVpcEndpointWithPrivateIp.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isResource"></a>

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip'

InterfaceVpcEndpointWithPrivateIp.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromInterfaceVpcEndpointAttributes` <a name="fromInterfaceVpcEndpointAttributes" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes"></a>

```typescript
import { InterfaceVpcEndpointWithPrivateIp } from 'cdk-vpc-endpoint-with-private-ip'

InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes(scope: Construct, id: string, attrs: InterfaceVpcEndpointAttributes)
```

Imports an existing interface VPC endpoint.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes.parameter.id"></a>

- *Type:* string

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.fromInterfaceVpcEndpointAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_ec2.InterfaceVpcEndpointAttributes

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | The interface VPC endpoint identifier. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access to network connections. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointCreationTimestamp">vpcEndpointCreationTimestamp</a></code> | <code>string</code> | The date and time the interface VPC endpoint was created. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointDnsEntries">vpcEndpointDnsEntries</a></code> | <code>string[]</code> | The DNS entries for the interface VPC endpoint. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointNetworkInterfaceIds">vpcEndpointNetworkInterfaceIds</a></code> | <code>string[]</code> | One or more network interfaces for the interface VPC endpoint. |
| <code><a href="#cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.privateIps">privateIps</a></code> | <code>string[]</code> | The private IPs of the network interfaces of the VPC endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

The interface VPC endpoint identifier.

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access to network connections.

---

##### `vpcEndpointCreationTimestamp`<sup>Required</sup> <a name="vpcEndpointCreationTimestamp" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointCreationTimestamp"></a>

```typescript
public readonly vpcEndpointCreationTimestamp: string;
```

- *Type:* string

The date and time the interface VPC endpoint was created.

---

##### `vpcEndpointDnsEntries`<sup>Required</sup> <a name="vpcEndpointDnsEntries" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointDnsEntries"></a>

```typescript
public readonly vpcEndpointDnsEntries: string[];
```

- *Type:* string[]

The DNS entries for the interface VPC endpoint.

Each entry is a combination of the hosted zone ID and the DNS name.
The entries are ordered as follows: regional public DNS, zonal public DNS, private DNS, and wildcard DNS.
This order is not enforced for AWS Marketplace services.

The following is an example. In the first entry, the hosted zone ID is Z1HUB23UULQXV
and the DNS name is vpce-01abc23456de78f9g-12abccd3.ec2.us-east-1.vpce.amazonaws.com.

["Z1HUB23UULQXV:vpce-01abc23456de78f9g-12abccd3.ec2.us-east-1.vpce.amazonaws.com",
"Z1HUB23UULQXV:vpce-01abc23456de78f9g-12abccd3-us-east-1a.ec2.us-east-1.vpce.amazonaws.com",
"Z1C12344VYDITB0:ec2.us-east-1.amazonaws.com"]

If you update the PrivateDnsEnabled or SubnetIds properties, the DNS entries in the list will change.

---

##### `vpcEndpointNetworkInterfaceIds`<sup>Required</sup> <a name="vpcEndpointNetworkInterfaceIds" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.vpcEndpointNetworkInterfaceIds"></a>

```typescript
public readonly vpcEndpointNetworkInterfaceIds: string[];
```

- *Type:* string[]

One or more network interfaces for the interface VPC endpoint.

---

##### `privateIps`<sup>Required</sup> <a name="privateIps" id="cdk-vpc-endpoint-with-private-ip.InterfaceVpcEndpointWithPrivateIp.property.privateIps"></a>

```typescript
public readonly privateIps: string[];
```

- *Type:* string[]

The private IPs of the network interfaces of the VPC endpoint.

---





