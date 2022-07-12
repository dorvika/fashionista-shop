import "./thanksForOrder.scss";
import { Link } from "react-router-dom";

export default function ThanksForOrder() {
  return (
    <div className="thank-you__container">
      <p className="thank-you__text">Дякуємо за Ваше замовлення!</p>
      <p className="thank-you__text">
        Найближчим часом очікуйте на дзвінок менеджера магазину :)
      </p>
      <p className="thank-you__text">
        Повернутися на <Link to="/">Головну</Link>
      </p>
    </div>
  );
}
