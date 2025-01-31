import React from "react";
import plantImage from "../../../Assets/Gift/Gift3.png";
import AddOnData from "../../utilities/ProductData/AddOnData"

const products = [
  {
    name: "Peace Lily Plant",
    price: 499,
    oldPrice: 650,
    image: plantImage,
    rating: 4,
    isNewArrival: true ,
  },
  {
    name: "Peace Lily Plant",
    price: 499,
    oldPrice: 650,
    image: plantImage,
    rating: 4,
    isNewArrival: true ,
  },
  {
    name: "Peace Lily Plant",
    price: 499,
    oldPrice: 650,
    image: plantImage,
    rating: 4,
    isNewArrival: true ,
  },
];

const AddOnProduct = () => {
  return (
    <div className="flex justify-center p-4 bg-white w-full rounded-md mt-8">
      <div className="w-full">
        <h2 className="text-xl mb-4 text-start font-bold">Add On</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center font-sans">
          {products.map((product, index) => (
            <AddOnData
              key={index}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.image}
              rating={product.rating}
              isNewArrival={product.isNewArrival}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOnProduct;
