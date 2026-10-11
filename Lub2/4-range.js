'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (begin, end) => {
  const len = end - begin;
  if (len < 0) return [];
  const array = new Array(len);
  let i = 0;
  for (let n = begin; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};
const RANGE = range(15, 30);
console.dir(RANGE);

module.exports = { range };
