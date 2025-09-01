const { CLICalculator } = require('./CLICalculator');

try {
  const result = CLICalculator();
  console.log(result);
} catch (error) {
  console.error(error.message);
}
