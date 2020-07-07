const capitalize = (string) => string.split('')[0].toUpperCase() + string.slice(1);

const stringReverse = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

const analize = (array) => ({
  average: array.reduce((t, n) => t + n) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

module.exports = {
  capitalize,
  stringReverse,
  calculator,
  analize,
};