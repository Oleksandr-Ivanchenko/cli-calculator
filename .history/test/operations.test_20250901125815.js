const add = require('../operations/add');
const subtract = require('../operations/subtract');
const multiply = require('../operations/multiply');
const divide = require('../operations/divide');

describe('CLI Calculator Operations', () => {
  test('add: 100 + 500 = 600', () => {
    expect(add(100, 500)).toBe(600);
  });

  test('subtract: 100 - 50 = 50', () => {
    expect(subtract(100, 50)).toBe(50);
  });

  test('multiply: 7 * 6 = 42', () => {
    expect(multiply(7, 6)).toBe(42);
  });

  test('divide: 10 / 2 = 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero throws error', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
