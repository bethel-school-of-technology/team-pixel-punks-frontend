
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import API from '../Services/API';


const Locations = () => {
    const [user, setUser] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        API.getUserLocations()
            .then(res => {
                setUser(res.data.user);
                setLocations(res.data.locations);
            });
    }, []);

    return (
        <section id="myCitiesList" className="list-group">
            <div className="mb-3">
                <div className="input">
                    <input type="text" />
                    <button >Add Location</button>
                </div>

                <div className="container-lg">
                    <div className="text center">
                        <h2>{user.FirstName} {user.LastName}'s Locations</h2>
                        <p className="tagLine">Here is a list of your chosen cities.</p>
                        {locations.map((location, idx) => {
                            return (
                                <div key={idx}>
                                    <ul className="list-group">
                                        <li className="list-group-item">{location.Zipcode}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Locations;