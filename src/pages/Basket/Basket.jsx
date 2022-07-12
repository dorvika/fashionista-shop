import BasketProductCard from "../../components/BasketProductCard";
import "./basket.scss";
import { useSelector } from "react-redux";
import { productsInBasket } from "../../store/basket/reducer";
import { Link } from "react-router-dom";

export default function Basket() {
  const basket = useSelector(productsInBasket);

  const basketProduct = basket.map((product) => (
    <BasketProductCard key={product.sku} productObj={product} />
  ));

  const totalPrice = basket.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.qty * currentValue.price,
    0
  );

  return (
    <>
      {basket.length === 0 ? (
        <p className="info">Ваш кошик порожній :(</p>
      ) : (
        <section className="cart">
          <h2 className="section__title">Список покупок</h2>
          {basketProduct}
          <footer className="cart__footer">
            <p className="cart__footer__text">Всього: {totalPrice} грн</p>
            <Link to="/order-form">Оформити замовлення</Link>
          </footer>
        </section>
      )}
    </>
  );
}
