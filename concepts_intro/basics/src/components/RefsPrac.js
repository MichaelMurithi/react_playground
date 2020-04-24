import React, { Component } from "react";

class RefsPractice extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {};
  }
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  showInput = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.showInput}>Show Value</button>
      </>
    );
  }
}

export default RefsPractice;
