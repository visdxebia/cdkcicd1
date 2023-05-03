const { Stack, Duration, SecretValue } = require('aws-cdk-lib');
const pipelines = require('aws-cdk-lib/pipelines');
const pipelineState = require('./demoawspipeline-app-stack')

class DemoawspipelineStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // AWS CI-CD Pipeline
    const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
      synth: new pipelines.ShellStep('Synth', {
        // Use a connection created using the AWS console to authenticate to GitHub
        // Other sources are available.
        input: pipelines.CodePipelineSource.gitHub('visdxebia/cdkcicd1', 'master', {
          authentication: new SecretValue('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')
        }),
        commands: [
          'npm ci',
          'npm run build',
          'npx cdk synth',
        ],
      }),
    });

    const testingStage = pipeline.addStage(new PipelineAppStage(this, 'test', {
      env: {account: '932399466203', region: 'us-east-1'}
    }));

    testingStage.addPost(new pipelines.ManualApprovalStep('approval'));

    const prodStage = pipeline.addStage(new PipelineAppStage(this, 'prod', {
      env: {account: '932399466203', region: 'us-east-1'}
    }))


  }
}

module.exports = { DemoawspipelineStack }
