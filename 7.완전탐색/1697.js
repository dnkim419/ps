const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [n, k] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const visited = new Array(100001).fill(false);

const bfs = () => {
  let queue = [];
  queue.push([n, 0]);
  visited[n] = true;
  while (queue.length) {
    let [cur, time] = queue.shift();
    if (cur === k) return time;
    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next <= 100000 && visited[next] === false) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
};

console.log(bfs());
