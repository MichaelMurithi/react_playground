import React from "react";

const ChildComponent = (props) => {
  return <button onClick={() => props.greetHandler("Son")}>Greet</button>;
};

export default ChildComponent;
