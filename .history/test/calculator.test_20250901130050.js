const { calculator } = require('../calculator');

describe('calculator module', () => {
  test('add: 2 + 3 = 5', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtract: 10 - 4 = 6', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('multiply: 6 * 7 = 42', () => {
    expect(calculator.multiply(6, 7)).toBe(42);
  });

  test('divide: 8 / 2 = 4', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  test('divide by zero returns Infinity', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });
});
