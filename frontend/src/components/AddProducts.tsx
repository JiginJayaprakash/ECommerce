import { useState } from "react";
import api from "../utils/apiCall";
import { IImage, IProduct } from "../types/Interface";

export const AddProducts = () => {
  const [counter, setCounter] = useState(1);
  const [product, setproduct] = useState<IProduct>({} as IProduct);
  const [highlight, sethighlight] = useState([""]);
  const [images, setimages] = useState<IImage[]>([
    { src: "" },
    { src: "" },
    { src: "" },
    { src: "" },
  ]);
  console.log(highlight);
  function handleSubmit(e: any) {
    api.callApi(
      "addProduct",
      "post",
      (data: any) => {
        console.log(data);
      },
      {
        name: product.name,
        description: product.description,
        image: images,
        price: product.price,
        details: product.details,
        highlights: highlight,
      },
    );
  }
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Dairy milk"
                    value={product.name}
                    onInput={(e) =>
                      setproduct({
                        ...product,
                        name: (e.target as HTMLInputElement).value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={product.description}
                  onInput={(e) =>
                    setproduct({
                      ...product,
                      description: (e.target as HTMLInputElement).value,
                    })
                  }
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences about the product.
              </p>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    required
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="$100"
                    value={product.price}
                    onInput={(e) =>
                      setproduct({
                        ...product,
                        price: (e.target as HTMLInputElement).value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Detailed Information
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="details"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Details
              </label>
              <div className="mt-2">
                <textarea
                  rows={3}
                  name="details"
                  id="details"
                  value={product.details}
                  onInput={(e) =>
                    setproduct({
                      ...product,
                      details: (e.target as HTMLInputElement).value,
                    })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {[1, 2, 3, 4].map((i, index) => {
              return (
                <div className="sm:col-span-3">
                  <label
                    htmlFor={"images-" + i}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {"Images-" + i}
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      required={i === 1}
                      name={"images-" + i}
                      id={"images-" + i}
                      onInput={(e) => {
                        console.log(index);
                        images[index] = {
                          src: (e.target as HTMLInputElement).value,
                        };
                        console.log(images);
                        setimages(images);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              );
            })}

            <div className="col-span-full">
              <label
                htmlFor="highlights"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Highlights
              </label>
              {Array.from(Array(counter)).map((i, index) => {
                return (
                  <div className="mt-2">
                    <input
                      type="text"
                      name={"highlights-" + i}
                      id={"highlights-" + i}
                      className="w-7/12 rounded-md border-0 py-1.5 text-gray-900 
                      shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                      focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                      sm:text-sm sm:leading-6"
                      //value={highlight[index]}
                      onInput={(e) => {
                        console.log(index);
                        highlight[index] = (e.target as HTMLInputElement).value;
                        console.log(highlight);
                        sethighlight(highlight);
                      }}
                    />
                    <button
                      type="button"
                      className="rounded-md bg-indigo-600 px-3 py-2 mx-2.5 text-sm font-semibold text-white shadow-sm 
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-indigo-600"
                      onClick={() => {
                        setCounter(counter + 1);
                        highlight.push("");
                        sethighlight(highlight);
                        console.log(counter);
                      }}
                    >
                      Add
                    </button>
                    {counter > 1 && (
                      <button
                        type="button"
                        className="rounded-md bg-indigo-600 px-3 py-2 mx-1 text-sm font-semibold text-white shadow-sm 
                    hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                     focus-visible:outline-indigo-600"
                        onClick={() => {
                          setCounter(counter - 1);
                          highlight.pop();
                          sethighlight(highlight);

                          console.log(counter);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
