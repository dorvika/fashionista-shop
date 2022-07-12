export const addToBasket = (product) => {
  return {
    type: "ADD_TO_BASKET",
    payload: { product },
  };
};

export const deleteFromBasket = (id, deleteTotallyFlag) => {
  return {
    type: "DELETE_FROM_BASKET",
    payload: { id, deleteTotallyFlag },
  };
};
