import React, { Component } from "react";
import FRinput from "./FRinput";

class FRParent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRinput ref={this.inputRef} />
        <br />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParent;
