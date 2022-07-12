import { getProductsFromLS } from "../../helpers/localStorage";

const initialState = getProductsFromLS("Products in Favorite") || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      const isFavorite = state.find(
        (item) => item.sku === action.payload.product.sku
      );
      if (isFavorite) {
        return state.filter((item) => item.sku !== action.payload.product.sku);
      } else {
        return [...state, action.payload.product];
      }
    }
    default: {
      return state;
    }
  }
};

export const favorites = (state) => state.favorites;

export default reducer;
