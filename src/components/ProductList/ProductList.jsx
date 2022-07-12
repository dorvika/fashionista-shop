import ProductCard from "../ProductCard";
import "./productList.scss";
import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductsDisplayContext } from "../../context/ProductsDisplay";

export default function ProductList({ productsArray }) {
  const { productsDisplay } = useContext(ProductsDisplayContext);

  const productCard = productsArray.map((product) => (
    <ProductCard key={product.sku} productObj={product} />
  ));
  return (
    <div
      className={productsDisplay === "grid" ? "products-grid" : "products-list"}
    >
      {productCard}
    </div>
  );
}

ProductList.propTypes = {
  productsArray: PropTypes.array.isRequired,
};
