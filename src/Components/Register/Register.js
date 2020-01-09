import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from "../../reducks/reducers/authReducer";
// import { Redirect } from 'react-router-dom';

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

  handleRegister = () => {
    const { registerUser } = this.props;
    const { first_name, last_name, username, password } = this.state;
    registerUser({first_name, last_name, username, password})
  }

  render() {
    return (
      <div>
        <input name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} />
        <input name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} />
        <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.handleRegister}>Register</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  }
}

export default connect(mapStateToProps, { registerUser })(Register);