import React from 'react';
import slidImg1 from '../../Images/25.jpg';
import slidImg2 from '../../Images/6.jpg';
import slidImg3 from '../../Images/17.jpg';
import slidImg4 from '../../Images/20.jpg';
import slidImg5 from '../../Images/27.jpg';
import slidImg6 from '../../Images/19.jpg';
import slidImg7 from '../../Images/24.jpg';

function Slides() {
	return (
		<div className="slider-container ">
			<div
				id="carouselExampleInterval"
				className="carousel slide effect7"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="10000">
						<img
							src={slidImg1}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item" data-interval="2000">
						<img
							src={slidImg2}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item" data-interval="2000">
						<img
							src={slidImg3}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={slidImg4}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={slidImg5}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={slidImg6}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
					<div className="carousel-item">
						<img
							src={slidImg7}
							className="d-block sliderImg"
							alt="Image slider"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleInterval"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleInterval"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default Slides;
