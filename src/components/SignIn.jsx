import React, { Component } from 'react';
import '../styles/Register.css';
import { Link } from 'react-router-dom';
export default class SignIn extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			phoneNumber: '',
			username: '',
			userpw: '',
			isLoggedin: false,
		};
		this.onUserNameChange = this.onUserNameChange.bind(this);
		this.osUserPwChange = this.osUserPwChange.bind(this);
	}

	onUserNameChange(e) {
		this.setState({ username: e.target.value });
	}
	osUserPwChange(e) {
		this.setState({ userpw: e.target.value });
	}
	checking = () => {
		let userData = JSON.parse(sessionStorage.getItem('user'));
		let storedName = userData.name;
		let storedPass = userData.password;
		let username = this.state.username;
		let userpw = this.state.userpw;
		if (storedName === username && userpw === storedPass) {
			console.log('you logged in');
			this.setState({ isLoggedin: true });
			sessionStorage.setItem('isUser', true);
		} else {
			alert('wrong password or username');
			this.setState({ isLoggedin: false });
			sessionStorage.setItem('isUser', false);
		}
	};
	handleLoginSubmit = (e) => {
		this.checking();
	};

	render() {
		// if (sessionStorage.getItem('user')) {
		// 	x = userData.name;
		// } else {
		// 	x = '';
		// }
		console.log(this.state.isLoggedin);
		return (
			<div className="signin__form">
				<p>Sign in</p>
				<form onSubmit={this.handleLoginSubmit}>
					<label style={{ display: 'none' }}>worng</label>
					<input
						name="username"
						type="text"
						value={this.state.username}
						onChange={this.onUserNameChange}
						placeholder="name"
						required
					/>
					<input
						type="password"
						value={this.state.userpw}
						onChange={this.osUserPwChange}
						placeholder="password"
						required
					/>
					<button type="submit" disabled={this.state.isEnable}>
						login
					</button>
				</form>
			</div>
		);
	}
}
