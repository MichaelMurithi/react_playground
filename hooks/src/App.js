import React from "react";
import "./App.css";
import ContextConsumer from "./components/useContext/ContextConsumer";
export const UserContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value="Myke">
        <ContextConsumer />
      </UserContext.Provider>
    </div>
  );
}
export default App;
