const fs = require('fs');
const [month, day] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

/**
 * 7로 나눴을 때 나머지, 요일
 * 1, 월
 * 2, 화
 * 3, 수
 * 4, 목
 * 5, 금
 * 6, 토
 * 0, 일
 */
const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let accumulator = 0;
for (let i = 0; i < month - 1; ++i) {
  accumulator += days[i];
}
accumulator += day;
switch (accumulator % 7) {
  case 1:
    console.log('MON');
    break;
  case 2:
    console.log('TUE');
    break;
  case 3:
    console.log('WED');
    break;
  case 4:
    console.log('THU');
    break;
  case 5:
    console.log('FRI');
    break;
  case 6:
    console.log('SAT');
    break;
  case 0:
    console.log('SUN');
    break;
}
