const fs = require('fs');
const [n, ...wine] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));

const dp = new Array(n + 1).fill(0);
dp[1] = wine[0];
dp[2] = wine[0] + wine[1];
for (let i = 3; i <= n; ++i) {
  dp[i] = Math.max(
    dp[i - 2] + wine[i - 1],
    dp[i - 3] + wine[i - 2] + wine[i - 1],
    dp[i - 1]
  );
}
console.log(dp[n]);
