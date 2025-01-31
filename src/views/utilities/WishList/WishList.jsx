// import React, { useEffect, useState } from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import wishlist from "../../../Assets/Gift/Gift3.png";
// import axios from 'axios';
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import {  useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// const WishlistItem = ({
//   name,
//   price,
//   oldPrice,
//   outOfStock,
//   short_description,
//   stock_status,

//   handleRemove,
//   product,

// }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 relative w-full sm:w-[220px] h-[350px] bg-white flex flex-col">
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="absolute top-2 right-2 flex justify-center items-center w-8 h-8 bg-white text-gray-600 rounded-full transition duration-150 ease-in-out hover:text-red-500 z-10"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>

//       <div className="flex justify-center p-4 flex-shrink-0">
//         <img
//           className="w-[140px] h-[160px] object-contain"
//           src={wishlist}
//           alt={name}
//         />
//       </div>

//       {outOfStock && (
//         <div className="absolute top-[45%] left-0 w-full text-center">
//           <span className="text-red-500 font-semibold bg-white px-4 py-1">OUT OF STOCK</span>
//         </div>
//       )}

//       <div className="px-4 py-2 flex-grow">
//         <div className="flex justify-center mb-1">
//           <span className="text-sm text-yellow-500">★ ★ ★ ★ ☆</span>
//         </div>

//         <div className="font-medium text-sm mb-1 text-center">{name}</div>
//         <div className="font-medium text-sm mb-1 text-center">{short_description}</div>
//         <div className="font-medium text-sm mb-1 text-center">{stock_status}</div>
//         <div className="flex flex-col items-center">
//           <p className="text-gray-900 font-semibold text-sm">{price}</p>
//           {oldPrice && (
//             <p className="text-xs text-gray-400 line-through">₹{oldPrice}.00</p>
//           )}
//         </div>
//       </div>

//       <div className="px-4 pb-4 mt-auto">
//       <Link to="/cart">
//         <button
//           className={`w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded text-sm ${
//             outOfStock ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//           disabled={outOfStock}
//         >
//           Add to Bag
//         </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const WishList = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const accessToken = useSelector(selectAccessToken);

//   // GET http://www.dev.back.biotechmaali.com:8000/order/wishlist/

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/order/wishlist/`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((response) => {
//         setWishlistItems(response.data?.data?.wishlists);
//       })

//       .catch((error) => {
//         console.error('Error fetching wishlist items:', error);
//       });
//   }, []);

//   console.log(wishlistItems ,"wishlist");

//   const handleRemove = (id) => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/order/wishlist/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
//         }
//       })
//       .catch((error) => {
//         console.error('Error removing item from wishlist:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-50">
//       <h1 className="text-center text-2xl font-bold mb-8">My Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {wishlistItems.map((item) => (
//           <WishlistItem
//             key={item.id}
//             product={item}
//             handleRemove={handleRemove}
//             {...item}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishList;

// import React, { useEffect, useState } from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import axios from 'axios';
// const WishlistItem = ({
//   name,
//   price,
//   oldPrice,
//   stock_status,
//   short_description,
//   handleRemove,
//   product,
// }) => {
//   const isOutOfStock = stock_status === "OUT_OF_STOCK";

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 relative w-full sm:w-[220px] h-[350px] bg-white flex flex-col">
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="absolute top-2 right-2 flex justify-center items-center w-8 h-8 bg-white text-gray-600 rounded-full transition duration-150 ease-in-out hover:text-red-500 z-10"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>

//       <div className={`relative flex justify-center p-4 flex-shrink-0 ${isOutOfStock ? 'opacity-50' : ''}`}>
//         <img
//           className="w-[140px] h-[160px] object-contain"
//           src={product.image }
//           alt={name}
//         />
//         {isOutOfStock && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="bg-red-500 text-white px-4 py-1 text-sm font-semibold">
//               PRODUCT IS OUT OF STOCK
//             </span>
//           </div>
//         )}
//       </div>

//       <div className="px-4 py-2 flex-grow">
//         <div className="flex justify-center mb-1">
//           <span className="text-sm text-yellow-500">★ ★ ★ ★ ☆</span>
//         </div>

//         <div className="font-medium text-sm mb-1 text-center line-clamp-2">{name}</div>
//         <div className="text-xs text-gray-600 mb-1 text-center line-clamp-2">{short_description}</div>

//         <div className="flex flex-col items-center space-y-1">
//           <div className="flex items-center gap-2">
//             <p className="text-gray-900 font-semibold text-sm">₹{price}.00</p>
//             <p className="text-xs text-gray-400 line-through">₹{oldPrice || (Number(price) + 100)}.00</p>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 pb-4 mt-auto">
//         <Link to="/cart">
//           <button
//             className={`w-full text-white font-medium py-2 px-4 rounded text-sm
//               ${isOutOfStock
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-green-600 hover:bg-green-700'}`}
//             disabled={isOutOfStock}
//           >
//             {isOutOfStock ? 'Out of Stock' : 'Add to Bag'}
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const WishList = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const accessToken = useSelector(selectAccessToken);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/order/wishlist/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         // Add dummy old prices for demonstration
//         const itemsWithOldPrices = response.data?.data?.wishlists.map(item => ({
//           ...item,
//           oldPrice: Number(item.price) + 100 // Dummy old price 100 more than current price
//         }));
//         setWishlistItems(itemsWithOldPrices);
//       })
//       .catch((error) => {
//         console.error('Error fetching wishlist items:', error);
//       });
//   }, [accessToken]);

//   const handleRemove = (id) => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/order/wishlist/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
//         }
//       })
//       .catch((error) => {
//         console.error('Error removing item from wishlist:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-50">
//       <h1 className="text-center text-2xl font-bold mb-8">My Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {wishlistItems.map((item) => (
//           <WishlistItem
//             key={item.id}
//             product={item}
//             handleRemove={handleRemove}
//             {...item}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishList;

// import React, { useEffect, useState } from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import axios from 'axios';
// const WishlistItem = ({
//   name,
//   price,
//   oldPrice,
//   stock_status,
//   short_description,
//   handleRemove,
//   product,
// }) => {
//   const isOutOfStock = stock_status === "OUT_OF_STOCK";
//   const imageUrl = process.env.REACT_APP_API_URL + product.image;

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 relative w-full sm:w-[220px] h-[350px] bg-white flex flex-col">
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="absolute top-2 right-2 flex justify-center items-center w-8 h-8 bg-white text-gray-600 rounded-full transition duration-150 ease-in-out hover:text-red-500 z-10"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>

//       <div className={`relative flex justify-center p-4 flex-shrink-0 ${isOutOfStock ? 'opacity-50' : ''}`}>
//         <img
//           className="w-[140px] h-[160px] object-contain"
//           src={imageUrl}
//           alt={name}
//           onError={(e) => {
//             e.target.onerror = null;

//           }}
//         />
//         {isOutOfStock && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <span className="bg-red-500 text-white px-4 py-1 text-sm font-semibold">
//               PRODUCT IS OUT OF STOCK
//             </span>
//           </div>
//         )}
//       </div>

//       <div className="px-4 py-2 flex-grow">
//         <div className="flex justify-center mb-1">
//           <span className="text-sm text-yellow-500">★ ★ ★ ★ ☆</span>
//         </div>

//         <div className="font-medium text-sm mb-1 text-center line-clamp-2">{name}</div>
//         <div className="text-xs text-gray-600 mb-1 text-center line-clamp-2">{short_description}</div>

//         <div className="flex flex-col items-center space-y-1">
//           <div className="flex items-center gap-2">
//             <p className="text-gray-900 font-semibold text-sm">₹{price}.00</p>
//             <p className="text-xs text-gray-400 line-through">₹{oldPrice || (Number(price) + 100)}.00</p>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 pb-4 mt-auto">
//         <Link to="/cart">
//           <button
//             className={`w-full text-white font-medium py-2 px-4 rounded text-sm
//               ${isOutOfStock
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-green-600 hover:bg-green-700'}`}
//             disabled={isOutOfStock}
//           >
//             {isOutOfStock ? 'Out of Stock' : 'Add to Bag'}
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const WishList = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const accessToken = useSelector(selectAccessToken);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/order/wishlist/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         // Add dummy old prices for demonstration
//         const itemsWithOldPrices = response.data?.data?.wishlists.map(item => ({
//           ...item,
//           oldPrice: Number(item.price) + 100 // Dummy old price 100 more than current price
//         }));
//         setWishlistItems(itemsWithOldPrices);
//       })
//       .catch((error) => {
//         console.error('Error fetching wishlist items:', error);
//       });
//   }, [accessToken]);

//   const handleRemove = (id) => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/order/wishlist/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
//         }
//       })
//       .catch((error) => {
//         console.error('Error removing item from wishlist:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-50">
//       <h1 className="text-center text-2xl font-bold mb-8">My Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {wishlistItems.map((item) => (
//           <WishlistItem
//             key={item.id}
//             product={item}
//             handleRemove={handleRemove}
//             {...item}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishList;

// import React, { useEffect, useState } from 'react';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import axios from 'axios';

// const WishlistItem = ({
//   name,
//   price,
//   oldPrice,
//   stock_status,
//   short_description,
//   handleRemove,
//   product,
// }) => {
//   const isOutOfStock = stock_status === "Out Of Stock";
//   const imageUrl = process.env.REACT_APP_API_URL + product.image;

//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 relative w-full sm:w-[220px] h-[350px] bg-white flex flex-col">
//       <button
//         onClick={() => handleRemove(product.id)}
//         className="absolute top-2 right-2 flex justify-center items-center w-8 h-8 bg-white text-gray-600 rounded-full transition duration-150 ease-in-out hover:text-red-500 z-10"
//       >
//         <RiDeleteBin6Line className="w-5 h-5" />
//       </button>

//       <div className="relative flex justify-center p-4 flex-shrink-0">
//         <div className={`${isOutOfStock ? 'blur-[2px] brightness-75' : ''}`}>
//           <img
//             className="w-[140px] h-[160px] object-contain"
//             src={imageUrl}
//             alt={name}
//             onError={(e) => {
//               e.target.onerror = null;
//             }}
//           />
//         </div>
//         {isOutOfStock && (
//           <div className="absolute inset-0 flex items-center justify-center z-10">
//             <span className="bg-red-500 text-justify-center text-white px-4 py-1 text-sm font-semibold whitespace-nowrap">
//               PRODUCT IS OUT OF STOCK
//             </span>
//           </div>
//         )}
//       </div>

//       <div className={`px-4 py-2 flex-grow ${isOutOfStock ? 'opacity-75' : ''}`}>
//         <div className="flex justify-center mb-1">
//           <span className="text-sm text-yellow-500">★ ★ ★ ★ ☆</span>
//         </div>

//         <div className="font-medium text-sm mb-1 text-center line-clamp-2">{name}</div>
//         <div className="text-xs text-gray-600 mb-1 text-center line-clamp-2">{short_description}</div>

//         <div className="flex flex-col items-center space-y-1">
//           <div className="flex items-center gap-2">
//             <p className="text-gray-900 font-semibold text-sm">₹{price}.00</p>
//             <p className="text-xs text-gray-400 line-through">₹{oldPrice || (Number(price) + 100)}.00</p>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 pb-4 mt-auto">
//         <Link to="/cart">
//           <button
//             className={`w-full text-white font-medium py-2 px-4 rounded text-sm
//               ${isOutOfStock
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-green-600 hover:bg-green-700'}`}
//             disabled={isOutOfStock}
//           >
//             {isOutOfStock ? 'Out of Stock' : 'Add to Bag'}
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const WishList = () => {
//   const [wishlistItems, setWishlistItems] = useState([]);
//   const accessToken = useSelector(selectAccessToken);

//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/order/wishlist/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         const itemsWithOldPrices = response.data?.data?.wishlists.map(item => ({
//           ...item,
//           oldPrice: Number(item.price) + 100
//         }));
//         setWishlistItems(itemsWithOldPrices);
//       })
//       .catch((error) => {
//         console.error('Error fetching wishlist items:', error);
//       });
//   }, [accessToken]);

//   const handleRemove = (id) => {
//     axios.delete(`${process.env.REACT_APP_API_URL}/order/wishlist/${id}/`, {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
//         }
//       })
//       .catch((error) => {
//         console.error('Error removing item from wishlist:', error);
//       });
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-50">
//       <h1 className="text-center text-2xl font-bold mb-8">My Wishlist</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {wishlistItems.map((item) => (
//           <WishlistItem
//             key={item.id}
//             product={item}
//             handleRemove={handleRemove}
//             {...item}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WishList;

import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccessToken } from "../../../redux/User/verificationSlice";
import axios from "axios";

const WishlistItem = ({
  name,
  price,
  oldPrice,
  stock_status,
  handleRemove,
  product,
}) => {
  const isOutOfStock = stock_status === "Out Of Stock";
  const imageUrl = process.env.REACT_APP_API_URL + product.image;

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-2 relative w-full sm:w-[220px] h-[350px] bg-white flex flex-col">
      <button
        onClick={() => handleRemove(product.id)}
        className="absolute top-2 right-2 flex justify-center items-center w-8 h-8 bg-white text-gray-600 rounded-full transition duration-150 ease-in-out hover:text-red-500 z-10"
      >
        <RiDeleteBin6Line className="w-5 h-5" />
      </button>

      <div className="relative flex justify-center p-4 flex-shrink-0">
        <div className="relative w-full">
          <img
            className={`w-[140px] h-[160px] object-contain mx-auto ${isOutOfStock ? "opacity-40" : ""}`}
            src={imageUrl}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
          {isOutOfStock && (
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
              <div className="w-full text-center mt-32">
                <span className="inline-block text-red-600 text-xs font-bold px-4 py-2 ">
                  PRODUCT IS OUT OF STOCK
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-4 py-2 flex-grow">
        <div className="flex justify-center mb-1">
          <span className="text-md text-yellow-500">★ ★ ★ ★ ☆</span>
        </div>

        <div className="font-medium text-md mb-1 text-center line-clamp-2">
          {name}
        </div>
       

        <div className="flex flex-col items-center space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-gray-900 font-semibold text-md">₹{price}.00</p>
            <p className="text-md text-gray-400 line-through">
              ₹{oldPrice }
            </p>
          </div>
        </div>
      </div>

      <div className="mb-0 mt-auto">
        <Link to="/cart">
          <button
            className={`w-full text-white font-medium py-2 px-4 rounded text-sm
              ${
                isOutOfStock
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-bio-green hover:bg-bio-green-100"
              }`}
            disabled={isOutOfStock}
          >
            {isOutOfStock ? "Add to Bag" : "Add to Bag"}
          </button>
        </Link>
      </div>
    </div>
  );
};

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/wishlist/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const itemsWithOldPrices = response.data?.data?.wishlists.map(
          (item) => ({
            ...item,
            oldPrice: Number(item.price) + 100,
          })
        );
        setWishlistItems(itemsWithOldPrices);
      })
      .catch((error) => {
        console.error("Error fetching wishlist items:", error);
      });
  }, [accessToken]);

  const handleRemove = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/order/wishlist/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setWishlistItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
          );
        }
      })
      .catch((error) => {
        console.error("Error removing item from wishlist:", error);
      });
  };

  

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <h1 className="text-center text-2xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {wishlistItems.map((item) => (
          <WishlistItem
            key={item.id}
            product={item}
            handleRemove={handleRemove}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;
