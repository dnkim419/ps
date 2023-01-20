const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

while (input.length > 0) {
  console.log(input.slice(0, 10));
  input = input.slice(10);
}
