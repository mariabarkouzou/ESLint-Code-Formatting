'use strict';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

const region = ((city) => {
  if (city === 'Buenos Aires') {
    return 'South America'; 
  } else if (city === 'Los Angeles') {
    return 'North America';
  } else {
    return 'lookup';
  }
});

console.log(region(userPrefs.city));