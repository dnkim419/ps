/**
 * p(1) = 1
 * p(2) = 1
 * p(3) = 1
 * p(4) = p(1) + p(3) = 1 + 1 = 2
 * p(5) = 2
 * p(6) = p(1) + p(5) = 1 + 2 = 3
 * p(7) = p(2) + p(6) = 1 + 3 = 4
 * p(8) = p(3) + p(7) = 1 + 4 = 5
 * p(9) = p(4) + p(8) = 2 + 5 = 7
 * p(10) = p(5) + p(9) = 2 + 7 = 9
 * p(11) = p(6) + p(10) = 3 + 9 = 12
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));

inputs.map((n) => {
  const dp = new Array(n + 1).fill(1);
  dp[4] = 2;
  dp[5] = 2;
  for (let i = 6; i <= n; ++i) {
    dp[i] = dp[i - 5] + dp[i - 1];
  }
  console.log(dp[n]);
});
