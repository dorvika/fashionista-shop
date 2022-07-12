import { fetchProducts } from "../../helpers/api";

export const getProductsRequested = () => {
  return {
    type: "GET_PRODUCTS_REQUESTED",
  };
};

export const getProductsSuccess = (products) => {
  return {
    type: "GET_PRODUCTS_SUCCESS",
    payload: { products },
  };
};

export const getProductsError = () => {
  return {
    type: "GET_PRODUCTS_ERROR",
  };
};

export const getProducts = () => (dispatch, getState) => {
  if (getState().products.products.length === 0) {
    dispatch(getProductsRequested());
    fetchProducts()
      .then((response) => dispatch(getProductsSuccess(response.data)))
      .catch(() => dispatch(getProductsError()));
  }
};
