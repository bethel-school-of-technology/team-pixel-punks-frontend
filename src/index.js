import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = ({ pathname }) => {
  //Started switch case here for navbar
  switch (pathname) {
    //for login page - needs form coded in
    case '/login':

  //Other pages go here with more switch cases


 
  //Need to code in a home page or city page as default
  default:
    return <Home />
  }
};

let pathname = window.location.pathname;


//Cannot remember if I used "root" or "login" in index.html
ReactDOM.render(<Index pathname={pathname} />, document.getElementById('root'));

//Need to add click event for button later
window.addEventListener( 'popstate', () => {
  pathname = window.location.pathname;
});

