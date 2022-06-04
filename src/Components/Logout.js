import React from 'react'
//import { useNavigate } from 'react-router-dom';
//import API from '../Services/API';
//import {confirmAlert} from 'react-confirm-alert';


const Logout = () => {
    // confirmAlert({
    //     title: "Confirm to submit",
    //     message: "Are you sure?",
    //     buttons: [
    //         {
    //             label: "Yes",
    //             OnClick: () => alert('Click Yes')
    //         },
    //         {
    //             label: "No",
    //             onClick: () => alert('Click No')
    //         }
    //     ]
    // })
    localStorage.clear("user");
    window.location.href = "/login";

   

//const navigate = useNavigate();


    return(
        <section id="logoutUser" className="logoutUser">
            <nav>
                <h2>Welcome</h2> 
                <button onClick=  {this.Logout}>Log Out</button>
            </nav>
            </section>

    )}

   
            
            

export default Logout;