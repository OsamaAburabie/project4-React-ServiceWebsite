import React, { Component } from 'react';
import ChaletWeather from './ChaletWeather';
let weatherData;
if (sessionStorage.getItem('Data') === null) {
	weatherData = 'Aqaba';
} else {
	let x = JSON.parse(sessionStorage.getItem('Data'));
	weatherData = x.weather;
}
const API_KEY = '88c0a82ee6e9d3945d50f8f0aac78a85';
const lat = weatherData;
const lon = 'jordan';
export class ChaletWrun extends Component {
	state = {
		temp: '',
		icon: '',
	};
	getWeather = async (e) => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${lat}&${lon}&appid=${API_KEY}`
		);
		const data = await response.json();
		this.setState({
			temp: this.convertToC(data.main.temp),
			icon: data.weather[0].icon,
		});
	};
	convertToC = (temp) => {
		return Math.floor(temp - 273.15);
	};
	componentDidMount() {
		this.getWeather();
	}
	render() {
		return (
			<div>
				<ChaletWeather getWeather={this.getWeather} data={this.state} />
			</div>
		);
	}
}
export default ChaletWrun;