import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherResult: null
    }
  }
  getWeather = async (lon, lat) => {
    let apiKey = process.env.REACT_APP_APIKEY;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    let data = await fetch(url)
    let result = await data.json()
    console.log("what's the result?", result)
    this.setState({ weatherResult: result })
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((post) => {
      this.getWeather(post.coords.longitude, post.coords.latitude)
    })
  }
  componentDidMount() {
    console.log("open your app already")
    this.getLocation()
  }
  render() {
    if (this.state.weatherResult == null) {
      return (<div>Loading</div>)
    }
    return (
      <div>
        <h1>Thuong's Weather App</h1>
        <h2>{this.state.weatherResult.name}</h2>
        <h3>{this.state.weatherResult.main.temp}°C</h3>
        <h3>{this.state.weatherResult.weather[0].description}</h3>
      </div>
    )
  }
}

