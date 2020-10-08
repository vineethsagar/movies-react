import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Movies from "./movies";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  rootElement
);
