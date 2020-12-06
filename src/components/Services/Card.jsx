import React from 'react';
import { Link } from 'react-router-dom';

// class Card
function Card(props) {
    return (
        <div className="card-info">
            <div className='image-card-div'>
                <img src={props.img} alt="" className="chalet-img-card" />
            </div>
            <h4> {props.name}</h4>
            <p>{props.information}</p>
            <p>Location: {props.location}</p>
            <p className="price">Price : {props.price}</p>
            <Link to={`Book/${props.id}`}>
                <button className='btn btn-info btnBooking'> Book Now</button>
            </Link>
        </div>
    );
}

export default Card;
