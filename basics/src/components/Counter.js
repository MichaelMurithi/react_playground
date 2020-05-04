import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  increament() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h4>Count - {this.state.count}</h4>;
        <button onClick={() => this.increament()}>Icreament</button>
      </div>
    );
  }
}

export default Counter;
