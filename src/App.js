import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Medellín, col',
  'New York, us',
  'Cúcuta, col',
  'Pereira, col',
  'Madrid, es',
  'Pasto, col'
];

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }
  
  handleSelectedLocation = city => {
    this.setState({city});
    console.log(`handleSelectedLocation ${city}`);
    this.props.setCity(city);
  };

  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title="WeatherApp">
              </AppBar>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  {city &&
                  <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

const AppConnected =  connect(null, mapDispatchToPropsActions)(App);


export default AppConnected;