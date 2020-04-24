import React from "react";
//This function takes a component and returns a new component with a counter
const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }
    increamentCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          increamentCount={this.increamentCount}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};
export default UpdateComponent;
