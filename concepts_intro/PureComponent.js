import React, { PureComponent } from "react";

export class PureComponent extends PureComponent {
  render() {
    return (
      <div>
        <h3>A react pure component</h3>
        <p>
          It will only rerender after a shallow comparison of props and state
          returns true
        </p>
      </div>
    );
  }
}

export default PureComponent;
