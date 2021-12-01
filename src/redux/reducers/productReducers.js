import { ActionTypes } from "../contants/actions-type";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payLoad };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payLoad };


    case ActionTypes.FETCH_PRODUCTS:
      console.log("remove", type);
      return {
        ...state, products: payLoad
      };

    default:
      return state;
  }
};

export default productReducer;