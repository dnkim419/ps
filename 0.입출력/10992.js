const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= input - 1; ++i) {
  let star = '';
  star += ' '.repeat(input - i) + '*';
  if (i > 1) {
    star += ' '.repeat(2 * i - 3) + '*';
  }
  console.log(star);
}
let star = '*'.repeat(2 * input - 1);
console.log(star);
