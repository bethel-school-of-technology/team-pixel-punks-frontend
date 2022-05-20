import React, { Component } from 'react'
import API from '../Services/API';
import axios from 'axios';

export default class SignUp extends Component {
  //add function here
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  handleLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
   
    console.log(this.state)
    event.preventDefault();
    API.createUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* use onSubmit for the form, call API function */}
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            onChange={this.handleFirstNameChange}
            type="text"
            className="form-control"
            placeholder="First name"
            name="firstName"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            onChange={this.handleLastNameChange}
            type="text"
            className="form-control"
            placeholder="Last name"
            name="lastName"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={this.handleEmailChange}
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={this.handlePasswordChange}
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
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
}