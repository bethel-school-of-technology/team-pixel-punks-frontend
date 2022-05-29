
import React, { Component, onChange, onClick } from 'react';
//import API from '../Services/API';
//import axios from 'axios';
import React, { useState } from 'react';
import API from '../Services/API';


// const Locations = () => {
    //console.log(localStorage.getItem("token"));
//     const [user, setUser] = useState({
//         email: "",
//         firstName: "",
//         lastName: ""
//       });

//       API.getUserLocations().then(res =>{
          //console.log(res.body);
        //   setUser.email = res.body.Email
        //   setUser.firstName = res.body.FirstName
        //   setUser.lastName = res.body.LastName
      })







//console.log(userLocations);
//     return (
//         <div className="App" >
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>City Name</th>
//                         <th>Frost Alert</th>
//                         <th>Sun Alert</th>
//                     </tr>
//                     <tr>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// }




//getCity = "a List of Cities";

const Locations = React.createClass({
    render: function () {
        var cities = [];
        // json object goes into array
        return (
            <>
                <ul>
                    {cities.map(function (city, index) {
                        return <li key={index}> {city} </li>;
                    }
                    )}
                </ul>
            )
        }
    });

                // <h3>This is {this.myCitiesList} </h3>);
                <section id="myCitiesList" className="list-group">
                    <div className="mb-3">
                        <div className="input">
                            <input type="text" onChange={onChange} />
                            <button onClick={onClick}>{getCity}</button>
                        </div>

                        <div className="container-lg">
                            <div className="text center">
                                <h2>My Cities</h2>
                                <p className="tagLine">Here is a list of your chosen cities.</p>
                                <ul className="list-group">
                                    <li className="list-group-item">Denver</li>
                                    <li className="list-group-item">Detroit</li>
                                    <li className="list-group-item">Pittsburgh</li>
                                    <li className="list-group-item">Redding</li>
                                    <li className="list-group-item">Fresno</li>
                                </ul>


                            </div>

                        </div>



                    </div>
                </section></>
        
    

export default Locations;