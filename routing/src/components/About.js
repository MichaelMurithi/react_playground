import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import NestedSection from "./NestedSection";
function About() {
  let match = useRouteMatch();
  return (
    <div>
      <h1>About Us</h1>
      <p> Learn all about us from our routed app</p>
      <ul>
        <li>
          <Link to={`${match.url}/join`}>Join Us</Link>
        </li>
        <li>
          <Link to={`${match.url}/partner`}>Partners</Link>
        </li>
        <li>
          <Link to={`${match.url}/location`}>Location</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${match.path}`}>
          <p>Please select a section</p>
        </Route>
        <Route path={`${match.path}/:section`}>
          <NestedSection />
        </Route>
      </Switch>
    </div>
  );
}

export default About;
