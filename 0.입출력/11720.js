const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input.split('').map(Number);
const sum = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(sum);
