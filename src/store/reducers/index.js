import { combineReducers } from "redux";
import clients from "./clients";
import { testClientReducer } from "../../Clients/AppStore";

const rootReducer = combineReducers({
  clients,
  testClientReducer
});

export default rootReducer;
