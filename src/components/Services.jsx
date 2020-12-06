import React from 'react';
import '../styles/Services.css';
import Register from './Regitster';

function Services() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	if (isUser) {
		return (
			<div className="services__container">
				<h1>Services</h1>
			</div>
		);
	} else return <Register />;
}

export default Services;
