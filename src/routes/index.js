import { Routes, Route } from "react-router-dom";
import Category from "../pages/category/category";
import ProductDetails from "../pages/product-details/product-details";
import CartPage from "../pages/cart/cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
      <Route path="/product-detail" element={<ProductDetails />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;