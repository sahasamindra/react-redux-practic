import React, { Component } from "react";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import { fetchPost } from "./Reducers/Actions/postActions";
import PropTypes from "prop-types";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  //   componentDidCatch(nextProps) {
  //     if (nextProps.newPost) {
  //       this.props.posts.unshift(nextProps.newPost);
  //     }
  //   }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Hello! </h1>
        <PostForm />
        <hr />
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  post: state.posts.item,
});

export default connect(mapStateToProps, { fetchPost })(Posts);
