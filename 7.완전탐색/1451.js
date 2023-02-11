const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './testcase.txt';
const [inputs, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
[n, m] = inputs.trim().split(' ').map(Number);
rectangle = [];
input.map((line) => {
  rectangle.push(line.trim().split('').map(Number));
});

let [rec1, rec2, rec3] = [0, 0, 0];
let max = 0;
if (n === 1) {
  // 세로로만 자르기
  for (let i = 0; i <= m - 3; ++i) {
    for (let j = i + 1; j <= m - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec1 += rectangle[l][k];
        }
      }

      for (let k = i + 1; k <= j; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec2 += rectangle[l][k];
        }
      }

      for (let k = j + 1; k <= m - 1; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec3 += rectangle[l][k];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }
} else if (m === 1) {
  // 가로로만 자르기
  for (let i = 0; i <= n - 3; ++i) {
    for (let j = i + 1; j <= n - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec1 += rectangle[k][l];
        }
      }

      for (let k = i + 1; k <= j; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec2 += rectangle[k][l];
        }
      }

      for (let k = j + 1; k <= n - 1; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec3 += rectangle[k][l];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }
} else {
  //세로로만 자르기
  for (let i = 0; i <= m - 3; ++i) {
    for (let j = i + 1; j <= m - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec1 += rectangle[l][k];
        }
      }

      for (let k = i + 1; k <= j; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec2 += rectangle[l][k];
        }
      }

      for (let k = j + 1; k <= m - 1; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec3 += rectangle[l][k];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }

  //가로로만 자르기
  for (let i = 0; i <= n - 3; ++i) {
    for (let j = i + 1; j <= n - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec1 += rectangle[k][l];
        }
      }

      for (let k = i + 1; k <= j; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec2 += rectangle[k][l];
        }
      }

      for (let k = j + 1; k <= n - 1; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec3 += rectangle[k][l];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }

  // ㅜ
  for (let i = 0; i <= n - 2; ++i) {
    for (let j = 0; j <= m - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= m - 1; ++l) {
          rec1 += rectangle[k][l];
        }
      }

      for (let k = i + 1; k <= n - 1; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec2 += rectangle[k][l];
        }

        for (let l = j + 1; l <= m - 1; ++l) {
          rec3 += rectangle[k][l];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }

  // ㅏ
  for (let i = 0; i <= m - 2; ++i) {
    for (let j = 0; j <= n - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= n - 1; ++l) {
          rec1 += rectangle[l][k];
        }
      }

      for (let k = i + 1; k <= m - 1; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec2 += rectangle[l][k];
        }

        for (let l = j + 1; l <= n - 1; ++l) {
          rec3 += rectangle[l][k];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }

  // ㅗ
  for (let i = 0; i <= m - 2; ++i) {
    for (let j = 0; j <= n - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec1 += rectangle[l][k];
        }
      }

      for (let k = i + 1; k <= m - 1; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec2 += rectangle[l][k];
        }
      }

      for (let k = 0; k <= m - 1; ++k) {
        for (let l = j + 1; l <= n - 1; ++l) {
          rec3 += rectangle[l][k];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }

  // ㅓ
  for (let i = 0; i <= n - 2; ++i) {
    for (let j = 0; j <= m - 2; ++j) {
      for (let k = 0; k <= i; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec1 += rectangle[k][l];
        }
      }

      for (let k = i + 1; k <= n - 1; ++k) {
        for (let l = 0; l <= j; ++l) {
          rec2 += rectangle[k][l];
        }
      }

      for (let k = 0; k <= n - 1; ++k) {
        for (let l = j + 1; l <= m - 1; ++l) {
          rec3 += rectangle[k][l];
        }
      }

      max = Math.max(max, rec1 * rec2 * rec3);
      [rec1, rec2, rec3] = [0, 0, 0];
    }
  }
}

console.log(max);
