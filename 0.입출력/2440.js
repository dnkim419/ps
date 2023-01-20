const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = input; i >= 1; --i) {
  let star = '';
  for (j = 1; j <= i; ++j) {
    star += '*';
  }
  console.log(star);
}
