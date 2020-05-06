import React, { useReducer } from "react";

const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
    
  }

const ReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => dispatch("increament")}>increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default ReducerCounter;
