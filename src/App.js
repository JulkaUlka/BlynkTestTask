import "./App.css";
import React from "react";
import { AsideBar } from "./components/AsideBar/AsideBar";
import { Block } from "./components/Block/Block";

function App() {
  return (
    <div className="App">
      <AsideBar />
      <div className="App-block">
        <Block type="users" />
        <Block type="comments" />
      </div>
    </div>
  );
}

export default App;
