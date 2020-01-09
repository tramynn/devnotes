import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <input placeholder="Username" />
        <input placeholder="Password" />
        <button>Login</button>
      </div>
    )
  }
}

export default Login;