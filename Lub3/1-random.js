'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  const interval = max - min + 1;
  return min + Math.floor(Math.random() * interval);
};
console.log(random(1, 10));
console.log(random(20));
module.exports = { random };
