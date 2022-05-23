//import API services
import API from './Services/API';
import React  from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './Components/login.component'
import SignUp from './Components/signup.component'
import Locations from './Components/locations.component';

function App() {

  //this function first gets the latitude and longitude via API for a passed in zipcode, then sends the location
  //to another function that gets the weather data via API for the location passed in.
  
  const getWeather = (zip) => {
    API.getLatLong(zip).then(res => {

      let latitude = res.data.data[0].latitude.toString();
      let longitude = res.data.data[0].longitude.toString();
      console.log(latitude + " " + longitude);

      const getLocationWeather = API.getWeatherData(latitude, longitude).then(res => {
        console.log(res.data.daily[0].temp.max + " degrees F high temp");
        console.log(res.data.daily[0].temp.min + " degrees F low temp");
      });
    })
  };

  //test code for weather API calls  unsure why the console logs are executing twice each time.
  getWeather(90210);



  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Hot and Frosty
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/locations/" element={<Locations />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App