const _ = require('lodash');
const { Stack, Duration, SecretValue, RemovalPolicy } = require('aws-cdk-lib');
const ssm = require('aws-cdk-lib/aws-ssm');
const s3 = require('aws-cdk-lib/aws-s3');

class DemoawspipelineStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    let latestStringToken = ssm.StringParameter.valueFromLookup(this, 'clientToOnboardConfig');
    const i1 = latestStringToken.indexOf("\"id\":");
    const i2 = latestStringToken.indexOf(",", i1);
    const i3 = latestStringToken.substring(i1+6, i2-1);
    new ssm.StringParameter(this, 'Parameter', {
      allowedPattern: '.*',
      description: 'The value Foo',
      parameterName: 'FooParameter',
      stringValue: `${_.get(latestStringToken, "id", "not found")}${latestStringToken}${i1}${i2}${i3}`,
      tier: ssm.ParameterTier.STANDARD,
    });


    // const clientBucket = new s3.Bucket(this, 'client-bucket', {
    //   bucketName: "bucket" + item + "visd",
    //   removalPolicy: RemovalPolicy.DESTROY, // Todo: Remove this
    //   autoDeleteObjects: true // Todo: Remove this
    // });

  }
}

module.exports = { DemoawspipelineStack }
