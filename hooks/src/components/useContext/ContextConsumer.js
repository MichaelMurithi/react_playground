import React, { useContext } from "react";
import { UserContext } from "../../App";
const ContextConsumer = () => {
  const user = useContext(UserContext);
  return <div>{user}</div>;
};

export default ContextConsumer;
