#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const { DemoawspipelineStack } = require('../lib/demoawspipeline-stack');

const app = new cdk.App();
new DemoawspipelineStack(app, 'DemoawspipelineStack', {

  env: { account: '932399466203', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
