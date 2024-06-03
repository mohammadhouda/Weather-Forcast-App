"use strict";

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474";

const currentLocation = function () {
  window.navigator.geolocation.getCurrentPosition(
    (res) => {
      const { latitude, longitude } = res.coords;
      updateWeather(`lat=${latitude}`, `lon=${longitude}`);
    },
    (err) => {
      window.location.hash = defaultLocation;
    }
  );
};

const searchedLocation = (query) => {
  const params = query.split("&");
  if (
    params.length === 2 &&
    params[0].startsWith("lat=") &&
    params[1].startsWith("lon=")
  ) {
    const lat = params[0].split("=")[1];
    const lon = params[1].split("=")[1];
    if (!isNaN(lat) && !isNaN(lon)) {
      updateWeather(...params);
      return;
    }
  }
  error404();
};

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestedUrl = window.location.hash.slice(1);

  const [route, query] = requestedUrl.includes("?")
    ? requestedUrl.split("?")
    : [requestedUrl];

  if (routes.has(route)) {
    routes.get(route)(query);
  } else {
    error404();
  }
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
