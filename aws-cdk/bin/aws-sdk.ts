#!/usr/bin/env node
import 'source-map-support/register';
import {  App } from 'aws-cdk-lib';
import { AwsSdkStack } from '../lib/aws-sdk-stack';

const app = new App();
new AwsSdkStack(app, 'AwsSdkStack');
