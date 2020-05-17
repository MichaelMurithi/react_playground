import React, { useReducer } from "react";
import "./App.css";
function App() {
  return (
    <nav>
      <h1>Hey React-router!</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
}
export default App;
