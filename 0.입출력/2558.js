const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input.map((e) => parseInt(e.trim()));
console.log(a + b);
