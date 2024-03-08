const SellerHeader = ({ headerName = "Seller" }) => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {headerName}
        </h1>
      </div>
    </header>
  );
};

export default SellerHeader;
