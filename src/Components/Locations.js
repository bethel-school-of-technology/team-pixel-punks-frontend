
import React, { Locations, onChange, onClick, } from 'react';
//import API from '../Services/API';
//import axios from 'axios';
//import React, { useState } from 'react';
//import API from '../Services/API';
//import { ReactDOM } from 'react';



// const Locations = () => {
//     console.log(localStorage.getItem("token"));
//     const [user, setUser] = useState({
//         email: "",
//         firstName: "",
//         lastName: ""
//     });

//     API.getUserLocations().then(res => {
//         console.log(res.body);
//         setUser.email = res.body.Email
//         setUser.firstName = res.body.FirstName
//         setUser.lastName = res.body.LastName
//     })
// };




//getCity = "a List of Cities";

const getCity = React.createClass({
    render: function () {
        let getCity = [ 'Dallas', 'Redding', 'San Jose'];
        // json object goes into array
        let getCityList = getCity.map(function (city) {
            return <li> { city } </li>;
        })
        return <ul> { getCityList} </ul>
    }
});



                // <h3>This is {this.myCitiesList} </h3>);
                <section id="myCitiesList" className="list-group">
                    <div className="mb-3">
                        <div className="input">
                            <input type="text" onChange={onChange} />
                            <button onClick={onClick}>{getCity}</button>
                        </div>

                        {/* <div className="container-lg">
                            <div className="text center">
                                <h2>My Cities</h2>
                                <p className="tagLine">Here is a list of your chosen cities.</p>
                                <ul className="list-group">
                                    <li className="list-group-item">{( getCityList )}</li>
                                    <li className="list-group-item">{(getCityList)}</li>
                                    <li className="list-group-item">{(getCityList)}</li>
                                    <li className="list-group-item">{(getCityList)}</li>
                                    <li className="list-group-item">Fresno</li>
                                </ul>


                            </div>

                        </div> */}



                    </div>
                </section>

                //ReactDOM.render(document.gerElementById('cities'));



        export default Locations;