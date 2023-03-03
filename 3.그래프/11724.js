const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [nm, ...inputs] = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = nm.trim().split(' ').map(Number);
const edges = [];
inputs.map((e) => edges.push(e.split(' ').map(Number)));

const visited = new Array(n + 1).fill(false);

const dfs = (v) => {
  if (visited[v]) return;
  visited[v] = true;

  const tmp = [];
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j <= 1; j++) {
      if (edges[i][j] === v && !visited[edges[i][1 - j]]) {
        tmp.push(edges[i][1 - j]);
      }
    }
  }
  tmp.map((nxt) => {
    dfs(nxt);
  });
};

let count = 0;

for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  dfs(i);
  count++;
}

console.log(count);
