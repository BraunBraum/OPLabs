'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
      Yarick_PolyanaKing: "+380000000000",
      Marcus_Aurelius: "+380111111111",
      Vitalii_Volochai: "+380222222222",
      Timur_Shemsedinov: "+380333333333",
      Oleksandr_Tuhanskykh: "+380444444444",
      Deans_Office_FIOT: "+380555555555"
    };

const findPhoneByName = (name) => {
  return phonebook[name];
};

module.exports = { phonebook, findPhoneByName };
