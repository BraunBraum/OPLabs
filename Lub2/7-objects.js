'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const obj1 = { name: 'Lukian' };
  let obj2 = { name: 'Lukian' };

  obj1.name = 'Anton';
  obj2.name = 'Anton';
  // В обох випадках ми можемо змінювати властивості об'єкта, навіть попри те що один з них оголошений як константа,
  //  бо "const" обмежує лише посилання на об'єкт, а не його властивості

  // obj1 = { name: 'Pavlo' }; TypeError: Assignment to constant variable. Ми можемо змінити властивості,
  //  але не можемо переназначити посилання на об'єкт, бо він оголошений як константа
  obj2 = { name: 'Pavlo' };
};

module.exports = { fn };
