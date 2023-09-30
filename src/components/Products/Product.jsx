import React from "react";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  Product.propTypes = {
    product: PropTypes.object.isRequired,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md p-4 rounded-lg">
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="md:w-1/3">
            <img
              src={productData.picture}
              alt={productData.name}
              className="w-full rounded-md"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold">{productData.name}</h2>
            <p className="text-gray-600 mb-2">{productData.type.name}</p>
            <p className="text-gray-800">{productData.description}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Details</h3>
          <ul className="list-disc pl-4">
            {productData.categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
            <li>{productData.trl.name}</li>
            <li>{productData.investmentEffort}</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Video</h3>
          <iframe
            title="Product Video"
            className="w-full"
            src={productData.video}
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">User Info</h3>
          <div className="flex items-center">
            <img
              src={productData.user.profilePicture}
              alt={`${productData.user.firstName}'s Profile`}
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="font-semibold">
                {productData.user.firstName} {productData.user.lastName}
              </p>
              <p>{productData.user.position}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Map</h3>
          <p>
            Address: {productData.company.address.street}{" "}
            {productData.company.address.house},{" "}
            {productData.company.address.city.name},{" "}
            {productData.company.address.country.name} -{" "}
            {productData.company.address.zipCode}
          </p>
          {/* You can integrate a map component here */}
        </div>
      </div>
    </div>
  );
};

export default Product;
