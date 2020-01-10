import React, { Component } from 'react';

class PostCard extends Component {
  constructor() {
    super();
    this.state = {}
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

export default PostCard;