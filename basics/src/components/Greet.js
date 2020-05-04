import React from "react";

const Greet = ({ name, heroName }) => {
  return <h1>Hello {`${name} ${heroName}`}</h1>;
};
export default Greet;
