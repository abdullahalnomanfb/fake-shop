import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../contants/actions-type";

const fetchProducts = () => async (dispatch) => {
  const res = await fakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payLoad: res.data })
};

const selectedProduct = (productId) => async (dispatch) => {
  const res = await fakeStoreApi.get(`products/${productId}`)
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payLoad: res.data })
}

const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payLoad: products,
  };
};


const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export { setProducts, selectedProduct, removeSelectedProduct, fetchProducts }

