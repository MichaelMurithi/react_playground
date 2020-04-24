import React, { Component } from "react";
import UpdateComponent from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <button onClick={increamentCount}>clicked {count} times</button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter);
