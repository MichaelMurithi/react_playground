import React from "react";

const Title = ({ text }) => {
  return <h2>{text}</h2>;
};

export default React.memo(Title);
