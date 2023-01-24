const fs = require('fs');
const [n, ...numbers] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));

numbers.map((number) => {
  const dp = new Array(number + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < dp.length; ++i) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  console.log(dp[number]);
});
