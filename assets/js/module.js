"use strict";

export const weekDaysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Nov",
  "Oct",
  "Sep",
  "Dec",
];

/**
 *
 * @param {number} dateUnix Unix Date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Data string. format: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timeZone) {
  const date = new Date((dateUnix + timeZone) * 1000);
  const weekDaysName = weekDaysNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDaysName} ${date.getUTCDate()}, ${monthName} `;
};

/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */

export const getTime = function (timeUnix, timeZone) {
  const date = new Date((timeUnix + timeZone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timeZone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */

export const getHours = function (timeUnix, timeZone) {
  const date = new Date((timeUnix + timeZone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12} ${period}`;
};

/**
 *
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hour
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air Quality is considered satisfactory, and air pollution poses little or no risk",
  },
  2: {
    level: "fair",
    message:
      "Air Quality is acceptable, However for some pollutants there may be a moderate health concern for a very small number of people who are usually sensitive to air pollutions",
  },
  3: {
    level: "Moderate",
    message: "Member of sensitive groups may experience health effects.",
  },
  4: {
    level: "Poor",
    message: "Everyone may be experience health effects.",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warnings of emergency conditions. the entire population is more likely to be affected.",
  },
};
