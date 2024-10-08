// Node modules
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Project files
import Loader from "components/loader/Loader";
import NavigationBar from "components/navigation-bar/NavigationBar";
import Footer from "components/footer/Footer";
import Data from "data/inventory.json";
import { useCart } from "state/CartContext";

// Dynamic imports to improve loading speed
const Checkout = lazy(() => import("pages/checkout/Checkout"));
const Home = lazy(() => import("pages/home/Home"));
const Page404 = lazy(() => import("pages/page-404/Page404"));
const Product = lazy(() => import("pages/product/Product"));

export default function App() {
  const { items } = Data;

  // Global state
  const { cart } = useCart();

  // Properties
  const checkout = <Checkout data={items} />;
  const home = <Home data={items} />;
  const pageNotFound = <Page404 />;
  const product = <Product data={items} />;

  // Derived state
  const itemsOnCart = cart.length;

  return (
    <div className="app">
      <NavigationBar number={itemsOnCart} />
      <Toaster position="bottom-right" toastOptions={{ className: "toaster" }} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={home} />
          <Route path="/product/:id" element={product} />
          <Route path="/checkout" element={checkout} />
          <Route path="*" element={pageNotFound} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
