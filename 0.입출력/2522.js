const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= input; ++i) {
  let star = '';
  star += ' '.repeat(input - i) + '*'.repeat(i);
  console.log(star);
}
for (let i = 1; i <= input - 1; ++i) {
  let star = '';
  star += ' '.repeat(i) + '*'.repeat(input - i);
  console.log(star);
}
