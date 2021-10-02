import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { surveyContext, votes } from "./store";

ReactDOM.render(
  <surveyContext.Provider value={votes}>
    <App />
  </surveyContext.Provider>,
  document.getElementById("root")
);
