const initialState = {
  loading: false,
  products: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUESTED": {
      return {
        ...state,
        loading: true,
      };
    }

    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };
    }

    case "GET_PRODUCTS_ERROR": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};

export const allProducts = (state) => state.products;

export default reducer;
