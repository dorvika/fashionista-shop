import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import Modal from "./components/Modal";
import ProductsDisplayProvider from "./context/ProductsDisplay";

export default function App() {
  return (
    <div className="container">
      <Header />
      <ProductsDisplayProvider>
        <AppRoutes />
      </ProductsDisplayProvider>
      <Footer />
      <Modal />
    </div>
  );
}
