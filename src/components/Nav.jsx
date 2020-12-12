import React, { useState } from 'react';
import '../style.css';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import Jmom from '../Images/logo.png';

function Nav() {
	let isUser = JSON.parse(sessionStorage.getItem('isUser'));
	const [isLoggedin, setLog] = useState(() => isUser);
	let userData;
	if (sessionStorage.getItem('user') === null) {
		userData = JSON.parse(localStorage.getItem('user'));
	} else {
		userData = JSON.parse(sessionStorage.getItem('user'));
	}
	let storedName = userData.name;
	return (
		<nav>
			<div className="nav__left">
				<div className="Nav__image">
					<Link to="/">
						<img
							src={Jmom}
							alt="logo jmom"
							className="LogoWebsite"
						/>
					</Link>
				</div>

				<Link to="/">
					<a className="home__nav_btn">Home</a>
				</Link>
				<Link to="/Services">
					<a className="home__nav_btn">Services</a>
				</Link>
			</div>

			<Link to="/Services">
				<button
					style={{
						display: isLoggedin ? 'none' : '',
					}}
				>
					Login
				</button>
			</Link>
			<div
				style={{
					display: isLoggedin ? '' : 'none',
				}}
				className="loggedIn"
			>
				<div
					className="userName__right"
					style={{
						display: isLoggedin ? '' : 'none',
					}}
				>
					<div className="userName">
						<h4>
							<div className="dropdown">
								<span style={{ color: '#00317a' }}>
									{' '}
									<FaUserCircle /> {storedName}
								</span>
								<div class="dropdown-content">
									<Link to="/Profile">
										<p style={{ color: '#212529' }}>
											<FaUserCircle />
											Profile
										</p>
									</Link>

									<p
										onClick={() => {
											sessionStorage.setItem('isUser', false);
											window.location.reload(false);
										}}
									>
										<FaSignOutAlt />
										sign out
									</p>
								</div>
							</div>
						</h4>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
