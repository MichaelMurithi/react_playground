import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    //Using Ternary
    return this.state.isLoggedIn ? (
      <h3>Welcome User</h3>
    ) : (
      <h3>Welcome Guest</h3>
    );
    //Cunditional rendering using if..else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Myke</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
