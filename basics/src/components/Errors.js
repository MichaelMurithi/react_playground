import React from "react";

function Errors({ name }) {
  if (name == "Joker") {
    throw new Error("Not a hero");
  }
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Errors;
