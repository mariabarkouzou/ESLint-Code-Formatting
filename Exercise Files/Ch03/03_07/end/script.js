'use strict';

// App setup
const departments = [
  'produce',
  'dairy',
  'meat',
  'bakery',
  'beverages',
  'packaged',
];
let cart = {};

departments.forEach((dept) => {
  return cart[dept] = '';
});

console.log(cart);
