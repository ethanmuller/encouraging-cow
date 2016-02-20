#!/usr/bin/env node
var cowsay = require('cowsay');

var compliments = require('./compliments');

console.log(cowsay.say({
  text: compliments.getRandomCompliment()
}));
