import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("LifecycleA; constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A; getDerivedSStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle A; componentDidMount");
  }
  render() {
    console.log("Lifecycle A; render");
    return (
      <div>
        <h4>Lifecycle A</h4>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
