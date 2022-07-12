import { addToBasket, deleteFromBasket } from "../basket/actions";

export const openModal = ({ content, action, product, deleteTotallyFlag }) => {
  return {
    type: "OPEN_MODAL",
    payload: { content, action, product, deleteTotallyFlag },
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

export const modalActionHandler =
  (action, product, deleteTotallyFlag) => (dispatch) => {
    if (action === "delete")
      dispatch(deleteFromBasket(product.sku, deleteTotallyFlag));
    if (action === "add") dispatch(addToBasket(product));
  };
