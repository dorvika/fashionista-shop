import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { productsInBasket } from "../../store/basket/reducer";
import { favorites } from "../../store/favorities/reducer";
import { useState } from "react";

export default function Header() {
  const countFavorites = useSelector(favorites).length;
  const basket = useSelector(productsInBasket);

  const totalProductsQTY = basket.reduce(
    (accumulator, currentValue) => accumulator + currentValue.qty,
    0
  );

  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurgerMenu((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className={openBurgerMenu ? "header__list active" : "header__list"}>
          <li className="header__nav__item" onClick={toggleBurgerMenu}>
            <NavLink to="/">Головна</NavLink>
          </li>
          <li className="header__nav__item" onClick={toggleBurgerMenu}>
            <NavLink to="/favorites">Обране ({countFavorites})</NavLink>
          </li>
          <li className="header__nav__item" onClick={toggleBurgerMenu}>
            <NavLink to="/basket">Кошик ({totalProductsQTY})</NavLink>
          </li>
        </ul>
        <div
          className={openBurgerMenu ? "burger__menu active" : "burger__menu"}
          onClick={toggleBurgerMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <Link to="/">
        <img
          className="header__logo"
          src="./images/logo.jpg"
          alt="fashionista logo"
        />
      </Link>
    </header>
  );
}
