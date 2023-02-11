const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, input2, inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const n = Number(input.trim());
const m = Number(input2.trim());
let btns = [];
if (m !== 0) btns = inputs.split(' ').map(Number);

let closest = 100;
let min = Math.abs(n - 100);
for (let i = 0; i <= 999900; ++i) {
  let cur = i.toString();
  let check = true;
  for (let j = 0; j < cur.length; ++j) {
    if (btns.includes(Number(cur[j]))) check = false;
  }

  if (check) {
    let temp = cur.length + Math.abs(n - i);
    if (temp < min) {
      closest = i;
      min = temp;
    }
  }
}

console.log(n === 100 ? 0 : min);
