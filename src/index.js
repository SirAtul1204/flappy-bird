import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./App.css";

window.onload = function () {
  document.getElementById("mainGame").focus();
};
ReactDOM.render(<App />, document.getElementById("root"));
