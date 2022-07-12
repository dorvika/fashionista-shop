import "./error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error__container">
      <h2 className="error__title">Сторінку не знайдено :(</h2>
      <p className="error__text">
        Будь ласка, перейдіть на <Link to="/">Головну</Link>
      </p>
    </div>
  );
}
