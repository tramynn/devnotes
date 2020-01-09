import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSession } from '../../reducks/reducers/authReducer';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getSession();
  }

  render() {
    const { first_name } = this.props;
    return (
      <div className="NavBar-container">
        <div>DevNotes</div>
        <ul>
          <li>Hi, {first_name}</li>
          <li>Home</li>
          <li>Add a DevNote</li>
          <li>My Profile</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    first_name: reduxState.authReducer.first_name
  }
}

export default connect(mapStateToProps, { getSession })(NavBar);