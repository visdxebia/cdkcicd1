#!/usr/bin/env node
const fs = require('fs');
const cdk = require('aws-cdk-lib');
const { DemoawspipelineStack } = require('../lib/demoawspipeline-stack');
const fileContents = fs.readFileSync('./data.json', "utf-8")
const inputData = JSON.parse(fileContents);

const app = new cdk.App();
new DemoawspipelineStack(app, 'DemoawspipelineStack', {

  env: { account: '932399466203', region: 'us-east-1' },
  inputData
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
