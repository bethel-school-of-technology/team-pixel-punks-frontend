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
              src="https://lh3.googleusercontent.com/y3SkQQ9MY-TPZIZPjZ-HzgqgH0bqWT-fWtN1Q9Meqlx_u3mhqHCCoiMjPBK6nuu_Av9Hrt0uRbNWtffS2Drx3F7BaGy39VdNZd2ERHSVbzQp_kkdR64Lw8o8HWCXy9XFPcC51G-ygRCF5pAOhZc4OvH5OuLPz7expRZdJtzct_W0yC_AQH_7JTuqo9e23hOyLJv7kDKPpVph2Fqvlt1cJk7Misl-05OqamJPNrTyBhyH6p5vG9uEnOv-kg-9UgeNojD7IgncTJQmzrfxzHa1QQISOhmYN8BfnLnQGBvy8ekGrwAof73s1zch06WLwFdeMB4CoRjnZLM7tB-YcGYJLZH-XjC3Tlvgz1q93Y3srJwRjAJYj9BWStM5XpTmL6b5NI-Ri7BIVYsi1O1hEu_e9i91mNRdO3W92AQ7GdvnojrS_G_YngfFOrpG1SCgTB-wiPQyHAIyH7Ykbp1U-B9ApPvvk8Mn-9-gnibXN5pr2MbHW_L1A0AJjpzBtvZpHQh9hm2kDvlb4JlFN7lU7hMhnj9QFDYBKcFzLpuCVadCOW7E2XP8wlnZnWWih5xGOFx03MvVbVUJWfF57fmP7ci2pzkpZu6Pxx4QVZvamxHdHCAKVRnUKIfRhLvG80yPap4oO3QwzU0pHQNeKPCaH4D_VtEaNmW0VtoX9FOL48BltxeNMAuYlQhN2TUcASx_oLUpkWovzt2GnzANFwRjY2XWjNbQodVX3xNkggH-Ohcy-qo_BtFjd11FDJNmzXvZEwQkphqSPdJKs1MkSn9hVSvCEgEgVigq6ddou6bK8fydTFAbKhHIFpOiqGNp0I4WlGSn7JMbPg=s300-no?authuser=0" />
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