/** 메모리 초과
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const n = Number(input.trim());
let costs = [];
inputs.map((arr) => {
  costs.push(arr.trim().split(' ').map(Number));
});

const permutation = (permu, rests, output) => {
  if (rests.length === 0) {
    output.push(permu);
    return;
  }

  for (let i = 0; i < rests.length; ++i) {
    const rest = [...rests.slice(0, i), ...rests.slice(i + 1)];
    permutation([...permu, rests[i]], rest, output);
  }
};

const output = [];
const rests = [];
for (let i = 0; i < n; ++i) rests.push(i);
permutation([], rests, output);

let min = 4000000;
for (const arr of output) {
  let temp = 0;
  let isValid = true;
  for (let i = 0; i < n; ++i) {
    if (costs[arr[i % 4]][arr[(i + 1) % 4]] === 0) isValid = false;
    temp += costs[arr[i % 4]][arr[(i + 1) % 4]];
  }

  if (isValid) min = Math.min(min, temp);
}

console.log(min);
*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const permutations = function* (elements) {
  if (elements.length === 1) {
    yield elements;
  } else {
    const [first, ...rest] = elements;

    for (const a of permutations(rest)) {
      for (let i = 0; i < elements.length; i++) {
        const start = a.slice(0, i);
        const ended = a.slice(i);
        yield [...start, first, ...ended];
      }
    }
  }
};

rl.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  const map = input.slice(1).map((el) => el.split(' ').map(Number));
  const cities = new Array(map.length).fill(0).map((el, i) => i);
  let minValue = 987654321;
  for (const perm of permutations(cities)) {
    let sum = 0;
    for (let i = 0; i < perm.length; i++) {
      const starting = perm[i % perm.length];
      const arrival = perm[(i + 1) % perm.length];
      const distance = map[starting][arrival];

      sum += distance !== 0 ? distance : 987654321;
    }
    minValue = Math.min(sum, minValue);
  }

  console.log(minValue);
});
