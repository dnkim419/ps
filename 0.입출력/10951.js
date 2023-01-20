const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.map((e) => {
  const [a, b] = e.trim().split(' ').map(Number);
  console.log(a + b);
});
