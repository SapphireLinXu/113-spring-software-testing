const Calc = require('./Calc');

test('adds two numbers', () => {
  expect(Calc.add(2, 3)).toBe(5); // 2 + 3 = 5
});

test('subtracts two numbers', () => {
  expect(Calc.subtract(5, 2)).toBe(3); // 5 - 2 = 3
});

test('multiplies two numbers', () => {
  expect(Calc.multiply(2, 3)).toBe(6); // 2 * 3 = 6
});

test('divides two numbers', () => {
  expect(Calc.divide(6, 3)).toBe(2); // 6 / 3 = 2
});

test('divides by zero', () => {
  expect(() => {
    Calc.divide(6, 0);
  }).toThrow("Cannot divide by zero"); // should throw an error
});

test('divides and returns float', () => {
  expect(Calc.divide(7, 2)).toBeCloseTo(3.5); // 7 / 2 = 3.5
});