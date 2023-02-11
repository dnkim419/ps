const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

/**
 * 0부터 n까지의 정수 k개를 더해 합이 n이 되도록
 * 숫자 하나 고정(m)
 * k-1개 더해 합이 n-m이 되도록
 *
 * dp 1개 2개 ... k-1개 k개 더해 합이 0 1 2 3 ... n
 */

//편의를 위해 첫 행은 비우겠음
const dp = Array.from(new Array(k + 1), () => new Array(n + 1).fill(0));

for (let j = 0; j <= n; ++j) {
  dp[1][j] = 1;
}

for (let i = 2; i <= k; ++i) {
  for (let j = 0; j <= n; ++j) {
    for (let m = 0; m <= j; ++m) {
      dp[i][j] += dp[i - 1][j - m];
      dp[i][j] %= 1000000000;
    }
  }
}
console.log(dp[k][n]);
