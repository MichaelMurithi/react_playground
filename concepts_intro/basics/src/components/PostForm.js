import React, { Component } from "react";
import axios from "axios";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="userId"
            onChange={this.changeHandler}
            placeholder="userId"
            value={userId}
          />
          <br />
          <input
            type="text"
            name="title"
            onChange={this.changeHandler}
            placeholder="title"
            value={title}
          />
          <br />
          <input
            type="text"
            name="body"
            onChange={this.changeHandler}
            placeholder="body"
            value={body}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default PostForm;
