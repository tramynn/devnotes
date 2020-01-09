import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from "../../reducks/reducers/authReducer";
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: ""
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div>
        <input name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} />
        <input name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} />
        <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <button>Register</button>
      </div>
    )
  }
}

export default Register;