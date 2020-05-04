import React from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import ObjectState from "./components/ObjectState";
import UseStateArray from "./components/UseStateArray";
import UseEffectCounter from "./components/useEffect/UseEffectCounter";

function App() {
  return (
    <div className="App">
      <UseEffectCounter />
    </div>
  );
}

export default App;
