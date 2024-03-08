type IProduct = {
  _id: number;
  name: string;
  description: string;
  price: string;
  enabled: boolean;
  images: IImage[];
  highlights: string[];
  details: string;
};

interface ICheckSellerGetProduct extends IProduct {
  isSeller: boolean;
}
type IImage = {
  src: string;
};
type ICheckout = {
  name: string;
  image: string;
  price: string;
  product_Id: string;
  quantity: number;
};

export type { IProduct, IImage, ICheckout, ICheckSellerGetProduct };
