const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

let answer = '';
for (let i = input; i >= 1; --i) {
  answer += i + '\n';
}
console.log(answer);
