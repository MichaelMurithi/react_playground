import React, { Fragment } from "react";
import "./components/styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
