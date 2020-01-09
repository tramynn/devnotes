import React, { Component } from 'react';
import Login from "../Login/Login"

class GuestLanding extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
      <h1>Guest Landing</h1>
      <Login />
      </div>
    )
  }
}

export default GuestLanding;