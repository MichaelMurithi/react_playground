import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css"; //regular css file importation
import styles from "./appStyles.module.css"; //css module importation
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentsDemo from "./components/FragmentsDemo";
import MemoComponent from "./components/MemoComponent";

function App() {
  return (
    <div className="App">
      <MemoComponent name="Myke" />
    </div>
  );
}

export default App;
