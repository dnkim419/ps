const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const k = Number(input.trim());
const cases = [];
while (inputs.length) {
  const cur = inputs.shift();
  const [numV, numE] = cur.trim().split(' ').map(Number);
  const edges = [];
  for (let i = 0; i < numE; i++) {
    const edge = inputs.shift();
    const [u, v] = edge.trim().split(' ').map(Number);
    edges.push([u, v]);
  }

  cases.push([numV, edges]);
}

let isBi = true;

const dfs = (v, visited, edges, curSet) => {
  if (visited[v] !== -1) {
    for (let i = 0; i < edges.length; i++) {
      for (let j = 0; j <= 1; j++) {
        if (
          edges[i][j] === v &&
          visited[edges[i][j]] === visited[edges[i][1 - j]]
        ) {
          isBi = false;
        }
      }
    }
    return;
  }
  visited[v] = curSet;
  const nxtSet = 1 - curSet;

  const tmp = [];
  for (let i = 0; i < edges.length; i++) {
    for (let j = 0; j <= 1; j++) {
      if (edges[i][j] === v) {
        if (visited[edges[i][1 - j]] === -1) {
          tmp.push(edges[i][1 - j]);
        } else if (visited[edges[i][1 - j]] === curSet) {
          isBi = false;
        }
      }
    }
  }

  tmp.map((nxt) => {
    dfs(nxt, visited, edges, nxtSet);
  });
};

for (let i = 0; i < cases.length; i++) {
  const [numV, edges] = cases[i];
  /**
   * 미방문 -1
   * 집합A  0
   * 집합B  1
   */
  const visited = new Array(numV + 1).fill(-1);
  for (let j = 1; j <= numV; j++) {
    if (visited[j] === -1) {
      dfs(j, visited, edges, 0);
      if (!isBi) break;
    }
  }
  isBi ? console.log('YES') : console.log('NO');
}
