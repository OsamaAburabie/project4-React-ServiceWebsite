import React from 'react';
import '../styles/Home.css';
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.jpg"
import icon3 from "../Images/icon3.png"
import rami from "../Images/rami.jpg"
import mohammad from "../Images/mohammad.jpg"
import khadejah from "../Images/khadejah.jpg"

import Chalet from '../components/video/Chalet.mp4';
import Youtube from './Home_Page/Youtube';
function Home() {
	return (
		<div className="home__container">
			{/* Start header*/}
			<div className="header__video">
				<video autoPlay loop muted>
					<source src={Chalet} type="video/mp4" />
				</video>
				<div class="contentText">
					<h1>Welcome to JMOM</h1>
					<p>
						The best website to find the perfect place to spend your vacations
						on
						<br />
						JMOM forget your "HMOM" ; )
					</p>
				</div>{' '}
			</div>
			{/* End header*/}
			{/* ================= Our_services =========================================== */}

			<div className="Our_services">
				<h1>Our services</h1>

				<div className="profiles">
					<div className="profile">
						<img src={icon1} className="services-img" alt="services icon" />
						<p className="user-name-services">Shop with confidence</p>
					</div>

					<div className="profile">
						<img src={icon2} className="services-img" alt="services icon" />
						<p className="user-name-services">Pay the way you want</p>
					</div>

					<div className="profile">
						<img src={icon3} className="services-img" alt="services icon" />
						<p className="user-name-services">Instant booking</p>
					</div>
				</div>
			</div>
			{/* ================= Our_services =========================================== */}
			<div className="testimoials">
				<h2 id="ref">Testimonials</h2>
			</div>
			<div id="card" className="container123">
				<section>
					<div className="content">
						<p>
							JMOM Website was superb, the staff were brilliant - polite,
							helpful and discrete, It was a fantastic holiday and I am sure we
							will be back.
						</p>
						<div className="author">
							<img src={rami} alt="testimoials-User" />
							<span>Rami Abu Al-Samen</span>
						</div>
					</div>
				</section>
				<section>
					<div className="content">
						<p>
							Before booking I was sceptical about the transport, but it worked
							faultlessly and we never had to wait.
						</p>
						<div className="author">
							<img src={mohammad} alt="testimoials-User" />
							<span>Mohammad Alshwaiki</span>
						</div>
					</div>
				</section>
				<section>
					<div className="content">
						<p>
							It would be remiss of me not to comment on the attention to detail
							/ excellent service provided by all of your staff, Thank you JMOM.
						</p>
						<div className="author">
							<img src={khadejah} alt="testimoials-User" />
							<span>Khadeejah Hammdan</span>
						</div>
					</div>
				</section>
			</div>
			{/* ============================================================ */}
			{/* Start Our Team */}

			<div className="Our_team">
				<div className="our_amazing_team">
					<h2>Our amazing team</h2>
				</div>

				<div className="profiles">
					<div className="profile buttom__profile">
						<img
							src="https://avatars1.githubusercontent.com/u/71769944?s=400&u=fd9f6f19861dbb2a0d1b72646faeb0b6386c7d70&v=4"
							className="profile-img"
						/>
						<p className="user-name">Mohammad</p>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars1.githubusercontent.com/u/67992414?s=400&u=c503c163561fb011dcfeac3d7b475735582b35c8&v=4"
							className="profile-img"
						/>
						<p className="user-name">Osama</p>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars0.githubusercontent.com/u/71584632?s=400&u=6c5c79bcc14ba57e4882f11ec9566661fff2fc08&v=4"
							className="profile-img"
						/>

						<p className="user-name">Mohammad Al-Agi</p>
					</div>

					<div className="profile buttom__profile">
						<img
							src="https://avatars2.githubusercontent.com/u/71584331?s=400&u=59e7fe47593366524b5851eeb4a6e4cd4fba1799&v=4"
							className="profile-img"
						/>
						<h3 className="user-name">Jenan</h3>
					</div>
				</div>
			</div>
			{/* End Our Team */}
			{/* ============================================================ */}
			<Youtube />
		</div>
	);
}
export default Home;
