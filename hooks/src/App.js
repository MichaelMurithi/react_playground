import React, { useReducer } from "react";
import "./App.css";
import MultipleReducers from "./components/useReducer/MultipleReducers";
const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
      return state - 1;
    case "reset":
      return initialCount;
    default:
      return state;
  }
};
export const CountContext = React.createContext();
function App() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <CountContext.Provider value={{ count: count, dispatch: dispatch }}>
        <MultipleReducers />
      </CountContext.Provider>
    </div>
  );
}
export default App;
