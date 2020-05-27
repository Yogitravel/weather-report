import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./City.js";
let apiKey = process.env.REACT_APP_APIKEY;

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherResult: null
    }
  }
  getWeather = async (lon, lat) => {

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



  getcity = async (city) => {
    console.log("city", city);

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    let data = await fetch(url)
    console.log("dddd", url, data)
    let result = await data.json()
    console.log("what's the result?", result)
    this.setState({ weatherResult: result })
  }



  render() {
    if (this.state.weatherResult == null) {
      return (<div>Loading</div>)
    }
    return (
      <>
        <div class="overlay">
          <div className="py-5 text-center bg"> </div>
          <div className="container-fluid text-white my-auto">
            <div className="container mx-auto my-4 py-4">
              <div className="row justify-content-center text-center">
                <h1 className="col-12 display-4 my-2 py-3 thoitiet">
                  TODAY WEATHER
            </h1>




                <h1 className="col-12">{this.state.weatherResult.name}</h1>
                <h1 className="col-12 text-danger tem">{this.state.weatherResult.main.temp}°C</h1>
                <h1 className="col-12">{this.state.weatherResult.weather[0].description}</h1>



                <div className="row city-pic">

                  <button className="paris-btn col-3" onClick={() => this.getcity("Paris")}> Paris </button>
                  <button className="newyork-btn col-3" onClick={() => this.getcity("New York")}> NewYork </button>
                  <button className="sing-btn col-3" onClick={() => this.getcity("Singapore")}> Singapore </button>
                  <button className="bankok-btn col-3" onClick={() => this.getcity("Bangkok")}> Bangkok</button>


                </div>



              </div>
            </div>
          </div>


        </div>







      </>
    );
  }
}





