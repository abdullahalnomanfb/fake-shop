import productReducer from "./productReducers";
import { combineReducers } from "redux";


const allProductReducer = combineReducers({

   allProducts: productReducer
})


export default allProductReducer;