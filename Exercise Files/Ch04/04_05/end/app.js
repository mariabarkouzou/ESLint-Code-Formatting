'use strict';

const userPrefs = {
  city: 'Chicago',
  lat: 41.878113,
  lon: -87.629799,
};

const updateUserPrefs = function (date) {
  userPrefs = refreshData(date);
};

window.addEventListener('DOMContentLoaded', function () {
  updateUserPrefs(date);
});