import { createStore } from "redux";
import allProductReducer from "../reducers";

const store = createStore(
  allProductReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
