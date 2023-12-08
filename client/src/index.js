import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const element = (
    <Router>
    <App />
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
