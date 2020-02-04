import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSession } from '../../reducks/reducers/authReducer';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <ul>
          <li>Username: {this.props.username}</li>
          <li>Date: {this.props.date_published}</li>
          <li>Title: {this.props.title}</li>
          <li>Content: {this.props.content}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  }
}

export default connect(mapStateToProps, { getSession })(PostCard);