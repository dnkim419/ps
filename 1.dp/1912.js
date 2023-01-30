const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const sequence = inputs.split(' ').map(Number);
sequence.unshift(-1);

/**
 * i자리 수부터 시작
 * 하나씩 더해보며 커질때마다 max값 갱신
 * 이걸 모든 자리 반복(n번)
 */
const dp = new Array(n + 1).fill(0);
dp[1] = sequence[1];
for (let i = 2; i <= n; ++i) {
  dp[i] =
    dp[i - 1] + sequence[i] > sequence[i]
      ? dp[i - 1] + sequence[i]
      : sequence[i];
}

dp.shift();
console.log(Math.max(...dp));
