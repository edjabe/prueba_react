import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './style.css';

const location = "Medellín, col";
const api_key = "1823224cb3d317ae600c62b11680423a";
const api_weather =  `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

class WeatherLocation extends Component {

    constructor() {
        console.log('constructor');
        super();
        this.state = {
            city: 'Medellín',
            data: null
        };
    };

    handleUpdateClick = () => {
        fetch(api_weather).then(data => {
          return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }
    
    render = () => {
        console.log('render');
        const { city, data } = this.state;

        return(
            <div className='weatherLocationCont'>
                <Location city={city}></Location>
                {data ? <WeatherData data={data}/> : 
                <CircularProgress size={60} thickness={7} />}
            </div>
        )
    };

} 
    

export default WeatherLocation;