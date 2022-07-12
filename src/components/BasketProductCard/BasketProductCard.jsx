import "./basketProductCard.scss";
import { useDispatch } from "react-redux";
import { addToBasket, deleteFromBasket } from "../../store/basket/actions";
import { openModal } from "../../store/modal/actions";
import Button from "../Button";

export default function BasketProductCard({ productObj }) {
  const dispatch = useDispatch();
  const { name, price, img, color, qty } = productObj;

  const onAdd = () => {
    dispatch(addToBasket(productObj));
  };

  return (
    <div className="cart__product">
      <img src={img} width={200} height={250} alt={name} />
      <div className="cart__product__info">
        <h3 className="cart__product__title">{name}</h3>
        <p>{price} грн</p>
        <p>Колір: {color}</p>
      </div>
      <div className="cart__product__counter">
        <Button
          onClick={
            qty === 1
              ? () => {
                  dispatch(
                    openModal({
                      content: "Ви бажаєте видалити даний товар із кошика?",
                      action: "delete",
                      product: productObj,
                    })
                  );
                }
              : () => dispatch(deleteFromBasket(productObj.sku))
          }
        >
          -
        </Button>
        <span>{qty}</span>
        <Button onClick={onAdd}>+</Button>
      </div>
      <div className="cart__product__sum"> {qty * price} грн</div>
      <Button
        className="cart__product__delete"
        onClick={() =>
          dispatch(
            openModal({
              content: "Ви бажаєте видалити даний товар із кошика?",
              action: "delete",
              product: productObj,
              deleteTotallyFlag: true,
            })
          )
        }
      >
        &times;
      </Button>
    </div>
  );
}
