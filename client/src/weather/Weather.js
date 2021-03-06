import React, { Component } from 'react';
import Footer from '../footer/Footer'
import WeatherWidget from '../weatherwidget/WeatherWidget'; 

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
let config = require('../config');

//let config = require('../config');


export default class Weather extends React.Component {
  constructor () {
    super();
    this.state = {
      initialized: false,
      weatherData: {}
    };
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }
  fetchWeatherData (city) {
    // console.log(city + "this is the city");
    this.setState({
      initialized: false
    });
    // wrap your
    // logic fetching all the weather api data into a method.
    //var weatherApiKey = config.weatherKey;
    var weatherApiKey = config.weatherkey;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=Gardiner&units=imperial&appid=' + weatherApiKey;
    // console.log(url + "this is the url");
    fetch(url).then(function (response) {
      return response.json();
    }).then((weatherObj) => {
      if (weatherObj !== undefined) {
        this.setState({
          initialized: true,
          weatherData: weatherObj
        });
      } else {
        this.fetchWeatherData();
      }
    });
  }
  componentDidMount () {
    this.fetchWeatherData();
  }
  render () {
    if (this.state.initialized) {
      let tempF = Math.round(this.state.weatherData.main.temp);
      // console.log(this.state.weatherData)
      return (
        <div>
          <p>{this.state.weatherData.weather[0].description}</p>
          {/* <p>{this.state.weatherData.weather[0].icon}</p> */}
          <WeatherWidget weatherData={this.state.weatherData}/>
          <p>{tempF}°F</p>    
          
        </div>
      );
    } else {
      return (
        <h2>
          Loading...
        </h2>
      );
    }
  }
} 
