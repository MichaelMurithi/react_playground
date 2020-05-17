import React from "react";

function Home({ myFunction }) {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page of my routed app</p>
      <button onClick={myFunction}>Add to basket</button>
    </div>
  );
}

export default Home;
