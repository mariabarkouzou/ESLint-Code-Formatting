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

for (let i = 0; i < departments.length; i += 1) {
  cart[departments[i]] = '';
}

console.log(cart);

const itemLookup = (barcode) => {
  fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then((data) => renderProductInfo(data))
    .catch((error) => console.log('Error: ', error));
};
