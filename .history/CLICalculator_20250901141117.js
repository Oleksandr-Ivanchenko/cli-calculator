#!/usr/bin/env node

const { calculator } = require('./calculator');

function CLICalculator() {
  const [,, command, xArg, yArg] = process.argv;

  if (!command || xArg === undefined || yArg === undefined) {
    throw new Error('Script accepts 3 arguments');
  }

  const x = Number(xArg);
  const y = Number(yArg);

  if (isNaN(x) || isNaN(y)) {
    throw new Error('Both operands should be numbers');
  }

  if (!calculator[command]) {
    throw new Error('Unsupported operation');
  }

  return calculator[command](x, y);
}

try {
  console.log(CLICalculator());
} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
