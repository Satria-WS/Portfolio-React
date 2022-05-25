import React from "react";
import "./styles.css";
import ReactDom from "react-dom";
import TopContainer from "./containers/top-container";
import MiddleContainer from "./containers/middle-container";
import BottomContainer from "./containers/bottom-container";

function App() {
  return (
    <>
      <TopContainer />
      <MiddleContainer />
      <BottomContainer />
    </>
  );
}

export default App;
