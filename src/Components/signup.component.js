import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../Services/API';

const SignUp = () => {

  //setup newUser state
  let [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  });

  //change on form, store the new value into the newUser state
  //connect correct value with correct attribute of newUser
  const handleChange = (event) => {
    setNewUser((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }
    })
  }

  const navigate = useNavigate();

  //upon form submit, call createUserAPI route that stores new user on backend
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit occurred');
    API.createUser(newUser).then(res => {
      window.alert('user added');
      navigate('/login');
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* use onSubmit for the form, call API function */}
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstName"
          value={newUser.firstName}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastName"
          value={newUser.lastName}
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          onChange={handleChange}
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={newUser.email}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          onChange={handleChange}
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={newUser.password}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
  )
}

export default SignUp;