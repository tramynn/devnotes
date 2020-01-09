import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>DevNotes</div>
        <ul>
          <li>Home</li>
          <li>Add a DevNote</li>
          <li>My Profile</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;