import axios from 'axios';

const API_KEY = 'a0646c4d349dcf2b157058e98de63594';
const root_url = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Make it a constant to keep all types consistent (DRY code)
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${root_url}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
