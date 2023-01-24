const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= input; ++i) {
  let star = '';
  star += ' '.repeat(input - i) + '*' + ' *'.repeat(i - 1);
  console.log(star);
}
