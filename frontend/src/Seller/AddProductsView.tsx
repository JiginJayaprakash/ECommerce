import AddProducts from "../components/AddProducts";
import SellerHeader from "./SellerHeader";

const AddProductsView = () => {
  return (
    <>
      <SellerHeader headerName={"Add Products"} />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <AddProducts />
        </div>
      </main>
    </>
  );
};

export default AddProductsView;
