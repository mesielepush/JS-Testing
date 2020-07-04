const capitalize = (string) => string.split('')[0].toUpperCase() + string.slice(1);

const stringReverse = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

module.exports = {
    capitalize,
    stringReverse,
    calculator,
    
  };