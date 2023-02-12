const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [t, ...testCases] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));

/**
 * 1일때
 * 1
 *
 * 2일때
 * 1+1
 * 2
 *
 * 3일때
 * 1+1+1
 * 1+2
 * 2+1
 * 3
 *
 * 4일때
 * (1일때+3)
 * 1+3
 * (2일때+2)
 * 1+1+2
 * 2+2
 * (3일때+1)
 * 1+1+1+1
 * 1+2+1
 * 2+1+1
 * 3+1
 */

testCases.map((n) => {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= n; ++i) dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  console.log(dp[n]);
});
