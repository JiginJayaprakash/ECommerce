type IProduct = {
  _id: number,
  name: string;
  description: string;
  price: string;
  enabled: boolean,
  images: IImage[],
  highlights: [],
  details: string
};

type IImage = {

    src: string,

};

export type {IProduct,IImage}