const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = Array.from(new Array(n + 1), () => new Array(10));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i < dp.length; ++i) {
  dp[i][0] = dp[i - 1][1] % 1000000000;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % 1000000000;
  dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % 1000000000;
  dp[i][3] = (dp[i - 1][2] + dp[i - 1][4]) % 1000000000;
  dp[i][4] = (dp[i - 1][3] + dp[i - 1][5]) % 1000000000;
  dp[i][5] = (dp[i - 1][4] + dp[i - 1][6]) % 1000000000;
  dp[i][6] = (dp[i - 1][5] + dp[i - 1][7]) % 1000000000;
  dp[i][7] = (dp[i - 1][6] + dp[i - 1][8]) % 1000000000;
  dp[i][8] = (dp[i - 1][7] + dp[i - 1][9]) % 1000000000;
  dp[i][9] = dp[i - 1][8] % 1000000000;
}

const sum = dp[n].reduce((a, b) => a + b, 0);
console.log(sum % 1000000000);
