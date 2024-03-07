import { IImage, IProduct } from "../types/Interface";

export const ImageGallery = (images: IImage[]) => {
  if (!images) {
    return <></>;
  }
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-2 lg:px-2">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0]["src"]}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        {images[1] && (
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[1]["src"]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
        {images[2] && (
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              src={images[2]["src"]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
      </div>
      {images[3] && (
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={images[3]["src"]}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
