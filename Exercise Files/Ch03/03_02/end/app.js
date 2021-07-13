'use strict';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

const makeLowerCase = (input) => {
  return String(input).toLowerCase();
};

userPrefs.setting = makeLowerCase(window.prompt('Urban or rural?'));

console.log(userPrefs['setting']);