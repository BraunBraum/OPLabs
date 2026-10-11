'use strict';

const inc = (obj) => {
  obj.n += 1;
};
const a = { n: 5 };
console.dir({ a });
inc(a);
console.dir({ a });
