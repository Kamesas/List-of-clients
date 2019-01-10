import React from "react";
import ReactDOM from "react-dom";
import App from "./Clients/App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import SignIn from "./Clients/Auth/Signin/Signin";
import Authentication from "./Clients/HOC/Authentication ";
import { BrowserRouter, Route } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Route exact path="/" component={SignIn} />
        <Route path="/app" component={Authentication(App)} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
