'use strict';

fetch({
  method: 'GET',
  url: 'https://developer.nps.gov/api/v1/parks?stateCode=il',
  'X-Api-Key': 'INSERT-API-KEY-HERE',
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response.status;
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log('Error: ', error));
