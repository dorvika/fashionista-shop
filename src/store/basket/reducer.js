import { getProductsFromLS } from "../../helpers/localStorage";

const initialState = getProductsFromLS("Products in Basket") || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const exist = state.find(
        (item) => item.sku === action.payload.product.sku
      );
      if (exist) {
        return state.map((item) =>
          item.sku === action.payload.product.sku
            ? { ...exist, qty: exist.qty + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload.product, qty: 1 }];
      }
    }

    case "DELETE_FROM_BASKET": {
      const exist = state.find((item) => item.sku === action.payload.id);
      if (exist.qty === 1 || action.payload.deleteTotallyFlag) {
        return state.filter((item) => item.sku !== action.payload.id);
      } else {
        return state.map((item) =>
          item.sku === action.payload.id
            ? { ...exist, qty: exist.qty - 1 }
            : item
        );
      }
    }

    default: {
      return state;
    }
  }
};

export const productsInBasket = (state) => state.basket;

export default reducer;
