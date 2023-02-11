const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const code = fs.readFileSync(filePath).toString().trim();

const dp = new Array(code.length).fill(0);
const mod = 1000000;

function isValid(num) {
  if (num.slice(0, 1) === '0') return false;
  if (Number.isInteger(Number(num))) {
    if (1 <= Number(num) && Number(num) <= 26) return true;
  }

  return false;
}

if (isValid(code.slice(0, 1))) dp[0] += 1;
if (isValid(code.slice(0, 2)) && code.slice(0, 2).length === 2) dp[1] += 1;

for (let i = 1; i < dp.length; ++i) {
  if (isValid(code.slice(i, i + 1))) {
    dp[i] += dp[i - 1];
    dp[i] %= mod;
  }
  if (isValid(code.slice(i, i + 2)) && code.slice(i, i + 2).length === 2) {
    dp[i + 1] += dp[i - 1];
    dp[i + 1] %= mod;
  }
}

console.log(dp[dp.length - 1]);
