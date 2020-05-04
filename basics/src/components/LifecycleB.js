import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("Lifecycle B; constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B; getDerivedSStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Lifecycle B; componentDidMount");
  }
  render() {
    console.log("Lifecycle B; render");
    return (
      <div>
        <h4>Lifecycle B</h4>
      </div>
    );
  }
}

export default LifecycleB;
