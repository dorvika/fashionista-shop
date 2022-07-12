import "./orderForm.scss";
import { Formik, Form } from "formik";
import { object, string, number } from "yup";
import "yup-phone";
import TextField from "../../components/TextField";
import { useSelector, useDispatch } from "react-redux";
import { productsInBasket } from "../../store/basket/reducer";
import { useNavigate } from "react-router-dom";
import { deleteFromBasket } from "../../store/basket/actions";
import Button from "../../components/Button";

const validate = object({
  firstName: string()
    .matches(/^[aA-яЯ-іІ-єЄ\s]+$/, "Поле повинне містити лише букви")
    .max(15, "Ім'я не може містити більше 15 символів")
    .required("Обов'язкове поле"),
  lastName: string()
    .matches(/^[aA-яЯ-іІ-єЄ\s]+$/, "Поле повинне містити лише букви")
    .max(20, "Прізвище не може містити більше 20 символів")
    .required("Обов'язкове поле"),
  age: number()
    .typeError("Вік повинен бути числом")
    .positive("Вік повинен бути невід'ємним числом")
    .max(99, "Максимальний вік 99")
    .integer("Вік повинен бути цілим числом")
    .required("Обов'язкове поле"),
  address: string()
    .max(50, "Адреса не може перевищувати 50 символів")
    .required("Обов'язкове поле"),
  phone: string()
    .required("Обов'язкове поле")
    .phone(null, true, "Номер повинен починатися з +380 та містити 12 цифр"),
});

export default function OrderForm() {
  const basket = useSelector(productsInBasket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Інформація про клієнта:", values);
    basket.forEach((product) => {
      console.log(
        `Замовлення: ${product.name} (${product.color}) - ${product.qty} шт.`
      );
      dispatch(deleteFromBasket(product.sku, true));
    });
    navigate("/thanks-for-order");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        phone: "",
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <section className="order__form">
            <h3 className="order__form__title">
              Для оформлення замовлення введіть наступну інформацію:
            </h3>
            <Form>
              <TextField label="Ім'я" name="firstName" type="text" />
              <TextField label="Прізвище" name="lastName" type="text" />
              <TextField label="Вік" name="age" type="text" />
              <TextField label="Адреса доставки" name="address" type="text" />
              <TextField
                label="Мобільний телефон"
                name="phone"
                type="text"
                placeholder="+38(099)-999-99-99"
              />
              <Button className="order__form__btn" type="submit">
                Підтвердити замовлення
              </Button>
            </Form>
          </section>
        );
      }}
    </Formik>
  );
}
