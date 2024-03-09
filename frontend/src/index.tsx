import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./output.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import ProductView from "./User/ProductView";
import ProductListView from "./User/ProductListView";
import Login from "./Common/Login";
import SignUp from "./Common/SignUp";
import ErrorPage from "./Common/ErrorPage";
import AddProductsView from "./Seller/AddProductsView";
import SellerProductListView from "./Seller/SellerProductListView";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<ProductListView />} />
        <Route path="product/:id" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addproduct" element={<AddProductsView />} />
        <Route path="/seller" element={<SellerProductListView />} />
        <Route path="*" element={<ErrorPage />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
