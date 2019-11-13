import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN, WINDY} from './../../constants/weathers';
import './style.css';

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const data2 = {
    temperature: 30,
    weatherState: WINDY,
    humidity: 18,
    wind: '22 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        };
    }

    handleUpdateClick = () => {
        this.setState({
            data: data2
        });
        console.log('Actualizando...');
    }

    render = () => {
        const { city, data } = this.state;

        return(
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    };

} 
    

export default WeatherLocation;