const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= input; ++i) {
  let star = '';
  for (let j = 1; j <= input; ++j) {
    star += j >= i ? '*' : ' ';
  }
  console.log(star);
}
