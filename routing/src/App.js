import React, { Fragment, useState } from "react";
import "./components/styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const [basketNumber, setBasketNumber] = useState(0);
  const addToBasket = () => {
    setBasketNumber(basketNumber + 1);
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar basketNumber={basketNumber} />
        <Switch>
          <Route exact path="/">
            <Home myFunction={addToBasket} />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
