const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const sequence = inputs.trim().split(' ').map(Number);
sequence.unshift(-1);

const dp = new Array(n + 1).fill(1);
for (let i = 2; i <= n; ++i) {
  let max = 0;
  for (let j = 1; j < i; ++j) {
    if (sequence[j] > sequence[i]) max = Math.max(max, dp[j]);
  }
  dp[i] = max + 1;
}
console.log(Math.max(...dp));
