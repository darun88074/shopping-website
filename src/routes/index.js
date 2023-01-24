import { Routes, Route } from "react-router-dom";
import ProductDetails from "../pages/details/details";
import CartPage from "../pages/cart/cart";
import Home from "../pages/home/home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:categoryId" element={<Home />}></Route>
      <Route path="/product-detail" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;