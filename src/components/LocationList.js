import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation'

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWatherLocationClick = city => {
        console.log("handleWatherLocationClick");
        onSelectedLocation(city);
    }

    const strToComponent = cities => (
        cities.map( city => (
            <WeatherLocation 
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWatherLocationClick(city)}
            />
        ))
    );
    

    return (
        <div>
            {strToComponent(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;