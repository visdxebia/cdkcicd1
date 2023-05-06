const _ = require('lodash');
const { Stack, CfnOutput, RemovalPolicy } = require('aws-cdk-lib');
const ssm = require('aws-cdk-lib/aws-ssm');
const s3 = require('aws-cdk-lib/aws-s3');

const getClientIdFromOnboardingCoinfgString = s => {
  // temporary workaround
  const i1 = s.indexOf("\"id\":");
  const i2 = s.indexOf(",", i1);
  return s.substring(i1+6, i2-1);
}

class DemoawspipelineStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);


    new CfnOutput(this, 'dashboardsBucketRef', {
      value: JSON.stringify(props.inputData),
      description: 'The name of the Dashboards s3 bucket',
      exportName: 'dashboardsBucketARN',
    });
    const clientBucket = new s3.Bucket(this, 'client-bucket', {
      bucketName: "bucket107147881visd",
      removalPolicy: RemovalPolicy.DESTROY, // Todo: Remove this
      autoDeleteObjects: true // Todo: Remove this
    });

  }
}

module.exports = { DemoawspipelineStack }
