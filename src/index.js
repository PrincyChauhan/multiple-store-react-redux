import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB,
});

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();