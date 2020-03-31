import React, { useState } from "react";
import { render } from "react-dom";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchparams";
import ThemeContext from "./ThemeContext";
const App = () => {
  const themeHook = useState("darkBlue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
``;
