import { ActionTypes } from "../contants/actions-type";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { type, payLoad }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state,products:payLoad};

      case ActionTypes.SELECTED_PRODUCT:
        return {...state,...payLoad};


        case ActionTypes.REMOVE_SELECTED_PRODUCT:
          console.log("remove",type);
          return {};

    default:
      return state;
  }
};

export default productReducer;