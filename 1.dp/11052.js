const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const prices = inputs.split(' ').map(Number);
prices.unshift(0);

const dp = new Array(n + 1).fill(0);
dp[1] = prices[1];

for (let i = 2; i <= n; ++i) {
  let max = prices[i];
  for (let j = 1; j < i; ++j) {
    max = Math.max(max, dp[i - j] + prices[j]);
  }
  dp[i] = max;
}

console.log(dp[n]);
