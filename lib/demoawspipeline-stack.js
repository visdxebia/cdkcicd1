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

    const latestStringToken = ssm.StringParameter.valueForStringParameter(
      this, 'dItem');
    const clientBucket = new s3.Bucket(this, 'client-bucket', {
      bucketName: latestStringToken,
      removalPolicy: RemovalPolicy.DESTROY, // Todo: Remove this
      autoDeleteObjects: true // Todo: Remove this
    });
    console.log(latestStringToken)
  }
}

module.exports = { DemoawspipelineStack }
