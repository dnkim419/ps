const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, inputs] = fs.readFileSync(filePath).toString().trim().split('\n');
const n = Number(input.trim());
const arr = inputs.split(' ').map(Number);

const permutation = (permu, rests, output) => {
  if (rests.length === 0) {
    output.push(permu);
    return output;
  }
  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const output = [];
permutation([], arr, output);

let max = 0;
output.map((arr) => {
  let sum = 0;
  for (let i = 0; i <= n - 2; ++i) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  max = Math.max(max, sum);
});

console.log(max);
