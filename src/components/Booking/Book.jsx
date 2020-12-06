import '../../styles/Book.css';
import 'react-datepicker/dist/react-datepicker.css';
import Paymant from '../Booking/Paymant';
import chalet from '../../components/Services/Chalet';
import { Link } from 'react-router-dom';

const Book = ({ match }) => {
	console.log(match.params.id);
	const bookData = chalet.find((p) => p.id === match.params.id);

	let dataTobe = {
		name: bookData.name,
		info: bookData.information,
		img: bookData.image1,
	};
	function setbooking() {
		sessionStorage.setItem('Data', JSON.stringify(dataTobe));
		alert(
			'your booking is done please go to your profile to check your book info'
		);
	}

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
						<p className="price">Price : {bookData.price}</p>
						<form action="">
							<div class="form-group row">
								<label for="inputEmail3" class="col-sm-5 col-form-label">
									Number of People:{' '}
								</label>
								<div class="col-sm-4">
									<input
										type="number"
										class="form-control"
										id="inputEmail3"
										placeholder=""
										min="1"
										max="30"
										maxLength="2"
									/>{' '}
									<br />
									<input
										class="form-control"
										type="date"
										name="date"
										placeholder="Choose the date"
										value={''}
										onChange={''}
										required
									/>
								</div>
							</div>
						</form>
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
							Cash " When Arrived "
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
						<div className="collapse" id="collapseExample1">
							<div className="card card-body">
								<button className="btn btn-info btn-submit">
									{' '}
									<i className="fas fa-check"></i> Submit
								</button>
							</div>
						</div>
						<div className="collapse" id="collapseExample2">
							<div className="card card-body">
								<Paymant />
							</div>
						</div>
						<div id="accordion">
							<div className="card">
								<div className="card-header" id="headingOne">
									<h5 className="mb-0">Cash " When Arrived "</h5>
								</div>
								<div
									id="collapseOne"
									className="collapse"
									aria-labelledby="headingOne"
									data-parent="#accordion"
								>
									<div className="card-body">
										<button
											onClick={setbooking}
											className="btn btn-info btn-submit"
										>
											{' '}
											<i className="fas fa-check"></i> Submit
										</button>
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
				</div>
			</div>
		</div>
	);
};

export default Book;
