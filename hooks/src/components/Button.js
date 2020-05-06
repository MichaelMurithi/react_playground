import React from "react";

const Button = ({ clickHandler, text }) => {
  return (
    <>
      <button onClick={clickHandler}>{text}</button>
    </>
  );
};

export default React.memo(Button);
