'use strict';

const RANDOM_ARRAY = [true, 'hello', 5, 12, -200, false, false, 'word', 0, null, 'шось', undefined, 'ше шось', true, 500, undefined, null];
const countTypesInArray1 = (arr) => {
    const counters = {
        boolean: 0,
        string: 0,
        number: 0,
        object: 0,
        undefined: 0
    };
    for (const item of arr) {
        const type = typeof item;
        if (counters.hasOwnProperty(type)) {
            counters[type]++;
        }
    }
    return counters;
};
const countTypesInArray2 = (arr) => {
  const typeCounts = {};
  for (const item of arr) {
    const type = typeof item;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  }
  return typeCounts;
};
const counter1 = countTypesInArray1(RANDOM_ARRAY);
const counter2 = countTypesInArray2(RANDOM_ARRAY);
console.dir({ RANDOM_ARRAY, counter1, counter2 });
