const { Stack, Duration, SecretValue } = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');

class DemoawspipelineStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const demoLambda = new lambda.Function(this, 'lambdaFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline('exports.handler = _ => "Hello, CDK";')
    })
  }
}

module.exports = DemoawspipelineStack
