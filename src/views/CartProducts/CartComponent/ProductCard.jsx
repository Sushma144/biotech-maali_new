// import React from "react";
// import imageplant from "../../assests/images/peace_lilly.png";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const ProductCard = ({ product, handleRemove, handleQuantityChange }) => {
//   const increment = () =>
//     handleQuantityChange(product.id, product.quantity + 1);
//   const decrement = () =>
//     handleQuantityChange(
//       product.id,
//       product.quantity > 1 ? product.quantity - 1 : 1
//     );

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center border p-4 shadow-sm bg-white">
//       <div className="flex flex-col md:flex-row md:space-x-4 items-center md:items-start">
//         <img
//           src={imageplant}
//           alt={product.name}
//           className="w-40 h-40 md:w-40 md:h-40 rounded-md object-cover mb-4 md:mb-0"
//         />
//         <div className="flex flex-col items-center md:items-start">
//           <h2 className="text-lg font-semibold text-gray-800 text-center md:text-left">
//             {product.name}
//           </h2>
//           <p className="text-sm text-gray-500 mt-1 text-center md:text-left">
//             {product.description}
//           </p>

//           <div className="flex items-center space-x-2 mt-3 justify-center md:justify-start">
//             <p className="text-xl font-semi-bold text-black-600">
//               ₹{product.price}
//             </p>
//             <p className="text-sm line-through text-gray-400">
//               ₹{product.oldPrice}
//             </p>
//           </div>

//           {product.inStock ? (
//             <div className="flex items-center space-x-2 mt-2">
//               <button
//                 onClick={decrement}
//                 className="px-2 py-1 bg-lime-500 rounded text-sm font-semibold text-white"
//               >
//                 -
//               </button>
//               <span className="text-lg font-medium">{product.quantity}</span>
//               <button
//                 onClick={increment}
//                 className="px-2 py-1 bg-lime-500 rounded text-sm font-semibold text-white"
//               >
//                 +
//               </button>
//             </div>
//           ) : (
//             <p className="text-red-500 font-semibold mt-3 text-center md:text-left">
//               Out of stock
//             </p>
//           )}
//         </div>
//       </div>

//       <button
//         onClick={() => handleRemove(product.id)}
//         className="flex justify-center items-center w-8 h-10 bg-lime-500 text-white rounded-md transition duration-150 ease-in-out hover:text-red-500 hover:bg-red-100 mt-4 md:mt-0"
//       >
//         <RiDeleteBin6Line className="w-5 h-10" />
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
// import React from "react";
// import imageplant from "../../../Assets/PlantProduct/Peacelilly.png";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const ProductCard = ({ product, handleRemove, handleQuantityChange }) => {
//   const increment = () =>
//     handleQuantityChange(product.id, product.quantity + 1);
//   const decrement = () =>
//     handleQuantityChange(
//       product.id,
//       product.quantity > 1 ? product.quantity - 1 : 1
//     );

//   return (
//     <div className="flex flex-row justify-between items-center border-t border-b p-4 shadow-sm bg-white space-x-4">
//       <div className="flex flex-row space-x-4 items-center">
//         {/* Adjust image size responsively */}
//         <img
//           src={imageplant}
//           alt={product.name}
//           className="w-24 h-36 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-md object-cover"
//         />
//         <div className="flex flex-col items-start">
//           <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
//             {product.name}
//           </h2>
//           <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">
//             {product.description}
//           </p>

//           <div className="flex items-center space-x-2 mt-3">
//             <p className="text-sm md:text-lg lg:text-xl font-semibold text-black-600">
//               ₹{product.price}
//             </p>
//             {product.oldPrice && (
//               <p className="text-xs md:text-sm line-through text-gray-400">
//                 ₹{product.oldPrice}
//               </p>
//             )}
//           </div>

//           {product.inStock ? (
//             <div className="flex items-center space-x-2 mt-2">
//               <button
//                 onClick={decrement}
//                 className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//               >
//                 -
//               </button>
//               <span className="text-sm md:text-lg font-medium">
//                 {product.quantity}
//               </span>
//               <button
//                 onClick={increment}
//                 className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//               >
//                 +
//               </button>
//             </div>
//           ) : (
//             <p className="text-red-500 font-semibold mt-3 text-sm ">
//               In stock
//             </p>
//           )}
//         </div>
//       </div>

//       <button
//         onClick={() => handleRemove(product.id)}
//         className="flex justify-center items-center w-8 h-10 bg-lime-500 text-white rounded-md transition duration-150 ease-in-out hover:text-red-500 hover:bg-red-100"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>
//     </div>
//   );
// };

// export default ProductCard;



// import React from "react";
// import imageplant from "../../../Assets/PlantProduct/Peacelilly.png";
// import { RiDeleteBin6Line } from "react-icons/ri";

// const ProductCard = ({ product, handleRemove, handleQuantityChange }) => {
//   const increment = () =>
//     handleQuantityChange(product.id, product.quantity + 1);
//   const decrement = () =>
//     handleQuantityChange(
//       product.id,
//       product.quantity > 1 ? product.quantity - 1 : 1
//     );

//   return (
//     <div className="flex flex-row justify-between items-center border-t border-b p-4 shadow-sm bg-white space-x-4">
//       <div className="flex flex-row space-x-4 items-center">
//         {/* Adjust image size responsively */}
//         <img
//           src={imageplant}
//           alt={product.name}
//           className="w-24 h-36 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-md object-cover"
//         />
//         <div className="flex flex-col items-start">
//           <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
//             {product.name}
//           </h2>
//           <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">
//             {product.description}
//           </p>

//           <div className="flex items-center space-x-2 mt-3">
//             <p className="text-sm md:text-lg lg:text-xl font-semibold text-black-600">
//               ₹{product.price}
//             </p>
//             {product.oldPrice && (
//               <p className="text-xs md:text-sm line-through text-gray-400">
//                 ₹{product.oldPrice}
//               </p>
//             )}
//           </div>

//           {product.stock_status ? (
//             <div className="flex items-center space-x-2 mt-2">
//               <button
//                 onClick={decrement}
//                 className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//               >
//                 -
//               </button>
//               <span className="text-sm md:text-lg font-medium">
//                 {product.quantity}
//               </span>
//               <button
//                 onClick={increment}
//                 className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//               >
//                 +
//               </button>
//             </div>
//           ) : (
//             <p className="text-red-500 font-semibold mt-3 text-sm ">
//               Out of stock
//             </p>
//           )}
//         </div>
//       </div>

//       <button
//         onClick={() => handleRemove(product.id)}
//         className="flex justify-center items-center w-8 h-10 bg-lime-500 text-white rounded-md transition duration-150 ease-in-out hover:text-red-500 hover:bg-red-100"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>
//     </div>
//   );
// };

// export default ProductCard;
// ==================

import React, { useState,useEffect } from "react";
import imageplant from "../../../Assets/PlantProduct/Peacelilly.png";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ product, handleRemove, handleQuantityChange }) => {

  const [quantity, setQuantity] = useState(product.quantity);


  // Increment quantity
  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    handleQuantityChange(product.id, newQuantity);
    // console.log(product.quantity,'=============quntity,',newQuantity);

  };

  // Decrement quantity
  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleQuantityChange(product.id, newQuantity);
      // console.log(product.quantity,'=============quntity,',newQuantity);

    }
  };

  // const increment = () =>
  //   // quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10);

  //   // console.log(product.quantity,'=============quntity,',quantity);
  //   // handleQuantityChange(product.id, product.quantity + quantity);
  // const decrement = () =>
  //   // quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  //   // console.log(product.q,'=============quntity,',quantity);

  return (
    <div className="flex flex-row justify-between items-center border-t border-b p-4 shadow-sm bg-white space-x-4">
      <div className="flex flex-row space-x-4 items-center">
        {/* Adjust image size responsively */}
        <img
          src={imageplant}
          alt={product.name}
          className="w-24 h-36 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-md object-cover"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
            {product.name}
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">
            {product.description}
          </p>

          <div className="flex items-center space-x-2 mt-3">
            <p className="text-sm md:text-lg lg:text-xl font-semibold text-black-600">
              ₹{product.price}
            </p>
            {product.oldPrice && (
              <p className="text-xs md:text-sm line-through text-gray-400">
                ₹{product.oldPrice}
              </p>
            )}
          </div>

          {product.stock_status ? (
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={decrement}
                className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
              >
                -
              </button>
              <span className="text-sm md:text-lg font-medium">
                {product.quantity}
              </span>
              <button
                onClick={increment}
                className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
              >
                +
              </button>
            </div>
          ) : (
            <p className="text-red-500 font-semibold mt-3 text-sm ">
              Out of stock
            </p>
          )}
        </div>
      </div>

      <button
        onClick={() => handleRemove(product.id)}
        className="flex justify-center items-center w-8 h-10 bg-lime-500 text-white rounded-md transition duration-150 ease-in-out hover:text-red-500 hover:bg-red-100"
      >
        <RiDeleteBin6Line className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductCard;
