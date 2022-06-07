import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';
import API from '../Services/API';
import UpdateCity from './UpdateCity';


const Locations = () => {

  const [user, setUser] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    API.getUserLocations().then((res) => {
      setUser(res.data.user);
      setLocations(res.data.locations);
    });
    //create function to refresh
    //submit location call same function to refresh
  }, []);
  function refreshLocations() {
    API.getUserLocations().then((res) => {
      setUser(res.data.user);
      setLocations(res.data.locations);
    });
  }

  useEffect(() => {
    refreshLocations();
  }, []);

  let [newLocation, setNewLocation] = useState({
    zipcode: "",
    //userId added with object send to API route rather than in this state.
    //couldn't figure out how to set the current user's id in this state.
  });


  const handleSubmit = (event) => {
    event.preventDefault();

    API.addLocation({ userId: user.UserId, zipcode: newLocation.zipcode });
    //call function to refresh
  };


  const handleChange = (event) => {
    setNewLocation((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  };

  // <<<<<<< refresh
  //   return (
  //     <section id="myCitiesList" className="list-group">
  //       <div className="mb-3">
  //         <form className="input" onSubmit={handleSubmit}>
  //           <input
  //             onChange={handleChange}
  //             type="text"
  //             className="form-control"
  //             placeholder="90210"
  //             name="zipcode"
  //             value={newLocation.zipcode}
  //           />
  //           <button>Add Location by Zipcode</button>
  //         </form>

  //         <div className="container-lg">
  //           <div className="text center">
  //             <h2>
  //               {user.FirstName} {user.LastName}'s Locations
  //             </h2>
  //             <p className="tagLine">Here is a list of your chosen cities.</p>
  //             {locations.map((location, idx) => {
  //               return (
  //                 <div key={idx}>
  //                   <ul className="list-group">
  //                     <li className="list-group-item">{location.Zipcode}</li>
  //                     <button
  //                       className="btn btn-primary"
  //                       onClick={() =>
  //                         API.deleteLocation(location.LocationId).then((res) => {
  //                           refreshLocations();
  //                         })
  //                       }
  //                     >
  //                       Delete Location
  //                     </button>
  //                   </ul>
  // =======
  return (
    <section id="myCitiesList" className="list-group">
      <div className="text-center">
        <div id="locationsUserTitle" className="p-2 bg-primary bg-opacity-10 border border-black border-opacity-0 border-5 rounded-3">
          <h2>{user.FirstName} {user.LastName}'s Locations</h2>
        </div>
      </div>
      <div className="mb-3">


        <div className="container-lg">
          <div className="text-center">

            <div className="fw-bold">
              <p className="tagLine">Your chosen cities</p>
            </div>

            <div className="p-2 bg-primary bg-opacity-10 border  border-opacity-5 border-5 rounded-3">
              <div className='text-center'>
                <h5>Add a city to your list below:</h5>
              </div>
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
            </div>
            <br></br>
            <br></br>
            <div className="p-2 bg-primary bg-opacity-10 border border-black border-opacity-0 border-5 rounded-3">
              <h5>Delete a city from your list below:</h5>
              {locations.map((location, idx) => {
                return (
                  <div key={idx}>
                    <ul className="list-group">
                      <li className="list-group-item">{location.Zipcode} - {location.City}</li>
                      <Link to={`/update-city/${location.LocationId}`} >update city Name</Link>
                      <button className="btn btn-primary" onClick={() => API.deleteLocation(location.LocationId)}>Delete Location</button>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    
      
    </section >
  );
};

export default Locations;
