const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [...esm] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let year = 1;
while (true) {
  const [e, s, m] = esm;
  if (year % 15 === e % 15 && year % 28 === s % 28 && year % 19 === m % 19)
    break;

  year += 1;
}
console.log(year);
