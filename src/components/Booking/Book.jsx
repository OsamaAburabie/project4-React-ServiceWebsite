import '../../styles/Book.css';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Paymant from '../Booking/Paymant';
import chalet from '../../components/Services/Chalet';
import { Popup } from './Popup';

const Book = ({ match }) => {
	const [startDate, setStartDate] = useState('');
	const [numOfPeople, setNumOfPeople] = useState('');
	const [submited, setSubmit] = useState(false);
	const bookData = chalet.find((p) => p.id === match.params.id);

	let dataTobe = {
		weather: bookData.weather,
		price: bookData.price,
		name: bookData.name,
		info: bookData.information,
		img: bookData.image1,
		phone: bookData.number,
		startDate,
		numOfPeople,
		location: bookData.location,
		vissible: true,
	};

	function setbooking() {
		sessionStorage.setItem('Data', JSON.stringify(dataTobe));
	}
	function formSubmtion(e) {
		e.preventDefault();
		setbooking();
		setSubmit(true);
	}
	let Close = () => setSubmit(false);

	return (
		<div className="book__container">
			<h1>
				Booking <i class="far fa-calendar-check"></i>
			</h1>
			<div className="bookSectoin">
				<div className="imageOne">
					<img src={bookData.image1} alt="" className="chalet-img-book" />
					<img src={bookData.image2} alt="" className="chalet-img-book" />
				</div>
				<div className="chalet-info-book">
					<div className="detailes">
						<h3>{bookData.name}</h3>
						<p>{bookData.information}</p>
						<p>Location: {bookData.location}</p>
						<p>Phone:{bookData.number}</p>
						<p className="price">Price : {bookData.price}</p>
						<form onSubmit={formSubmtion}>
							<div class="form-group row">
								<div class="col-sm-5">
									<input
										class="DataPi"
										type="Number"
										value={numOfPeople}
										onChange={(e) => setNumOfPeople(e.target.value)}
										placeholder="Number of people"
										min="1"
										max="30"
										maxLength="2"
										required
									/>{' '}
									<DatePicker
										className="DataPi"
										selected={startDate}
										onChange={(date) => setStartDate(date)}
										placeholderText="Select a date"
									/>
								</div>
							</div>
							<div className="paymedMethod">
								<h3>
									Payment Method <i className="far fa-address-card"></i>
								</h3>
								{/* ----- radioPaymen----- */}
								<div className="radioPaymen">
									<input
										type="radio"
										value="Cash"
										name="paymed"
										data-toggle="collapse"
										href="#collapseOne"
										role="button"
										data-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									/>{' '}
									Cash "Upon Arrival "
									<input
										type="radio"
										value="Credit"
										name="paymed"
										data-toggle="collapse"
										href="#collapseTwo"
										role="button"
										data-target="#collapseTwo"
										aria-expanded="true"
										aria-controls="collapseTwo"
									/>{' '}
									Credit Card
								</div>
								<div className="collapse" id="collapseExample1"></div>
								<div className="collapse" id="collapseExample2">
									<div className="card card-body">
										<Paymant />
									</div>
								</div>
								<div id="accordion">
									<div className="card">
										<div className="card-header" id="headingOne">
											<h5 className="mb-0">Cash " Upon Arrival "</h5>
										</div>
										<div
											id="collapseOne"
											className="collapse"
											aria-labelledby="headingOne"
											data-parent="#accordion"
										>
											<div className="card-body">
												<button
													type="submit"
													className="btn btn-info btn-submit"
												>
													{' '}
													<i className="fas fa-check"></i> Submit
												</button>
												<Popup show={submited} onHide={Close} />
											</div>
										</div>
									</div>
									<div className="card">
										<div className="card-header" id="headingTwo">
											<h5 className="mb-0">Credit Card</h5>
										</div>
										<div
											id="collapseTwo"
											className="collapse"
											aria-labelledby="headingTwo"
											data-parent="#accordion"
										>
											<div className="card-body">
												<Paymant />
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
