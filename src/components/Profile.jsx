import React from 'react';
import '../styles/Profile.css';
import Register from './Regitster';
import WeatherRun from './ProfilePage/WeatherRun';
import { FaUserCircle } from 'react-icons/fa';

function Profile() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	let userData;
	if (sessionStorage.getItem('user') === null) {
		userData = JSON.parse(localStorage.getItem('user'));
	} else {
		userData = JSON.parse(sessionStorage.getItem('user'));
	}
	let storedName = userData.name;
	let storedEmail = userData.email;
	let storedNumber = userData.phoneNumber;
	//=================================================================================================== booking info
	let bookingData;
	if (sessionStorage.getItem('Data') === null) {
		bookingData = JSON.parse(localStorage.getItem('Data'));
	} else {
		bookingData = JSON.parse(sessionStorage.getItem('Data'));
	}
	let storedChalet = bookingData.name;
	let storedChaletInfo = bookingData.info;
	let storedImage = bookingData.img;

	if (isUser) {
		return (
			<div className="page__container">
				<div className="profile__container">
					<div className="avatar">
						<div className="user__image">
							<div className="user__avatar_img">
								<i>
									<FaUserCircle size={80} />
								</i>
							</div>
							<div className="user__name_cont">
								<span>{storedName}</span>
							</div>
						</div>
						{/* <div className="img__con">
							<FaUserCircle size={60} />
							
						</div> */}
						<div className="info">
							<p className="information">Information</p>
							<div className="email__con">
								Email
								<p className="email">{storedEmail}</p>
							</div>
							<div className="phone__con">
								Phone number
								<p className="phone">{storedNumber}</p>
							</div>
						</div>
					</div>
					<div className="weather">
						<WeatherRun />
					</div>
				</div>
				<h4 className="booked__title">Booked Chalite</h4>

				<div className="booked__bottom">
					<div className="l__section">
						<div className="image__bot__sec">
							<img src={storedImage} alt="booked chalet" />
						</div>
						<div className="chalet__name_">
							<span style={{ fontStyle: 'bold' }}>
								{storedChalet}
							</span>
						</div>
					</div>
					<div className="r__section">
						<div className="t__rsection">{storedChaletInfo}</div>
					</div>
				</div>
			</div>
		);
	} else return <Register />;
}

export default Profile;
