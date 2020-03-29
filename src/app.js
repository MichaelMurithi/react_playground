import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese"></Pet>
      <Pet name="Pepper" animal="Bird" breed="Cocktail"></Pet>
      <Pet name="Angella" animal="Cat" breed="Havanese"></Pet>
    </div>
  );
};
render(<App />, document.getElementById("root"));
