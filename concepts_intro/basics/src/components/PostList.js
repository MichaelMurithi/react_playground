import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((posts) => {
        console.log("Get posts successful");
        this.setState({
          posts: posts.data
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        list of Posts
        {posts.length ? (
          posts.map((post) => <div key={post.id}>{post.title}</div>)
        ) : (
          <h3>Oops! Something went wrong, We could not get the post</h3>
        )}
      </div>
    );
  }
}

export default PostList;
