import { createContext, useEffect, useState } from "react";

export const ProductsDisplayContext = createContext("grid");

const ProductsDisplayProvider = ({ children }) => {
  const [productsDisplay, setProductsDisplay] = useState(
    localStorage.getItem("Display") || "grid"
  );

  useEffect(() => {
    localStorage.setItem("Display", productsDisplay);
  }, [productsDisplay]);

  const toggleDisplay = (display) => {
    setProductsDisplay(display);
  };

  return (
    <ProductsDisplayContext.Provider value={{ productsDisplay, toggleDisplay }}>
      {children}
    </ProductsDisplayContext.Provider>
  );
};

export default ProductsDisplayProvider;
