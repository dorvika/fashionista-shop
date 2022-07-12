import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright &copy; {year} <Link to="/">Fashionista</Link>
      </p>
    </footer>
  );
}
