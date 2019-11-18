import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForecastItem'
import transformForecast from './../services/transformForecast';
import './style.css';

/* const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    'wind': '82 m/s'
}
 */

const api_key = "1823224cb3d317ae600c62b11680423a";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});
            }
        )
    }

    renderForecastItemDays(forecastData) {
        //return "Render Items";
        return forecastData.map( forecast => (
                    <ForcastItem
                        key={`${forecast.weekDay}${forecast.hour}`}
                        weekDay={forecast.weekDay}
                        hour={forecast.hour}
                        data={forecast.data}
                    >
                    </ForcastItem>
                    ));
    }

    renderProgress = () => {
        return <h3>"Cargando pronostico extendido..."</h3>
    }

    render () {

        const {city} = this.props;
        const { forecastData } = this.state;

        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                {forecastData ?
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;