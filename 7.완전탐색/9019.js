/** 시간 초과
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [input, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const t = Number(input.trim());
const cases = [];
inputs.map((e) => {
  cases.push(e.trim().split(' ').map(Number));
});

const dslr = (num) => {
  const cur = num.toString();
  let arr = [];
  // D
  arr.push([(num * 2) % 100000, 'D']);
  // S
  arr.push([num === 0 ? 9999 : num - 1, 'S']);
  // L
  arr.push([Number(cur.slice(1) + cur.slice(0, 1)), 'L']);
  // R
  arr.push([Number(cur.slice(3) + cur.slice(0, 3)), 'R']);

  return arr;
};

const bfs = (bgn, dst) => {
  const visited = new Array(10000).fill(false);
  let queue = [];
  queue.push([bgn, '']);
  visited[bgn] = true;
  while (queue.length) {
    const [cur, cmdLst] = queue.shift();
    if (cur === dst) return cmdLst;
    for ([nxt, cmd] of dslr(cur)) {
      if (visited[nxt] === false) {
        visited[nxt] = true;
        queue.push([nxt, cmdLst + cmd]);
      }
    }
  }
};

cases.map(([bgn, dst]) => {
  console.log(bfs(bgn, dst));
});
*/
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.shift();
const ans = [];
const bfs = (start, end) => {
  const visited = Array.from({ length: 10000 }, () => false);
  visited[start] = true;
  const queue = [[start, '']];

  while (queue.length) {
    let [cur, path] = queue.shift();
    if (cur === end) {
      ans.push(path);
      return;
    }

    const nextD = (cur * 2) % 10000;
    if (!visited[nextD]) {
      visited[nextD] = true;
      queue.push([nextD, path + 'D']);
    }

    const nextS = cur === 0 ? 9999 : cur - 1;
    if (!visited[nextS]) {
      visited[nextS] = true;
      queue.push([nextS, path + 'S']);
    }

    const nextL = (cur % 1000) * 10 + Math.floor(cur / 1000);
    if (!visited[nextL]) {
      visited[nextL] = true;
      queue.push([nextL, path + 'L']);
    }

    const nextR = (cur % 10) * 1000 + Math.floor(cur / 10);
    if (!visited[nextR]) {
      visited[nextR] = true;
      queue.push([nextR, path + 'R']);
    }
  }
};
input.map((i) => {
  const [start, end] = i.split(' ').map(Number);
  bfs(start, end);
});

console.log(ans.join('\n'));
