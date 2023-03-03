const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [nmv, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [n, m, v] = nmv.split(' ').map(Number);
const edges = [];
inputs.map((e) => {
  edges.push(e.split(' ').map(Number));
});

const printArray = (arr) => {
  const n = arr.length;
  let str = '';
  for (let i = 0; i < n; ++i) {
    str += arr[i];
    if (i !== n - 1) str += ' ';
  }

  console.log(str);
};

const visited = new Array(n + 1).fill(false);
const answer = [];

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;
  answer.push(v);
  const tmp = [];
  for (let i = 0; i < edges.length; ++i) {
    for (let j = 0; j <= 1; ++j) {
      if (edges[i][j] === v && !visited[edges[i][1 - j]]) {
        nxt = edges[i][1 - j];
        tmp.push(nxt);
      }
    }
  }

  tmp.sort((a, b) => {
    return a - b;
  });

  tmp.map((nxt) => {
    dfs(nxt);
  });
};

dfs(v);
printArray(answer);

const bfs = () => {
  let queue = [];
  queue.push(v);
  const visited = new Array(n + 1).fill(false);
  visited[v] = true;
  const answer = [];

  while (queue.length) {
    const cur = queue.shift();
    answer.push(cur);
    const tmp = [];
    for (let i = 0; i < edges.length; ++i) {
      for (let j = 0; j <= 1; ++j) {
        if (edges[i][j] === cur && !visited[edges[i][1 - j]]) {
          nxt = edges[i][1 - j];
          tmp.push(nxt);
          visited[nxt] = true;
        }
      }
    }
    tmp.sort((a, b) => {
      return a - b;
    });
    queue = [...queue, ...tmp];
  }

  return answer;
};

printArray(bfs());
