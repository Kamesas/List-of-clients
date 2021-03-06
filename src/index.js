import React from "react";
import ReactDOM from "react-dom";
//import App from "./Clients/App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Auth from "./Clients/Auth";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
  document.getElementById("root")
);
