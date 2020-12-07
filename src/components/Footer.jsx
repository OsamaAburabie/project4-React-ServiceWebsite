import React from 'react';
import '../style.css';
import Jmom from '../Images/logo.png';
import Youtube from '../Images/youtube.png';
import Linkden from '../Images/linkedin.png';
import Gram from '../Images/instgram.png';
import Whatsapp from '../Images/whatsapp.png';
import { Link } from 'react-router-dom';
function Footer() {
	return (
		<footer>
			<div className="footer__left">
				<div className="footer__logo">
					<img src={Jmom} style={logoStyle} alt="" />
				</div>
				<div className="footer__description">
					Have you ever thought to take break from your work you try hard to
					find the right place for you and your family this why craeted JMOM.{' '}
					<br />
					JMOM is a website that enables you to book chalets as easy as possible
				</div>
			</div>
			<div className="footer__mid">
				<div className="social__media">
					<a href="https://www.youtube.com/">
						{' '}
						<img src={Youtube} alt="Youtube icon" />{' '}
					</a>
					<a href="https://www.linkedin.com/in/jenan-musallam/">
						<img src={Linkden} alt="Linkedin icon" />{' '}
					</a>
					<a href="https://www.instagram.com/jenanmusallam96/">
						<img src={Gram} alt="Instagram icon" />
					</a>
					<a href="https://web.whatsapp.com/">
						<img src={Whatsapp} alt="Whats app icon" />
					</a>
				</div>
			</div>
			<div className="footer__right">
				<ul>
					<Link to="/">
						<li className="home___footer">Home</li>
					</Link>
					<Link to="/Services">
						<li className="home___footer">Services</li>
					</Link>
				</ul>
			</div>
		</footer>
	);
}

const logoStyle = {
	height: '5rem',
	width: '5rem',
};

export default Footer;
