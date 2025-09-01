const { calculator } = require('./calculator');

/**
 * Обрабатывает аргументы из CLI и возвращает результат.
 * @returns {number}
 */
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

  switch (command) {
    case 'add':
      return calculator.add(x, y);
    case 'subtract':
      return calculator.subtract(x, y);
    case 'multiply':
      return calculator.multiply(x, y);
    case 'divide':
      return calculator.divide(x, y);
    default:
      throw new Error('Operation is not supported');
  }
}

module.exports = {
  CLICalculator,
};
