import "./modal.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, modalActionHandler } from "../../store/modal/actions";
import { modal } from "../../store/modal/reducer";
import Button from "../Button";

export default function Modal() {
  const dispatch = useDispatch();
  const { isOpen, content, action, product, deleteTotallyFlag } =
    useSelector(modal);

  const modalHandler = () => {
    dispatch(modalActionHandler(action, product, deleteTotallyFlag));
    onClose();
  };

  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className={isOpen ? "modal active" : "modal"}>
        <div className="modal__header">
          <Button className="modal__header__btn" onClick={onClose}>
            &times;
          </Button>
        </div>
        <div className="modal__content">
          <p className="modal__content__text">{content}</p>
          <Button className="modal__content__btn" onClick={modalHandler}>
            Ок
          </Button>
          <Button className="modal__content__btn" onClick={onClose}>
            Скасувати
          </Button>
        </div>
      </div>
      <div
        className={isOpen ? "backdrop active" : "backdrop"}
        onClick={onClose}
      />
    </>
  );
}
