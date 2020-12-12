import '../components/ProfilePage/ProfileStyle.css';
import Register from './Regitster';
import WeatherRun from './ProfilePage/WeatherRun';
import CheletWrun from './ProfilePage/ChaletWrun';
import user from '../Images/user.png';
import damsa from '../Images/logo7.png'
import logo from '../Images/logo.png'


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
	let isVissible = bookingData.vissible;
	let storedChalet = bookingData.name;
	let storedChaletInfo = bookingData.info;
	let storedImage = bookingData.img;
	let storedPeople = bookingData.numOfPeople;
	let storedDate = bookingData.startDate;
	let trimedDate = storedDate.substr(0, 10);
	let location = bookingData.location;
	let ownerNum = bookingData.phone;
	let storedPrice = bookingData.price;

	if (isUser) {
		return (
			<div className="container_profile">
				<div className="space_profile"></div>
				<div className="container emp-profile">
					<form method="post">
						<div className="row">
							<div className="col-md-4">
								<div className="profile-img">
									<img src={user} alt="Logo" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="profile-head">
									<h6>Customer</h6>
									<ul className="nav nav-tabs" id="myTab" role="tablist">
										<li className="nav-item">
											<a
												className="nav-link active"
												id="home-tab"
												data-toggle="tab"
												href="#home"
												role="tab"
												aria-controls="home"
												aria-selected="true"
											>
												About
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="profile-tab"
												data-toggle="tab"
												href="#profile"
												role="tab"
												aria-controls="profile"
												aria-selected="false"
											>
												Booked Chalet
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-2">
								<div className="weather">
									<WeatherRun />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4"></div>
							<div className="col-md-8">
								<div className="tab-content profile-tab" id="myTabContent">
									<div
										className="tab-pane fade show active"
										id="home"
										role="tabpanel"
										aria-labelledby="home-tab"
									>
										<div className="row">
											<div className="col-md-2">
												<label>Name:</label>
											</div>
											<div className="col-md-2">
												<p>{storedName}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-2">
												<label>Email:</label>
											</div>
											<div className="col-md-2">
												<p>{storedEmail}</p>
											</div>
										</div>
										<div className="row">
											<div className="col-md-2">
												<label>Phone:</label>
											</div>
											<div className="col-md-2">
												<p>{storedNumber}</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="profile"
										role="tabpanel"
										aria-labelledby="profile-tab"
									>
										<div className="row">
											{/* Test */}
											<div>
												<div
													style={{ display: isVissible ? '' : 'none' }}
													className="card booking-card"
												>
													<div className="view overlay">
														<img
															className="card-img-top" src={storedImage} alt="Card cap" />
														<a href="#!">
															<div className="mask rgba-white-slight"></div>
														</a>
													</div>
													<div className="card-body">
														<div className="row">
															<div className="col-md-9">
																<h4 className="card-title font-weight-bold ">
																	<a>
																		<span style={{ fontStyle: 'bold' }}>
																			{storedChalet}
																		</span>
																	</a>
																</h4>
																<ul className="list-unstyled list-inline rating mb-0">
																	<li className="list-inline-item mr-0">
																		<i className="fas fa-star amber-text"> </i>
																	</li>
																	<li className="list-inline-item mr-0">
																		<i className="fas fa-star amber-text"></i>
																	</li>
																	<li className="list-inline-item mr-0">
																		<i className="fas fa-star amber-text"></i>
																	</li>
																	<li className="list-inline-item mr-0">
																		<i className="fas fa-star amber-text"></i>
																	</li>
																	<li className="list-inline-item">
																		<i className="fas fa-star-half-alt amber-text"></i>
																	</li>
																	<li className="list-inline-item">
																		<p className="text-muted">4.5 (413)</p>
																	</li>
																</ul>
															</div>
															<div className="col-md-3"><CheletWrun /></div>
														</div>

														<p className="mb-2">Price: {storedPrice}</p>
														<p className="mb-2">
															Number of people: {storedPeople}
														</p>
														<p className="mb-2">Date: {trimedDate}</p>
														<p className="mb-2">Location: {location}</p>
														<p className="mb-2">Phone Number: {ownerNum}</p>
													</div>
													<div className='damsa'>
														<div className="row">
															<div className="col-md-2"></div>
															<div className="col-md-5"><img src={logo} class="rounded " alt="..." /></div>
															<div className="col-md-4">	<img src={damsa} class="rounded " alt="..." />
															</div>
															<div className="col-md-1"></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className="space_profile"></div>
			</div>
		);
	} else return <Register />;
}
export default Profile;
