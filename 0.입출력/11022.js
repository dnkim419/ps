const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let x = 1;
input.map((e) => {
  const [a, b] = e.trim().split(' ').map(Number);
  if (x <= n) console.log(`Case #${x}: ${a} + ${b} = ${a + b}`);
  x += 1;
});
