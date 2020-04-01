import React, { useState } from "react";
import { render } from "react-dom";
import Details from "./Details";
import { Router } from "@reach/router";
import SearchParams from "./searchparams";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";
const App = () => {
  const themeHook = useState("darkBlue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
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
