const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let star = '';
for (let i = 1; i <= input; ++i) {
  star += '*';
  let blank = '';
  for (let j = i; j < input; ++j) blank += ' ';
  console.log(`${blank}${star}`);
}
