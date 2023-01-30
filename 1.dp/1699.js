const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(n + 1).fill(0);
// 모든 숫자는 1^2으로 표현할 때 항 개수 최대
for (let i = 1; i <= n; ++i) dp[i] = i;
for (let i = 1; i <= n; ++i) {
  for (let j = 1; Math.pow(j, 2) <= i; ++j) {
    dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
  }
}
console.log(dp[n]);
