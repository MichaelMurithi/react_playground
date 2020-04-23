import React from "react";

const NameList = () => {
  const names = ["Myke", "William", "Jonah"];
  return (
    <div>
      <h3>The registered students are:</h3>
      {names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
};

export default NameList;
