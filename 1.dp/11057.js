const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array.from(new Array(n + 1), () => new Array(10).fill(0));
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i < dp.length; ++i) {
  dp[i][0] = dp[i - 1][0] % 10007;
  for (let j = 1; j <= 9; ++j) {
    for (let k = 0; k <= j; ++k) {
      dp[i][j] += dp[i - 1][k];
    }
    dp[i][j] %= 10007;
  }
}

const sum = dp[n].reduce((a, b) => a + b, 0);
console.log(sum % 10007);
