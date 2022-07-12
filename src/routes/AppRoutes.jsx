import { Route, Routes, Navigate } from "react-router-dom";
import OrderForm from "../pages/OrderForm";
import ThanksForOrder from "../pages/ThanksForOrder";
import Basket from "../pages/Basket";
import Error from "../pages/Error";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import { useSelector } from "react-redux";
import { productsInBasket } from "../store/basket/reducer";

export default function AppRoutes() {
  const basket = useSelector(productsInBasket);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/basket" element={<Basket />} />
        <Route
          path="/order-form"
          element={
            basket.length > 0 ? <OrderForm /> : <Navigate replace to="/" />
          }
        />
        <Route path="/thanks-for-order" element={<ThanksForOrder />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
