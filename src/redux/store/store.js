import { createStore, applyMiddleware, compose } from 'redux';
import allProductReducer from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allProductReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
