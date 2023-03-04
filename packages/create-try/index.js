#! /usr/bin/env node
import commandLineArgs from 'command-line-args';

//配置命令参数
const optionDefinitions = [
  { name: 'version', alias: 'v', type: Boolean },
  { name: 'arg1', type: String },
  { name: 'arg2', type: Number },
];  
const options = commandLineArgs(optionDefinitions);
console.log(options);
console.log("123");
