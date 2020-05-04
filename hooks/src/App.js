import React from "react";
import "./App.css";
import HookCounter from "./components/HookCounter";
import ObjectState from "./components/ObjectState";
import UseStateArray from "./components/UseStateArray";
import UseEffectCounter from "./components/useEffect/UseEffectCounter";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import IntervalCounter from "./components/useEffect/IntervalCounter";
import DataFetching from './components/useEffect/DataFetching'
function App() {
  return (
    <div className="App">
      <DataFetching />
    </div>
  );
}
export default App;
