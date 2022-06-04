
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
        //create function to refresh
        //submit location call same function to refresh
    }, []);

    let [newLocation, setNewLocation] = useState({
        zipcode: ""
        //userId added with object send to API route rather than in this state.
        //couldn't figure out how to set the current user's id in this state.
    })

    const handleSubmit = (event) => {

        event.preventDefault();

        API.addLocation({ userId: user.UserId, zipcode: newLocation.zipcode });
        //call function to refresh
    }

    const handleChange = (event) => {
        setNewLocation((preValue) => {
            return { ...preValue, [event.target.name]: event.target.value }
        });
    }

    return (
        <section id="myCitiesList" className="list-group">
            <div className="mb-3">
                <form className="input" onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="90210"
                        name="zipcode"
                        value={newLocation.zipcode}
                    />
                    <button >Add Location by Zipcode</button>
                </form>

                <div className="container-lg">
                    <div className="text center">
                        <h2>{user.FirstName} {user.LastName}'s Locations</h2>
                        <p className="tagLine">Here is a list of your chosen cities.</p>
                        {locations.map((location, idx) => {
                            return (
                                <div key={idx}>
                                    <ul className="list-group">
                                        <li className="list-group-item">{location.Zipcode}</li>
                                        <li>{API.updateAlert(location.Zipcode)}</li>
                                        <button className="btn btn-primary"
                                            onClick={() => API.deleteLocation(location.LocationId)}>
                                            Delete Location
                                        </button>
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