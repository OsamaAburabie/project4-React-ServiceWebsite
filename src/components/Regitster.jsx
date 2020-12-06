import React, { Component } from 'react';
import SignIn from './SignIn';
import '../styles/Register.css';
const initailStatie = {
	name: '',
	email: '',
	password: '',
	phoneNumber: '',
	nameError: '',
	emailError: '',
	passwordError: '',
	phoneNumberError: '',
	success: false,
};
class Register extends Component {
	state = initailStatie;

	handleChange = (event) => {
		const input = event.target;
		const value = input.value;

		this.setState({ [input.name]: value });
	};
	validate = () => {
		let nameError = '';
		let emailError = '';
		let passwordError = '';
		let phoneNumberError = '';
		if (this.state.phoneNumber.length < 10) {
			phoneNumberError = 'Invalid Number';
		}
		if (this.state.password.length < 6) {
			passwordError = 'Password must be at least 6 characters long';
		}
		if (!this.state.name) {
			nameError = 'Name cannot be empty';
		}
		if (this.state.name.length < 2) {
			nameError = 'Invalid Name';
		}
		if (!this.state.email.includes('@')) {
			emailError = 'Invalid Email';
		}
		if (emailError || nameError || passwordError || phoneNumberError) {
			this.setState({ emailError, nameError, passwordError, phoneNumberError });
			return false;
		}
		return true;
	};
	handleFormSubmit = (e) => {
		e.preventDefault();
		const isValid = this.validate();
		if (isValid) {
			const { name, password, email, phoneNumber } = this.state;
			sessionStorage.setItem(
				'user',
				JSON.stringify({ name, password, email, phoneNumber })
			);
			this.setState(initailStatie);
			this.setState({ success: true });
		}
	};

	render() {
		return (
			<div className="register__container ">
				<div className="signUp__container">
					<div className="signup__form">
						<p>Sign up</p>
						<form onSubmit={this.handleFormSubmit}>
							<div style={{ display: this.state.success ? '' : 'none' }}>
								<p style={{ color: 'green', fontSize: 18 }}>
									Signed up successful
								</p>
							</div>
							<div style={{ color: 'red' }}>{this.state.nameError}</div>
							<input
								type="text"
								name="name"
								placeholder="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>

							<div style={{ color: 'red' }}>{this.state.emailError}</div>

							<input
								type="text"
								name="email"
								placeholder="email"
								value={this.state.email}
								onChange={this.handleChange}
							/>

							<div style={{ color: 'red' }}>{this.state.passwordError}</div>
							<input
								type="password"
								name="password"
								placeholder="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>

							<div style={{ color: 'red' }}>{this.state.phoneNumberError}</div>
							<input
								type="tel"
								name="phoneNumber"
								placeholder="Phone Number"
								value={this.state.phoneNumber}
								onChange={this.handleChange}
							/>

							<button type="submit">Sign Up</button>
						</form>
					</div>
				</div>
				<div className="signIn__container">
					<SignIn />
				</div>
			</div>
		);
	}
}

export default Register;
