const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const n = Number(fs.readFileSync(filePath).toString().trim());

/**
 * n=4 부터는 바리에이션 때문에 +2
 * dp[2] = 3
 * dp[4] = dp[2] * dp[2] + 2
 * dp[6] = dp[4] * dp[2] + dp[2] * 2 + 2
 * dp[8] = dp[6] * dp[2] + dp[4] * 2 + dp[2] * 2 + 2
 */
const dp = new Array(n + 1).fill(0);
dp[2] = 3;
for (let i = 4; i <= n; i += 2) {
  dp[i] += 2;
  for (let j = 2; j <= i - 4; j += 2) {
    dp[i] += dp[j] * 2;
  }
  dp[i] += dp[i - 2] * dp[2];
}
console.log(dp[n]);
