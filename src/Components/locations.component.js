import React, { Component } from 'react';
import API from '../Services/API';
import axios from 'axios';
export default class Locations extends Component {


    // getCity = "a List of Cities";
     const Input = ({onchange, onClick, title }) =>


    render() {
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


           

            // <show>
            // Selects the given list item and shows its associated pane. Any other list item that was previously selected becomes unselected and its associated pane is hidden. Returns to the caller before the tab pane has actually been shown (for example, before the shown.bs.tab event occurs).

            // var someListItemEl = document.querySelector('#someListItem')
            // var tab = new bootstrap.Tab(someListItemEl)
            // ------------------------------------------------------------------------

            // <dispose>
            // Destroys an element’s tab.

            // ------------------------------------------------------------------------


            // <getInstance>
            // Static method which allows you to get the tab instance associated with a DOM element
            // var triggerEl = document.querySelector('#trigger')
            // var tab = bootstrap.Tab.getInstance(triggerEl) // Returns a Bootstrap tab instance

            // tab.show()

            // ------------------------------------------------------------------------



            // var triggerEl = document.querySelector('#trigger')
            // var tab = bootstrap.Tab.getOrCreateInstance(triggerEl) // Returns a Bootstrap tab instance

            // -----------------------------------------------------------------------

            // <getOrCreateInstance>
            // Static method which allows you to get the tab instance associated with a DOM element, or create a new one in case it wasn’t initialised>


            // var triggerEl = document.querySelector('#trigger')
            // var tab = bootstrap.Tab.getOrCreateInstance(triggerEl) // Returns a Bootstrap tab instance


            // <div className="mb-3">
            //   <label>Password</label>
            //   <input
            //     type="password"
            //     className="form-control"
            //     placeholder="Enter password"
            //   />
            // </div>

        );
    }
}