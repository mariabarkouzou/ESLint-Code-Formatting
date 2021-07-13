'use strict';

fetch('https://developer.nps.gov/api/v1/parks?stateCode=il')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.status;
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error));
