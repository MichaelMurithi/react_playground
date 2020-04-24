import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <>
        <Input ref={this.componentRef} />
        <br />
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    );
  }
}

export default FocusInput;
