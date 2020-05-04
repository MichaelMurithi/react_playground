import React, { useState } from "react";
//Implementation of useState in an object
const ObjectState = () => {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        //The initial name value is retained using the spread opeerator so as not to overide the other object propertis
        onChange={(e) => setname({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setname({ ...name, lastName: e.target.value })}
      />
      <h2>Your first Name is - {name.firstName}</h2>
      <h2>Your last Name is - {name.lastName}</h2>
    </form>
  );
};

export default ObjectState;
