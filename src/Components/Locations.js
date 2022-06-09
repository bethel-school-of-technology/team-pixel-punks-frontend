import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../Services/API";

const Locations = () => {
  const [user, setUser] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    let userLocations;
    let fullLocationsList = [];

    API.getUserLocations().then((res) => {
      setUser(res.data.user);
      userLocations = res.data.locations;
      for (let i = 0; i < userLocations.length; i++) {
        let completeLocation = {
          City: "",
          Zipcode: null,
          Alert: "",
          LocationId: null,
        };

        completeLocation.City = userLocations[i].City;
        completeLocation.Zipcode = userLocations[i].Zipcode;
        completeLocation.LocationId = userLocations[i].LocationId;

        API.getWeatherData(
          userLocations[i].Latitude,
          userLocations[i].Longitude
        ).then((res) => {
          if (res.data.daily[0].temp.max > 75) {
            completeLocation.Alert = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="orange"
                className="bi bi-sun"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            );
          } else if (res.data.daily[0].temp.min < 35) {
            completeLocation.Alert = (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="blue"
                className="bi bi-snow2"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z" />
              </svg>
            );
          } else {
            completeLocation.Alert = "No Alert";
          }
          fullLocationsList[i] = completeLocation;
        });
      }
    });
    setLocations(fullLocationsList);
  }, []);

  function refreshLocations() {
    API.getUserLocations().then((res) => {
      setUser(res.data.user);
      //setLocations(res.data.locations);
    });
  }

  useEffect(() => {
    refreshLocations();
  }, []);

  let [newLocation, setNewLocation] = useState({
    zipcode: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    API.addLocation({ userId: user.UserId, zipcode: newLocation.zipcode }); //.then(response => {
    //   refreshLocations();
    // });
  };

  const handleChange = (event) => {
    setNewLocation((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  };

  return (
    <section id="myCitiesList" className="list-group">
      <div className="text-center">
        <div
          id="locationsUserTitle"
          className="p-2 bg-primary bg-opacity-10 border border-black border-opacity-0 border-5 rounded-3"
        >
          <h2>
            {user.FirstName} {user.LastName}'s Locations
          </h2>
        </div>
      </div>
      <div className="mb-3">
        <div className="container-lg">
          <div className="text-center">
            <div className="fw-bold">
              <p className="tagLine">Your chosen cities</p>
            </div>

            <div className="p-2 bg-primary bg-opacity-10 border  border-opacity-5 border-5 rounded-3">
              <div className="text-center">
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
                <br></br>
                <button
                  type="button"
                  className="btn btn-success btn-block custom"
                >
                  Add Location by Zipcode
                </button>
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
                      <li className="list-group-item">
                        {location.Zipcode} - {location.City}
                      </li>
                      {location.Alert}
                      <Link to={`/update-city/${location.LocationId}`}>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-primary btn-block custom"
                        >
                          Update City Name
                        </button>
                      </Link>
                      <br></br>
                      <div class="input-group-append">
                      <button
                        type= "button" className="btn btn-danger btn-block custom custom-control-inline"
                        onClick={() =>
                          API.deleteLocation(location.LocationId).then(
                            (response) => {
                              console.log(response);
                              refreshLocations();
                            }
                          )
                        }
                      >
                        Delete
                      </button>
                      </div>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
