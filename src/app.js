import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchparams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
``;
