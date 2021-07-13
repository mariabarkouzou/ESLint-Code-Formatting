'use strict';

fetch('https://developer.nps.gov/api/v1/parks?stateCode=il')
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw res.status;
    }
  })
  .then ((data) => console.log(data))
  .catch((error) => 
    console.log('Error: ', error));
