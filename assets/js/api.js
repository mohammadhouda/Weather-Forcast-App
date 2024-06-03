/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Mohammad 2023 All rights reserved
 * @author Mohammad Houda <muhamad.houda@gmail.com>
 */

"use strict";

const api_key = "3363fd88b93bfe9a7adf1f3fb4cdd8c1";

/**
 *
 * @param {string} URL API URL
 * @param {Function} callback callback
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },

  forcast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },

  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
  },

  reverseGep(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   *
   * @param {string} query Search query e.g.: "London", "New York"
   * @returns
   */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
  },
};