import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editPost } from '../../reducks/reducers/postsReducer'

class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: ""
    }
  }

  componentDidMount() {
    this.props.editPost();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleEditPost = (post_id) => {
    const { title, content } = this.state;
    const { editPost } = this.props;
    const updated_post = {
      title,
      content
    }
    editPost(post_id, updated_post)
  }


  render() {
    // console.log(this.props.)
    return (
      <div>
        <h1>Edit DevNote</h1>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
        <input name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange} />
        <button onClick={() => this.handleEditPost(this.props.post_id)}>Save Changes</button>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts
  }
}

export default connect(mapStateToProps, { editPost })(EditPost);