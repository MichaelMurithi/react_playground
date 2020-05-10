import React, { useReducer } from "react";
import "./App.css";
import Formwatch from './hook-form/FormWatch'
import FormFieldArrays from "./hook-form/FormFieldArrays";
import FormUnregister from "./hook-form/FormUnregister";
function App() {
  return (
    <div className="App">
      <Formwatch/>
    </div>
  );
}
export default App;
