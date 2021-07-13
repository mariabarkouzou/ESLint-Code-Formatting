'use strict';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

const testLocation = {
  city: 'Alexandria',
  lat: 31.2156400,
  lon: 29.9552700,
};

// calculate distance between two geocoordinates
const distanceTo = (lat1, lon1, lat2, lon2, unit) => {
  const rlat1 = Math.PI * lat1 / 180;
  const rlat2 = Math.PI * lat2 / 180;
  const theta = lon1 - lon2;
  const rtheta = Math.PI * theta / 180;
  let dist = Math.sin(rlat1) 
    * Math.sin(rlat2) 
    + Math.cos(rlat1) 
    * Math.cos(rlat2) 
    * Math.cos(rtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') { 
    dist = dist * 1.609344; 
  } else if (unit === 'N') { 
    dist = dist * 0.8684; 
  }
  return dist.toFixed(0);
};

console.log(distanceTo(
  userPrefs.lat, 
  userPrefs.lon, 
  testLocation.lat,
  testLocation.lon, 
  'M')
);