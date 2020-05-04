import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:'react'
      }

    }
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) =>{
        const {username,comment,topic} = this.state
        event.preventDefault()
        alert(`${username}, ${comment}, ${topic}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>x
        <input 
        type='text'
        value = {this.state.username}
        onChange = {this.handleUsernameChange}
        /><br/>
        <label>Comment:</label>
        <input 
        type='text'
        value = {this.state.comment}
        onChange = {this.handleCommentChange}
        /><br/>
        <label>Topic: </label>
        <select value= {this.state.topic}  onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
        </select><br/>
        <input type='submit'/>
      </form>
    );
  }
}

export default Form;
