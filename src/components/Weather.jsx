import React from 'react'

export default function Weather(props) {
    const { temp, icon } = props.data;
    return (
        <div>
            <div className="weather__icon">
                <img src={`http://openweathermap.org/img/w/${icon}.png`} />
            </div>
            <p>
                {temp}&deg;C
            </p>

        </div>
    )

}
