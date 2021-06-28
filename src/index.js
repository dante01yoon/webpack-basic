import { func1 } from "./util_common";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import text from "./text.txt";

func1();

const App = () => {
  return (
    <div>{text}</div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));