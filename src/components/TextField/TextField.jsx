import { ErrorMessage, useField } from "formik";
import "./textField.scss";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form__field">
      <label className="form__field__label" htmlFor={field.name}>
        {label}
      </label>
      <input
        className={
          meta.touched && meta.error
            ? "form__field__input is-invalid"
            : "form__field__input"
        }
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default TextField;
