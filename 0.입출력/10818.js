const fs = require('fs');
const [n, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input.trim().split(' ').map(Number);
const [min, ...greater] = numbers.sort((a, b) => a - b);
const [max, ...less] = numbers.sort((a, b) => b - a);
console.log(`${min} ${max}`);
