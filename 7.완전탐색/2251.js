const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [cpctyA, cpctyB, cpctyC] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = {};
const queue = [];

const pour = (cur, cpcty, [fromIdx, toIdx, idx]) => {
  const nxt = new Array(3);
  nxt[idx] = cur[idx];
  if (cur[fromIdx] < cpcty[toIdx] - cur[toIdx]) {
    nxt[fromIdx] = 0;
    nxt[toIdx] = cur[toIdx] + cur[fromIdx];
  } else {
    nxt[fromIdx] = cur[fromIdx] - (cpcty[toIdx] - cur[toIdx]);
    nxt[toIdx] = cpcty[toIdx];
  }

  if (!visited[`${nxt}`]) {
    queue.push(nxt);
    visited[`${nxt}`] = true;
  }
};

const permutation = (permu, rests, output) => {
  if (rests.length === 0) {
    output.push(permu);
    return;
  }

  rests.forEach((v, idx) => {
    const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
    permutation([...permu, v], rest, output);
  });
};

const output = [];
permutation([], [0, 1, 2], output);

const bfs = () => {
  const answer = [];
  queue.push([0, 0, cpctyC]);
  visited[`${[0, 0, cpctyC]}`] = true;
  while (queue.length) {
    const cur = queue.shift();
    const [curA, curB, curC] = cur;
    if (curA === 0) {
      answer.push(curC);
    }

    output.map(([fromIdx, toIdx, idx]) => {
      if (cur[fromIdx] > 0) {
        pour(cur, [cpctyA, cpctyB, cpctyC], [fromIdx, toIdx, idx]);
      }
    });
  }

  const set = new Set(answer);
  const uniqueAnswer = [...set].sort((a, b) => {
    return a - b;
  });
  console.log(...uniqueAnswer);
};

bfs();
