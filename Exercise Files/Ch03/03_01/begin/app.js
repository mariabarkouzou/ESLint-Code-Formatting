'use strict';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  }, () => {
    console.log(userPrefs.lat, userPrefs.lon);
  });
} else {
  console.log(userPrefs.lat, userPrefs.lon);
}
