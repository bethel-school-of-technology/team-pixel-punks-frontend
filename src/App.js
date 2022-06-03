//import API services
import API from './Services/API';
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/signup.component';
import Locations from './Components/Locations';



//added by Elise - commenting out - in my test app i had this in my index.js not app.js
//import ReactDOM from 'react-dom';
//import frosty from './frosty.svg';
//import sunny from './sunny.svg';
//import './index.css';
//const updateAlert = ( maxTemp, minTemp) => {
//   if (maxTemp > '75' ) {
//   return ( <img src = {sunny} className="App-logo" alt = "sunny"></img>);
//   } else if (minTemp <33) {
//     return (<img src = {frosty} className="App-logo" alt = "sunny"></img>);
//   } else {
//     return ('no alert');
//   }
//   };

// ReactDOM.render( updateAlert (
//     '80',
//     '60',
//   ),
//   document.getElementById('root')
// );


function App() {  

  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand mb-0" to={'/sign-in'}>
              <img className="d-inline-block" id="navLogo"
              src={require("/Users/patrickruggeri/Documents/GitHub/team-pixel-punks-frontend/src/snow-sun.png" )}/>
              Hot and Frosty
            </Link>
            <button type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            className="navbar-toggler"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">

              <span className="navbar-toggler-icon"></span>
            
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
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