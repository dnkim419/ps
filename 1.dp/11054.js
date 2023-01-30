const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const sequence = inputs.split(' ').map(Number);
sequence.unshift(-1);

/**
 * 왼쪽끝에서부터 증가하는 dp
 * 오른쪽끝에서부터 증가하는 dp
 * 두 개 합 제일 큰 거
 */
const increase = new Array(n + 1).fill(1);
const decrease = new Array(n + 1).fill(1);
for (let i = 2; i <= n; ++i) {
  let max = 0;
  for (let j = 1; j < i; ++j) {
    if (sequence[j] < sequence[i]) max = Math.max(max, increase[j]);
  }
  increase[i] = max + 1;
}

for (let i = n - 1; i >= 1; --i) {
  let max = 0;
  for (let j = n; j > i; --j) {
    if (sequence[j] < sequence[i]) max = Math.max(max, decrease[j]);
  }
  decrease[i] = max + 1;
}

const result = increase.reduce((acc, cur, idx) => {
  return [...acc, cur + decrease[idx] - 1];
}, new Array());

console.log(Math.max(...result));
