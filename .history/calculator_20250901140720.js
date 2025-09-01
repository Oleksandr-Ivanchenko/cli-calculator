#!/usr/bin/env node

module.exports = {
  calculator: {
    add: require('./operations/add'),
    subtract: require('./operations/subtract'),
    multiply: require('./operations/multiply'),
    divide: require('./operations/divide'),
  }
};
