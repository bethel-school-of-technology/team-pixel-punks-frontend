
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import API from '../Services/API';

const Locations = (user, locations) => {
    
    // const [user, setUser] = useState({
    //     email: "",
    //     firstName: "",
    //     lastName: ""
    // });

    // API.getUserLocations().then(res => {
    //     setUser({...user, firstName: res.data.user.FirstName});
    //     console.log(user.firstName);
    //     // setUser.lastName = res.body.LastName
    // })





    //getCity = "a List of Cities";

    // const getCity = React.createClass({
    //     render: function () {
    //         let getCity = [ 'Dallas', 'Redding', 'San Jose'];
    //         console.log(getCity);
    //         // json object of cities goes into array
    //         let cityList = getCity.map(function (city,index) {
    //             return <li key= { city }> </li>;
    //         })

    //     }
    // });

    return (

        // <h3>This is {this.myCitiesList} </h3>);
        <section id="myCitiesList" className="list-group">
            <div className="mb-3">
                <div className="input">
                    <input type="text" />
                    <button >Add Location</button>
                </div>

                <div className="container-lg">
                    <div className="text center">
                        <h2>My Cities</h2>
                        <p className="tagLine">Here is a list of your chosen cities.</p>
                        <ul className="list-group">
                            <li className="list-group-item">80134</li>
                            <li className="list-group-item">80565</li>
                            <li className="list-group-item">98798</li>
                            <li className="list-group-item">88745</li>
                            <li className="list-group-item">Fresno</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Locations;