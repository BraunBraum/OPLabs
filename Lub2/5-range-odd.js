'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (begin, end) => {
  const len = Math.ceil((end - begin) / 2);
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = begin; n <= end; n++) {
    if (n % 2 === 1) {
      array[i++] = n;
    }
  }
  return array;
};
const ODD_RANGE = rangeOdd(15, 30);
console.dir(ODD_RANGE);

module.exports = { rangeOdd };
