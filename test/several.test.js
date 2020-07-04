const {
  capitalize, stringReverse, calculator, analize,
} = require('../src/several.js');


test('Capitalize string', () => {
  expect(capitalize('popo')).toBe('Popo');
});

test('It returns reversed string', () => {
  expect(stringReverse('ñasñdkfjñalskdjfñalksjdñflkasd')).toBe('dsaklfñdjsklañfjdkslañjfkdñsañ');
});

test('It adds two numbers', () => {
  expect(calculator.add(4500, 1)).toBe(4501);
});

test('It substracts two numbers', () => {
  expect(calculator.subtract(10000, 9999)).toBe(1);
});

test('It multiplies two numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('It divides two numbers', () => {
  expect(calculator.divide(32, 16)).toBe(2);
});
test('check avg, min, max and len ', () => {
  const analysis = analize([5, 5, 5, 5, 10, 3]);
  expect(analysis.average).toBe(5.5);
  expect(analysis.max).toBe(10);
  expect(analysis.min).toBe(3);
  expect(analysis.length).toBe(6);
});