import axios from 'axios';

import Constants from '../constants/constants.js';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${Constants.API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},fr`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}