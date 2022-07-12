export const getProductsFromLS = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return [];
  }
};

export const setProductsToLS = (key, product) => {
  return localStorage.setItem(key, JSON.stringify(product));
};
