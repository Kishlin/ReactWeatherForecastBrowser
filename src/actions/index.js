import axios from 'axios';

import Constants from '../constants/constants.js';
const ROOT_URL = `https://api.apixu.com/v1/forecast.json?key=${Constants.API_KEY}&days=7`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}