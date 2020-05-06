import React from "react";

const Content = ({ content, value }) => {
  return (
    <p>
      {content} - {value}
    </p>
  );
};

export default React.memo(Content);
