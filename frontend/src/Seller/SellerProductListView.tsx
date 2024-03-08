import { useEffect, useState } from "react";
import AddProducts from "../components/AddProducts";
import SellerHeader from "./SellerHeader";
import api from "../utils/apiCall";
import { ICheckSellerGetProduct, IProduct } from "../types/Interface";
import ProductCard from "../components/ProductCard";

const SellerProductListView = () => {
  const [products, setproducts] = useState<[ICheckSellerGetProduct]>();
  useEffect(() => {
    api.callApi("getProductByUserId", "get", (data: any) => {
      setproducts(
        data.data.map((d: ICheckSellerGetProduct) => {
          return { ...d, isSeller: true };
        }),
      );
    });
  }, []);
  return (
    <>
      <div className="bg-white">
        <SellerHeader headerName={"Your Products"} />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((p: ICheckSellerGetProduct) => <ProductCard {...p} />)}
        </div>
      </div>
    </>
  );
};

export default SellerProductListView;
