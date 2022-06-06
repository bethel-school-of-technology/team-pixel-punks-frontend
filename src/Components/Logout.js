import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import API from '../Services/API';


const Logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";

   

//const navigate = useNavigate();


    return(
        <section id="logoutUser" className="logoutUser">
            <nav>
                <h2>Welcome</h2> 
                <button onClick= {this.Logout}>Log Out</button>
            </nav>
            </section>

    )}

   
            
            

export default Logout;