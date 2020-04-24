import React, { Component } from "react";
import UpdateComponent from "./withCounter";
import { UserConsumer } from "./UserContext";
class ClickCounter extends Component {
  render() {
    const { count, increamentCount } = this.props;
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return (
              <button onClick={increamentCount}>
                {" "}
                {username}
                {}clicked {count} times
              </button>
            );
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter);
