const fs = require('fs');
const { format } = require('path');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

/**

const dp = Array.from(new Array(n + 1), () => new Array(2));
// dp[n] = [0으로 끝나는 n자리 이친수 개수, 1로 끝나는 n자리 이친수 개수]
dp[1] = [0, 1]; // 1자리 이친수: 1
dp[2] = [1, 0]; // 2자리 이친수: 10

for (let i = 3; i < dp.length; ++i) {
  dp[i] = [dp[i - 1][0] + dp[i - 1][1], dp[[i - 1][0]]];
}
const sum = dp[n].reduce((a, b) => a + b, 0);
console.log(sum);

*/

const dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < dp.length; ++i) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}
console.log(String(dp[n]));

// 피보나치 점화식
// BigInt로 처리하지 않고 Number로 처리하면 최대 정수값(2^53)을 넘겨 에러 발생
// BigInt는 끝에 n이 붙기 때문에 String으로 처리해야함
