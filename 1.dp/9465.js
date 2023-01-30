const fs = require('fs');
const [input, ...inputs] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

let num = Number(input);

function getMaxSum(inputs) {
  const [n, row1, row2, ...rest] = inputs;
  const sticker = [row1.split(' ').map(Number), row2.split(' ').map(Number)];
  const dp = Array.from(new Array(2), () => new Array(Number(n + 1)).fill(0));
  dp[0][1] = sticker[0][0];
  dp[1][1] = sticker[1][0];
  for (let j = 2; j <= Number(n); ++j) {
    dp[0][j] = Math.max(dp[1][j - 2], dp[1][j - 1]) + sticker[0][j - 1];
    dp[1][j] = Math.max(dp[0][j - 2], dp[0][j - 1]) + sticker[1][j - 1];
  }
  console.log(Math.max(dp[0][Number(n)], dp[1][Number(n)]));
  num -= 1;
  if (num !== 0) getMaxSum(rest);
}

getMaxSum(inputs);
