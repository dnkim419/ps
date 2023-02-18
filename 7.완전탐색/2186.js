const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [nmk, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());
const [n, m, k] = nmk.split(' ').map(Number);
const [ans] = inputs.slice(n);
// 1. bfs 이용 시
//const dial = inputs.slice(0, n).join('');
// 2. dfs 이용 시
const dial = inputs.slice(0, n);

// [상, 하, 좌, 우]
// 행
const dx = [-1, 1, 0, 0];
// 열
const dy = [0, 0, -1, 1];

// 1. bfs 이용 풀이
const bfs = () => {
  const queue = [];
  const visited = {};
  let count = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (ans[0] === dial[4 * i + j]) {
        queue.push([[[i, j]], dial[4 * i + j]]);
        visited[`${JSON.stringify([[i, j]])}`] = true;
      }
    }
  }

  while (queue.length) {
    const [path, word] = queue.shift();
    if (word.length > ans.length) continue;
    if (word === ans) {
      ++count;
      continue;
    }
    const [x, y] = path[path.length - 1];

    for (let i = 0; i < 4; ++i) {
      for (let j = 1; j <= k; ++j) {
        const nx = x + dx[i] * j;
        const ny = y + dy[i] * j;

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          dial[4 * nx + ny] === ans[path.length]
        ) {
          if (!visited[`${JSON.stringify([...path, [nx, ny]])}`]) {
            queue.push([[...path, [nx, ny]], word + dial[4 * nx + ny]]);

            visited[`${JSON.stringify([...path, [nx, ny]])}`] = true;
          }
        }
      }
    }
  }

  console.log(count);
};

//bfs();

// 2. dfs 이용 풀이
//
// dp[i][j][k]
// 좌표 (i, j)에 ans의 k번째 인덱스로 방문
const dp = Array.from(new Array(n), () =>
  Array.from(new Array(m), () => new Array(ans.length).fill(-1))
);

const dfs = (x, y, cur) => {
  if (dp[x][y][cur] !== -1) return dp[x][y][cur];
  if (cur === ans.length - 1) return (dp[x][y][cur] = 1);

  dp[x][y][cur] = 0;

  for (let d = 0; d < 4; ++d) {
    for (let p = 1; p <= k; ++p) {
      const nx = x + dx[d] * p;
      const ny = y + dy[d] * p;

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (dial[nx][ny] === ans[cur + 1]) dp[x][y][cur] += dfs(nx, ny, cur + 1);
    }
  }

  return dp[x][y][cur];
};

let count = 0;
for (let i = 0; i < n; ++i) {
  for (let j = 0; j < m; ++j) {
    if (dial[i][j] === ans[0]) {
      count += dfs(i, j, 0);
    }
  }
}

console.log(count);
