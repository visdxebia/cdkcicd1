const { Stage, Duration, SecretValue } = require('aws-cdk-lib');
const lambdaStack = require('./lambda-stack');

class PipelineAppStage extends Stage {
  constructor(scope, id, props) {
    super(scope, id, props);

    const demolambdaStack = new lambdaStack(this, 'lambdaStack')
  }
}

module.exports = PipelineAppStage
