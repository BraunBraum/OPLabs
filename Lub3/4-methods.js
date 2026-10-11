'use strict';

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};
const exempleInterface = methods({
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3: function (x, y, z) {
    return [x, y, z];
  },
  m4: [2, 3, 4],
  m5: 'hello',
});

console.log(exempleInterface);

module.exports = { methods };
