const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const sequence = inputs.trim().split(' ').map(Number);

const dp = new Array(n + 1).fill(1);
for (let i = 2; i < dp.length; ++i) {
  let max = 0;
  for (let j = 0; j < i - 1; ++j) {
    if (sequence[j] < sequence[i - 1]) max = Math.max(dp[j + 1], max);
  }
  dp[i] = Math.max(max + 1, dp[i]);
}

console.log(Math.max(...dp));
