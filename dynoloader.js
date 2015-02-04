#!/usr/bin/env node

var program = require('commander');

program
  .version('0.0.0')
  .command('load [configPath]', "Loads csv's into DynamoDB based on config")
  .parse(process.argv);
