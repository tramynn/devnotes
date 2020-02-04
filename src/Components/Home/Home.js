import React, { Component } from 'react';
import EditPost from "../EditPost/EditPost";
import { connect } from 'react-redux';
import { getAllPosts } from "../../reducks/reducers/postsReducer";
import { getSession } from '../../reducks/reducers/authReducer';
import PostCard from '../PostCard/PostCard';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(posts)
    const postsMapped = posts.map((post, i) => {
      console.log(this.props.user_id)
      console.log(post.user_id)
      return (
        <div key={i}>
          <PostCard post_id={post.post_id} user={post.user_id} username={post.username} date_published={post.date_published} title={post.title} content={post.content} />
          {this.props.user_id === post.user_id ? <EditPost /> : <h1>test</h1>}
        </div>
      )
    })
    return (
      <div>
        <h1>Home</h1>
        {postsMapped}
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    posts: reduxState.postsReducer.posts,
    user_id: reduxState.authReducer.user_id
  }
}

export default connect(mapStateToProps, { getAllPosts, getSession })(Home);