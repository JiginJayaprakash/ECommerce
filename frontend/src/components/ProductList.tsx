import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ICheckSellerGetProduct, IProduct } from "../types/Interface";
import api from "../utils/apiCall";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const [products, setproducts] = useState<[ICheckSellerGetProduct]>();
  const navigate = useNavigate();
  useEffect(() => {
    api.callApi(
      "getProducts",
      "get",
      (data: any) => {
        setproducts(data.data);
      },
      null,
      (err: any) => {
        if (err?.response?.status) {
          navigate("/error");
        }
        if (err.response.status === 401) {
          navigate("/login");
        }
      },
    );
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product: ICheckSellerGetProduct) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
