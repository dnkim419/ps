const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const sequence = inputs.split(' ').map(Number);
sequence.unshift(-1);

const dp = new Array(n + 1).fill(0);
dp[1] = sequence[1];
for (let i = 2; i <= n; ++i) {
  let max = 0;
  for (let j = 1; j < i; ++j) {
    if (sequence[j] < sequence[i]) max = Math.max(dp[j], max);
  }
  dp[i] = max + sequence[i];
}
console.log(Math.max(...dp));
