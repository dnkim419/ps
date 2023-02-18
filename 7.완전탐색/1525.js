const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const bgn = fs.readFileSync(filePath).toString().replace(/(\s*)/g, '');

// [상, 하, 좌, 우]
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const answer = '123456780';
const zero = '0';

const bfs = () => {
  let visited = {};
  let queue = [];
  queue.push([bgn, 0]);
  while (queue.length) {
    const [cur, cnt] = queue.shift();
    if (cur === answer) {
      return cnt;
    }

    const zeroLoc = cur.indexOf(zero);
    const [x, y] = [parseInt(zeroLoc / 3), zeroLoc % 3];
    for (let i = 0; i < 4; ++i) {
      const xx = dx[i] + x;
      const yy = dy[i] + y;
      const move = xx * 3 + yy;
      if (xx >= 0 && xx < 3 && yy >= 0 && yy < 3) {
        const tmp = cur.charAt(move);
        let nxt;
        switch (i) {
          case 0: // 상
            nxt =
              cur.slice(0, move) +
              zero +
              cur.slice(move + 1, zeroLoc) +
              tmp +
              cur.slice(zeroLoc + 1);
            break;
          case 1: // 하
            nxt =
              cur.slice(0, zeroLoc) +
              tmp +
              cur.slice(zeroLoc + 1, move) +
              zero +
              cur.slice(move + 1);
            break;
          case 2: // 좌
            nxt = cur.slice(0, move) + zero + tmp + cur.slice(zeroLoc + 1);
            break;
          case 3: // 우
            nxt = cur.slice(0, zeroLoc) + tmp + zero + cur.slice(move + 1);
            break;
        }

        if (!visited[`${nxt}`]) {
          queue.push([nxt, cnt + 1]);
          visited[`${nxt}`] = cnt + 1;
          console.log(visited);
        }
      }
    }
  }

  return -1;
};

console.log(bfs());
