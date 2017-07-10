import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	renderWeather(cityData) {
		const { lon, lat }   = cityData.location;
		const name           = cityData.location.name;
		const temps          = cityData.forecast.forecastday.map(weather => weather.day.avgtemp_c);
		const precipitations = cityData.forecast.forecastday.map(weather => weather.day.totalprecip_mm);
		const humidities     = cityData.forecast.forecastday.map(weather => weather.day.avghumidity);
		const conditions     = cityData.forecast.forecastday.map(weather => [weather.date, weather.day.condition]);
		
		return (
			<tr key={`${name}`}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps}           color="orange" suffix='°C' /></td>
				<td><Chart data={precipitations}  color="green"  suffix='mm' /></td>
				<td><Chart data={humidities}      color="blue"   suffix='%'  /></td>
				<td>{conditions.map(condition => <img src={condition[1].icon} title={`${condition[0]}: ${condition[1].text}`} />)}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (°C)</th>
						<th>Precipitation (mm)</th>
						<th>Humidity (%)</th>
						<th>Condition</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);