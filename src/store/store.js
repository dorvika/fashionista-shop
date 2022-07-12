import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import productReducer from "./products/reducer";
import favoriteReducer from "./favorities/reducer";
import basketReducer from "./basket/reducer";
import modalReducer from "./modal/reducer";
import { setProductsToLS } from "../helpers/localStorage";

export const rootReducer = combineReducers({
  products: productReducer,
  favorites: favoriteReducer,
  basket: basketReducer,
  modal: modalReducer,
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const syncWithLS = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === "TOGGLE_FAVORITE") {
    setProductsToLS("Products in Favorite", store.getState().favorites);
    return result;
  }
  if (action.type === "ADD_TO_BASKET" || action.type === "DELETE_FROM_BASKET") {
    setProductsToLS("Products in Basket", store.getState().basket);
    return result;
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, syncWithLS), devTools)
);

export default store;
