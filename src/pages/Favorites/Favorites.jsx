import ProductList from "../../components/ProductList";
import "./favorites.scss";
import { useSelector } from "react-redux";
import { favorites } from "../../store/favorities/reducer";

export default function Favorites() {
  const favoriteProducts = useSelector(favorites);

  return (
    <>
      {favoriteProducts.length === 0 ? (
        <p className="info">Ваш список обраних товарів порожній :(</p>
      ) : (
        <section>
          <h2 className="section__title">Обрані товари</h2>
          <ProductList productsArray={favoriteProducts} />
        </section>
      )}
    </>
  );
}
