"use strict";

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: "Marcus Aurelius", phone: "+380445554433" }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
  { name: "Yarick PolyanaKing", phone: "+380000000000" },
  { name: "Marcus Aurelius", phone: "+380111111111" },
  { name: "Vitalii Volochai", phone: "+380222222222" },
  { name: "Timur Shemsedinov", phone: "+380333333333" },
  { name: "Oleksandr Tuhanskykh", phone: "+380444444444" },
  { name: "Fallen Star", phone: "+380444444444" },
  { name: "Dean's Office FIOT", phone: "+380666666666" },
  { name: "Yarick PolyanaKing", phone: "+380777777777" }
];

const findPhoneByName = (name) => {
  const array = [];
  for (const obj of phonebook) {
    if (obj.name === name) {
      array.push(obj.phone);
    }
  }
  return array.join(", ");
};

console.log("Yarick PolyanaKing:",findPhoneByName("Yarick PolyanaKing"));
console.log("Vitalii Volochai:",findPhoneByName("Vitalii Volochai"));

module.exports = { phonebook, findPhoneByName, findPhoneByPhone };
