const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = input; i >= 1; --i) {
  let star = '';
  star += ' '.repeat(input - i) + '*'.repeat(2 * i - 1);
  console.log(star);
}
for (let i = 2; i <= input; ++i) {
  let star = '';
  star += ' '.repeat(input - i) + '*'.repeat(2 * i - 1);
  console.log(star);
}
