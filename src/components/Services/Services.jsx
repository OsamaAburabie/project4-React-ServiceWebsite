import React from 'react';
import '../../styles/Services.css';
import Slide from './Slides';
import Card from './Card';
import Chalet from './Chalet';
import Register from '../Regitster';

const DataChalet = Chalet.map((x) => (
	<Card
		id={x.id}
		name={x.name}
		information={x.information}
		location={x.location}
		img={x.image1}
		price={x.price}
	/>
));

function Services() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	if (isUser) {
		return (
			<div className="services__container">
				<h1>
					Services <i class="far fa-handshake"></i>
				</h1>
				<Slide />
				<div className="space"></div>
				<h3>
					Chalets <i class="fas fa-umbrella-beach"></i>
				</h3>
				<div className="containerCard ">{DataChalet}</div>
			</div>
		);
	} else return <Register />;
}

export default Services;
