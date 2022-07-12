import PropTypes from "prop-types";
import "./productCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../store/favorities/actions";
import { openModal } from "../../store/modal/actions";
import { favorites } from "../../store/favorities/reducer";
import { useContext } from "react";
import { ProductsDisplayContext } from "../../context/ProductsDisplay";
import Button from "../Button";

export default function ProductCard({ productObj }) {
  const { productsDisplay } = useContext(ProductsDisplayContext);
  const dispatch = useDispatch();
  const favoriteProducts = useSelector(favorites);
  const { name, price, img } = productObj;

  const favoriteIconClickHandler = () => {
    dispatch(toggleFavorite(productObj));
  };

  const showFavoriteIcon = (item) => {
    const isFavorite = favoriteProducts.find(
      (product) => product.sku === item.sku
    );
    if (isFavorite) return true;
    return false;
  };

  return (
    <div className={productsDisplay === "grid" ? "card" : "card__list"}>
      <div className="card__img-container">
        <img
          className="card__img"
          src={img}
          alt={name}
          width={260}
          height={320}
        />
        <img
          onClick={favoriteIconClickHandler}
          className="card__star__icon"
          src={
            showFavoriteIcon(productObj)
              ? "./images/icons/star.png"
              : "./images/icons/star_empty.png"
          }
          alt="star icon"
        />
      </div>
      <h3
        className={
          productsDisplay === "grid" ? "card__title" : "card__list-title"
        }
      >
        {name}
      </h3>
      <p
        className={
          productsDisplay === "grid" ? "card__price" : "card__list-price"
        }
      >
        {price} грн
      </p>
      <Button
        className={productsDisplay === "grid" ? "card__btn" : "card__list-btn"}
        onClick={() =>
          dispatch(
            openModal({
              content: "Ви бажаєте додати даний товар до кошика?",
              action: "add",
              product: productObj,
            })
          )
        }
      >
        Додати до кошика
      </Button>
    </div>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    sku: PropTypes.number.isRequired,
  }),
};
