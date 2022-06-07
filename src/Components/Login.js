import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../Services/API';

const Login = () => {

  //set and clear user state
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  //when there is a change on the inputs of this page
  //match the input name to the user state property that matches
  //return the new value of the user
  //in other words, take the input data and store it as the user's
  //email and password
  const handleChange = (event) => {
    setUser((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  //allow navigation
  const navigate = useNavigate();

  //when the login form is submitted, send the user's email and password
  //to the backend, recieve the token in response.
  //navigate to the user's list of locations page.
  const handleSubmit = (e) => {
    e.preventDefault();
    API.login(user).then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      //setUserData;
      navigate('/locations');
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          value={user.email}
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Go To City
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  )
}

export default Login;