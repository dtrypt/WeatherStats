import axios from 'axios';

const API_KEY = '2052a111da47bf0a4f9b419abe271a21';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // does ajax request(form of git) to URL & returns a promise
  
  // if the payload is a promise, the middleware (redux-promise) stops the action entirely
  // and dispatches the resolved data (after ajax request finishes) to the reducer as the payload.
  // reducers can't handle promises
  // promises allow code to be sychronous rather than asynchronous. without promise, the ajax
  // request would not resolve quickly enough.
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
