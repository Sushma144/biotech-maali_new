// import React, { useState } from "react";
// import popup from "../../Assets/popup.png";

// function PopupShopTheLook({ onClose }) {
//   const [quantities, setQuantities] = useState({
//     1: 0,
//     2: 0,
//     3: 0,
//   });

//   const increment = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   const decrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] > 0 ? prev[id] - 1 : 0, // Ensures quantity doesn't go below 0
//     }));
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//        className="bg-white rounded-lg p-4 relative w-[90%] max-w-sm md:max-w-md lg:max-w-lg md:h-[80%] max-h-[85vh] overflow-y-auto "
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>
//         <div className="bg-blue-800 text-white text-center py-2 rounded-t-lg">
//           <h2 className="text-2xl md:text-3xl font-bold">Shop The Look</h2>
//           <p className="text-xs md:text-sm">Add the shop look to your cart</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-3 md:p-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex items-center p-2 md:p-4 border-b last:border-b-0"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-16 h-16 md:w-20 md:h-20 rounded-lg mr-3 md:mr-4"
//               />
//               <div className="flex-1">
//                 <h3 className="text-sm md:text-lg font-semibold">
//                   {product.name}
//                 </h3>
//                 <p className="text-xs md:text-sm text-gray-500">
//                   {product.size}
//                 </p>
//                 <div className="flex items-center">
//                   <span className="text-green-600 font-bold text-sm md:text-lg mr-2">
//                     {product.price}
//                   </span>
//                   <span className="text-gray-400 line-through text-xs md:text-sm">
//                     {product.oldPrice}
//                   </span>
//                 </div>
//                 {product.inStock ? (
//                   <div className="flex items-center space-x-2 mt-2">
//                     <button
//                       onClick={() => decrement(product.id)}
//                       className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//                     >
//                       -
//                     </button>
//                     <span className="text-sm md:text-lg font-medium">
//                       {quantities[product.id]}
//                     </span>
//                     <button
//                       onClick={() => increment(product.id)}
//                       className="px-2 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <p className="text-red-600 mt-2 font-semibold text-sm">
//                     Out of stock
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PopupShopTheLook;

// import React, { useState } from "react";
// import popup from "../../Assets/popup.png";
// import Box from "@mui/material/Box";

// function PopupShopTheLook({ onClose }) {
//   const [quantities, setQuantities] = useState({
//     1: 0,
//     2: 0,
//     3: 0,
//   });

//   const increment = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] + 1,
//     }));
//   };

//   const decrement = (id) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [id]: prev[id] > 0 ? prev[id] - 1 : 0, // Ensures quantity doesn't go below 0
//     }));
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: false,
//     },
//     {
//       id: 2,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//     {
//       id: 4,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//     {
//       id: 5,
//       name: "Peace Lily Plant",
//       size: "2ft / 2ft-GroPot / Ivory",
//       price: "₹499.00",
//       oldPrice: "₹599.00",
//       image: popup,
//       inStock: true,
//     },
//   ];

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white  relative w-[90%] max-w-lg md:h-[85%] max-h-[85vh] overflow-y-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-black"
//         >
//           ✕
//         </button>
//         {/* <div className="bg-blue-800 text-white text-center py-3 rounded-t-lg"> */}
//         <div
//       className="bg-blue-800 text-white text-center py-3  sticky top-0 z-10"
//     >
//           <h2 className="text-xl md:text-2xl font-bold">Shop The Look</h2>
//           <p className="text-xs md:text-sm">Add the shop look to your cart</p>
//         </div>
//         <Box>
//         <div className="p-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex items-center p-2 md:p-4 border-b last:border-b-0"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-16 h-16 md:w-20 md:h-20 rounded-lg mr-3 md:mr-4"
//               />
//               <div className="flex-1">
//                 <h3 className="text-sm md:text-lg font-semibold">
//                   {product.name}
//                 </h3>
//                 <p className="text-xs md:text-sm text-gray-500">
//                   {product.size}
//                 </p>
//                 <div className="flex items-center">
//                   <span className="text-green-600 font-bold text-sm md:text-lg mr-2">
//                     {product.price}
//                   </span>
//                   <span className="text-gray-400 line-through text-xs md:text-sm">
//                     {product.oldPrice}
//                   </span>
//                 </div>
//                 {product.inStock ? (
//                   <div className="flex items-center space-x-2 mt-2">
//                     <button
//                       onClick={() => decrement(product.id)}
//                       className="px-3 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//                     >
//                       -
//                     </button>
//                     <span className="text-sm md:text-lg font-medium">
//                       {quantities[product.id]}
//                     </span>
//                     <button
//                       onClick={() => increment(product.id)}
//                       className="px-3 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <p className="text-red-600 mt-2 font-semibold text-sm">
//                     Out of stock
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         </Box>
//         <button className="w-full mt-4 py-3 bg-lime-500 text-white font-bold text-lg rounded-lg hover:bg-lime-600">
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PopupShopTheLook;

import React, { useState } from "react";
import popup from "../../Assets/popup.png";
import Box from "@mui/material/Box";

function PopupShopTheLook({ onClose }) {
  const [quantities, setQuantities] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const products = [
    {
      id: 1,
      name: "Peace Lily Plant",
      size: "2ft / 2ft-GroPot / Ivory",
      price: "₹499.00",
      oldPrice: "₹599.00",
      image: popup,
      inStock: false,
    },
    {
      id: 2,
      name: "Peace Lily Plant",
      size: "2ft / 2ft-GroPot / Ivory",
      price: "₹499.00",
      oldPrice: "₹599.00",
      image: popup,
      inStock: true,
    },
    {
      id: 3,
      name: "Peace Lily Plant",
      size: "2ft / 2ft-GroPot / Ivory",
      price: "₹499.00",
      oldPrice: "₹599.00",
      image: popup,
      inStock: true,
    },
    {
      id: 4,
      name: "Peace Lily Plant",
      size: "2ft / 2ft-GroPot / Ivory",
      price: "₹499.00",
      oldPrice: "₹599.00",
      image: popup,
      inStock: true,
    },
    {
      id: 5,
      name: "Peace Lily Plant",
      size: "2ft / 2ft-GroPot / Ivory",
      price: "₹499.00",
      oldPrice: "₹599.00",
      image: popup,
      inStock: true,
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white relative w-[90%] max-w-lg md:h-[85%] max-h-[85vh] overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div className="bg-blue-800 text-white text-center py-3 sticky top-0 z-10">
          <h2 className="text-lg md:text-2xl font-bold">Shop The Look</h2>
          <p className="text-xs md:text-sm">Add the shop look to your cart</p>
        </div>
        {/* <Box className="overflow-y-auto flex-1 max-h-[calc(100%-4rem)] shadow-lg "> */}
        <Box
          className="overflow-y-auto flex-1 max-h-[calc(100%-4rem)] shadow-lg"
          sx={{
            boxShadow: 3, 

          }}
        >
          <div className="p-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center p-2 md:p-4 border-b last:border-b-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg mr-3 md:mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-sm md:text-lg font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500">
                    {product.size}
                  </p>
                  <div className="flex items-center">
                    <span className="text-green-600 font-bold text-sm md:text-lg mr-2">
                      {product.price}
                    </span>
                    <span className="text-gray-400 line-through text-xs md:text-sm">
                      {product.oldPrice}
                    </span>
                  </div>
                  {product.inStock ? (
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => decrement(product.id)}
                        className="px-3 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
                      >
                        -
                      </button>
                      <span className="text-sm md:text-lg font-medium">
                        {quantities[product.id]}
                      </span>
                      <button
                        onClick={() => increment(product.id)}
                        className="px-3 py-1 bg-lime-500 rounded text-xs md:text-sm font-semibold text-white"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <p className="text-red-600 mt-2 font-semibold text-sm">
                      Out of stock
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Box>
        <div className="sticky bottom-0 z-10 bg-white p-4 flex justify-center">
          <button className="w-1/2 py-2 bg-lime-500 text-white font-bold text-center rounded-lg hover:bg-lime-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupShopTheLook;
