import React from 'react';
import { Link } from 'react-router-dom';
import ImagesCard from '../../Images/Logos-01.png'
function Paymant() {
	function formSubmit(e) {
		e.preventDefault();
		alert(
			'payment Done successfully check the rest of the information on your profile page'
		);
	}
	return (
		<div>
			<img src={ImagesCard} alt="Payment Card" className="card-img-Icon" />
			<form onSubmit={formSubmit}>
				<div class="form-row">
					<div class="form-group col-md-7">
						<label for="inputEmail4">Card Number</label>
						<input
							class="form-control"
							type="tel"
							id="example-tel-input"
							placeholder="Card type will be detected..."
							maxLength="17"
							required
						/>
					</div>
					<div class="form-group col-md-4">
						<label for="inputPassword4">Security Code</label>
						<input
							type="password"
							class="form-control"
							id="inputPassword4"
							placeholder=""
							maxLength="4"
							required
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-4">
						<label for="inputState">Expiration Data</label>
						<select id="inputState" class="form-control" required>
							<option selected>M</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
							<option>11</option>
							<option>12</option>
						</select>
					</div>
					<div class="form-group col-md-2">
						<label for="inputState">.</label>
						<select id="inputState" class="form-control" required>
							<option selected>Y</option>
							<option>2020</option>
							<option>2021</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
							<option>2026</option>
							<option>2027</option>
							<option>2028</option>
							<option>2029</option>
							<option>2030</option>
						</select>
					</div>
					<div class="form-group col-md-6">
						<label for="inputCard">Name on Card</label>
						<input type="text" class="form-control" id="inputCity" required />
					</div>
				</div>

				<button type="submit" className="btn btn-info btn-submit">
					{' '}
					<i className="fas fa-check"></i> Submit
				</button>
			</form>
		</div>
	);
}
export default Paymant;
