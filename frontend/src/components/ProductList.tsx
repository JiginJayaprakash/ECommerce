import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import { IProduct } from '../types/Interface';

export const ProductList = () => {

  const [products, setproducts] = useState<[IProduct]>();
  useEffect(() => {
    axios({
      url: "http://localhost:5000/getProducts",
      method: "get"
    })
      .then((data) => {
        setproducts(data.data);
      })
      .catch((err) => { });
    // Update the document title using the browser API
    document.title = `You clicked times`;
  },[])
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product: IProduct) => (
            <ProductCard {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList;