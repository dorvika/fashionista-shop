import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";
import "./home.scss";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../store/products/actions";
import { allProducts } from "../../store/products/reducer";
import ProductList from "../../components/ProductList";
import { ProductsDisplayContext } from "../../context/ProductsDisplay";

export default function Home() {
  const { toggleDisplay } = useContext(ProductsDisplayContext);
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(allProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className="loader__container">
          <Circles
            ariaLabel="loading-indicator"
            height="100"
            width="100"
            color="#bd9773"
          />
          <p className="loader__text">Завантаження</p>
        </div>
      )}
      {error && <p className="info">Під час запиту щось сталося не так :(</p>}
      {!loading && !error && (
        <section>
          <h2 className="section__title">Список товарів</h2>
          <div className="display__container">
            <img
              onClick={() => toggleDisplay("list")}
              className="display__img"
              src="./images/icons/list.svg"
              alt="list icon"
              width={40}
              height={40}
              title="Список"
            />
            <img
              onClick={() => toggleDisplay("grid")}
              className="display__img"
              src="./images/icons/table.svg"
              alt="table icon"
              width={30}
              height={30}
              title="Сітка"
            />
          </div>
          <ProductList productsArray={products} />
        </section>
      )}
    </>
  );
}
