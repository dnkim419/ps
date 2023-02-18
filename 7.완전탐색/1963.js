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

const isPrime = (num) => {
  const sqrt = parseInt(Math.sqrt(num));
  for (let i = 2; i <= sqrt; ++i) {
    if (num % i === 0) return false;
  }

  return true;
};

// cur 한자리씩만 바꾼 숫자목록 구하기
const getNumList = (num) => {
  const cur = num.toString();
  let arr = [];
  for (let i = 0; i < cur.length; ++i) {
    for (let j = 0; j <= 9; ++j) {
      if (i === 0 && j === 0) continue;
      if (j === Number(cur[i])) continue;
      arr.push(Number(cur.slice(0, i) + j.toString() + cur.slice(i + 1)));
    }
  }

  return arr;
};

const bfs = (bgn, dst) => {
  const visited = new Array(10000).fill(false);
  let queue = [];
  queue.push([bgn, 0]);
  visited[bgn] = true;
  while (queue.length) {
    let [cur, cnt] = queue.shift();
    if (cur === dst) return cnt;
    for (let nxt of getNumList(cur)) {
      if (visited[nxt] === false && isPrime(nxt)) {
        visited[nxt] = true;
        queue.push([nxt, cnt + 1]);
      }
    }
  }
};

cases.map(([bgn, dst]) => console.log(bfs(bgn, dst)));
