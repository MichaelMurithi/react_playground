import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import { Reach } from "@reach/router";
import SearchParams from "./searchparams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
``;
