const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = new Array(num + 1).fill(0);

for (let i = 2; i < dp.length; ++i) {
  dp[i] = dp[i - 1] + 1;

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
}

console.log(dp[num]);
