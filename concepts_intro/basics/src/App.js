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
import RefsPractice from "./components/RefsPrac";
import FocusInput from "./components/FocusInput";
import FRParent from "./components/FRParent";
import Modal from "./components/Modal";
import Errors from "./components/Errors";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter />
    </div>
  );
}

export default App;
