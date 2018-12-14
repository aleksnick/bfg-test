import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./Components/App";
import reducer from "./Reducers";
import { Init } from "./Actions/Init";
import Questions from "./Helpers/Questions";

const store = createStore(reducer);

store.dispatch(Init());

window.console.log("start");
Questions.load();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
