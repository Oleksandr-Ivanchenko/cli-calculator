const { CLICalculator } = require('../CLICalculator');

describe('CLICalculator function', () => {
  const originalArgv = process.argv;

  afterEach(() => {
    process.argv = originalArgv;
  });

  test('valid add command returns correct result', () => {
    process.argv = ['node', 'main.js', 'add', '2', '3'];
    expect(CLICalculator()).toBe(5);
  });

  test('invalid command throws error', () => {
    process.argv = ['node', 'main.js', 'modulo', '2', '3'];
    expect(() => CLICalculator()).toThrow('Operation is not supported');
  });

  test('missing arguments throws error', () => {
    process.argv = ['node', 'main.js', 'add', '2'];
    expect(() => CLICalculator()).toThrow('Script accepts 3 arguments');
  });

  test('non-numeric input throws error', () => {
    process.argv = ['node', 'main.js', 'add', 'a', '3'];
    expect(() => CLICalculator()).toThrow('Both operands should be numbers');
  });
});
