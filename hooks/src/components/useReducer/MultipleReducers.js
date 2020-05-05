import React, { useContext } from "react";
import { CountContext } from "../../App";
const MultipleReducers = () => {
  const { count, dispatch } = useContext(CountContext);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => dispatch("increament")}>increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <br />
      {count}
      <br />
      <button onClick={() => dispatch("increament")}>increament</button>
      <button onClick={() => dispatch("decreament")}>Decreament</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default MultipleReducers;
