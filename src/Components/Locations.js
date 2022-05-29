import React, { Component, onChange, onClick } from 'react';
//import API from '../Services/API';
//import axios from 'axios';



    //getCity = "a List of Cities";
     
    const Locations = () => {

    


        return (

            // <h3>This is {this.myCitiesList} </h3>);
            <section id="myCitiesList" className="list-group">
                <div className="mb-3">
                    <div className= "input">
                        <input type= "text" onChange={onChange} />
                        <button onClick={onClick}>{getCity}</button>
                        </div>

                    <div className="container-lg">
                        <div className="text center">
                            <h2>My Cities</h2>
                            <p className="tagLine">Here is a list of your chosen cities.</p>
                            <ul class="list-group">
                                <li class="list-group-item">Denver</li>
                                <li class="list-group-item">Detroit</li>
                                <li class="list-group-item">Pittsburgh</li>
                                <li class="list-group-item">Redding</li>
                                <li class="list-group-item">Fresno</li>
                            </ul>


                        </div>

                    </div>



                </div >
            </section>
        )}

export default Locations;