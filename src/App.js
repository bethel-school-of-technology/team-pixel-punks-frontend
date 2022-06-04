//import API services
import API from './Services/API';
import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/signup.component';
import Locations from './Components/Locations';
import Logout from './Components/Logout';

function App() {  

  
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-sm navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand mb-0" to={'/sign-in'}>
              <img className="d-inline-block" id="navLogo"
              src={require("./snow-sun.png" )}/>
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
                <li className="nav-item">
                  <Link className="nav-link" to={'/logout'}>
                    Logout
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
              <Route path="/logout" element={<Logout />} />
              <Route path="/locations/" element={<Locations />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App