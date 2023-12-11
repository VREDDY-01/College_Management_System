import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";
import { thunk } from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const element = (
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
</React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);
