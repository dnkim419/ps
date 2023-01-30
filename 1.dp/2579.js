const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [n, ...sequence] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));
sequence.unshift(-1);
/**
 * i번째 칸을 밟았다
 * i-1번째 칸을 밟고, i-2번째 칸을 밟지 않았거나
 * dp(i-3) + seq(i-1) + seq(i)
 * i-1번째 칸을 밟지 않고, i-2번째 칸을 밟았거나
 * dp(i-2) + seq(i)
 */
const dp = new Array(n + 1).fill(0);
dp[1] = sequence[1];
dp[2] = sequence[1] + sequence[2];
for (let i = 3; i <= n; ++i) {
  dp[i] = Math.max(
    dp[i - 3] + sequence[i - 1] + sequence[i],
    dp[i - 2] + sequence[i]
  );
}
console.log(dp[n]);
