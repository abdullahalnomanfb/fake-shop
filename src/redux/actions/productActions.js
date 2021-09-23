import { ActionTypes } from "../contants/actions-type";

const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payLoad: products,
  };
};

const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payLoad: product,
  };
};


const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export {setProducts,selectedProduct,removeSelectedProduct}

