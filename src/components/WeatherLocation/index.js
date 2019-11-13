import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {SUN} from './../../constants/weathers';
import './style.css';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Buenos aires, Argentina'}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;