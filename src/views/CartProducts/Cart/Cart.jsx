// import React, { useState } from "react";
// import ProductCard from "../../../Components/CartComponent/ProductCard";
// import CartSummary from "../../../Components/CartComponent/Cartsummary";

// const Cart = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Peace Lily Plant",
//       description: "Small / GroPot / Ivory",
//       price: 499,
//       oldPrice: 599,
//       inStock: false,
//       image: "https://your-plant-image-url.com",
//       quantity: 1, // Adding quantity here
//     },
//     {
//       id: 2,
//       name: "Peace Lily Plant",
//       description: "Small / GroPot / Ivory",
//       price: 499,
//       oldPrice: 599,
//       inStock: true,
//       image: "https://your-plant-image-url.com",
//       quantity: 1, // Adding quantity here
//     },
//     {
//       id: 3,
//       name: "Peace Lily Plant",
//       description: "Small / GroPot / Ivory",
//       price: 499,
//       oldPrice: 599,
//       inStock: false,
//       image: "https://your-plant-image-url.com",
//       quantity: 1, // Adding quantity here
//     },
//     {
//       id: 4,
//       name: "Peace Lily Plant",
//       description: "Small / GroPot / Ivory",
//       price: 499,
//       oldPrice: 599,
//       inStock: true,
//       image: "https://your-plant-image-url.com",
//       quantity: 1, // Adding quantity here
//     },
//     // Add other products similarly...
//   ]);

//   const handleRemove = (id) => {
//     setProducts(products.filter((product) => product.id !== id));
//   };

//   const handleQuantityChange = (id, newQuantity) => {
//     setProducts(
//       products.map((product) =>
//         product.id === id ? { ...product, quantity: newQuantity } : product
//       )
//     );
//   };

//   const totalItems = products.reduce(
//     (acc, product) => acc + product.quantity,
//     0
//   );
//   const totalAmount = products.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );
//   const discount = 266;
//   const packagingFee = 198;

//   return (
//     <div className="flex justify-center p-8 bg-gray-50 overflow-y-auto">
//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 3px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background-color: rgba(0, 0, 0, 0.2);
//             border-radius: 10px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background-color: rgba(0, 0, 0, 0.3);
//           }
//         `}
//       </style>
//       <div className="w-1/2 space-y-4 bg-white p-4">
//         <div
//           className="overflow-y-auto custom-scrollbar"
//           style={{ maxHeight: "600px" }}
//         >
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               handleRemove={handleRemove}
//               handleQuantityChange={handleQuantityChange} // Pass the handler
//             />
//           ))}
//         </div>
//         <div className="flex justify-end">
//           <button className="w-1/4 bg-lime-500 text-white py-2 m-4 rounded-sm hover:bg-green-600">
//             Place Order
//           </button>
//         </div>
//       </div>
//       <div className="w-1/6 ml-10">
//         <CartSummary
//           totalItems={totalItems}
//           totalAmount={totalAmount}
//           discount={discount}
//           packagingFee={packagingFee}
//         />
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect} from "react";
// import ProductCard from "../CartComponent/ProductCard";
// import CartSummary from "../CartComponent/Cartsummary";
// import axios from 'axios';

// import { useDispatch, useSelector } from 'react-redux';
// import {selectAccessToken } from '../../../redux/User/verificationSlice';
// const Cart = () => {
  
//   const accessToken = useSelector(selectAccessToken);
//   const [error, setError] = useState(null);
//   const [products, setProducts] = useState([]);


//   useEffect(() => {
//     // Fetch cart items from the API
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/order/cart/`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//           },
//         });
//         if (response.data && response.data.message === 'success') {
//           setProducts(response.data.data.cart);
//         }
//       } catch (err) {
//         setError('Failed to fetch cart items. Please try again later.');
//       }
//     };

//     fetchCartItems();
//   }, []);

// console.log(error,'========error')

//   // const handleRemove = (id) => {
//   //   setProducts(products.filter((product) => product.id !== id));
//   // };

//   const handleRemove = async (id) => {
//     try {
//       // Call the DELETE API
//       await axios.delete(`${process.env.REACT_APP_API_URL}/order/cart/${id}/`, {
        
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//       });
      
//       // Update the UI state by removing the product
//       setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      
//       console.log(`Product with id ${id} removed successfully.`);
//     } catch (error) {
//       console.error(`Failed to remove product with id ${id}:`, error.message);
//       alert('An error occurred while trying to remove the product. Please try again.');
//     }
//   };
//   const handleQuantityChange = (id, newQuantity) => {
//     setProducts(
//       products.map((product) =>
//         product.id === id ? { ...product, quantity: newQuantity } : product
//       )
//     );
//   };

//   const totalItems = products.reduce(
//     (acc, product) => acc + product.quantity,
//     0
//   );
//   const totalAmount = products.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );
//   const discount = 266;
//   const packagingFee = 198;

//   return (
//     <div className="flex flex-col md:flex-row justify-center md:p-8   bg-gray-50 overflow-y-auto">
//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 3px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background-color: rgba(0, 0, 0, 0.2);
//             border-radius: 10px;
//           }
            
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background-color: rgba(0, 0, 0, 0.3);
//           }
//         `}
//       </style>
//       <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 bg-white p-0">
//         <div
//           className="overflow-y-auto custom-scrollbar"
//           style={{ maxHeight: "600px" }}
//         >
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               handleRemove={handleRemove}
//               handleQuantityChange={handleQuantityChange}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="w-full md:w-1/5 mt-4 md:mt-0 md:ml-10">
//         <CartSummary
//           totalItems={totalItems}
//           totalAmount={totalAmount}
//           discount={discount}
//           packagingFee={packagingFee}
//         />
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useState, useEffect } from "react";
// import ProductCard from "../CartComponent/ProductCard";
// import CartSummary from "../CartComponent/Cartsummary";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import { enqueueSnackbar } from "notistack";

// const Cart = () => {
//   const accessToken = useSelector(selectAccessToken);
//   const [error, setError] = useState(null);
//   const [products, setProducts] = useState([]);

//   // Fetch cart items
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/order/cart/`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (response.data?.message === "success") {
//           setProducts(response.data.data.cart);
//         }
//       } catch (err) {
//         setError("Failed to fetch cart items. Please try again later.");
//         console.error("Error fetching cart items:", err.message);
//       }
//     };

//     fetchCartItems();
//   }, [accessToken]);


//   // Handle updating product quantity in cart
//   const handleUpdateQuantity = async (cartId, newQuantity) => {
//     try {
//       console.log("Cart ID:", cartId, "New Quantity:", newQuantity);
//       const response = await axios.patch(
//         `${process.env.REACT_APP_API_URL}/order/cart/`,
//         { cart_id: cartId, quantity: newQuantity },
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.data?.message === "success") {
//         setProducts((prev) =>
//           prev.map((product) =>
//             product.id === cartId ? { ...product, quantity: newQuantity } : product
//           )
//         );
//       }
//     } catch (err) {
//       console.error("Error updating cart quantity:", err.message);
//       // alert("Failed to update product quantity.");
//       enqueueSnackbar("Failed to update product quantity!", { variant: "error" });
//     }
//   };

//   // Handle removing products from cart
//   const handleRemove = async (id) => {
//     try {
//       const response =
//       await axios.delete(`${process.env.REACT_APP_API_URL}/order/cart/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           "Content-Type": "application/json",
//         },
//       });
       
//      if(response.status === 200){
//       enqueueSnackbar("Product removed from cart!", { variant: "success" });  
//      }
//     setProducts((prev) => prev.filter((product) => product.id !== id));
//     } catch (err) {
//       console.error("Error removing product from cart:", err.message);
//       // alert("Failed to remove product from cart.");
//       enqueueSnackbar("Failed to remove product from cart!", { variant: "error" });
//     }
//   };

//   // Calculate total items and amount
//   const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);
//   const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

//   const discount = 266;
//   const packagingFee = 198;

//   return (
//     <div className="flex flex-col md:flex-row justify-center md:p-8 bg-gray-50 overflow-y-auto">
//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             width: 3px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: transparent;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background-color: rgba(0, 0, 0, 0.2);
//             border-radius: 10px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background-color: rgba(0, 0, 0, 0.3);
//           }
//         `}
//       </style>
//       <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 bg-white p-0">
//         <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: "600px" }}>
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               handleRemove={handleRemove}
//               handleQuantityChange={handleUpdateQuantity} // Pass the parent handler
//               // handleQuantityChange={(newQuantity) =>
//               //   handleUpdateQuantity(product.id, newQuantity)
//               // }
//             />
//           ))}
//         </div>
//       </div>

//       <div className="w-full md:w-1/5 mt-4 md:mt-0 md:ml-10">
//         <CartSummary
//           totalItems={totalItems}
//           totalAmount={totalAmount}
//           discount={discount}
//           packagingFee={packagingFee}
//           products={products}
//         />
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useState, useEffect } from "react";
import ProductCard from "../CartComponent/ProductCard";
import CartSummary from "../CartComponent/Cartsummary";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectAccessToken } from "../../../redux/User/verificationSlice";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const accessToken = useSelector(selectAccessToken);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/order/cart/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.data?.message === "success") {
          setProducts(response.data.data.cart);
        }
      } catch (err) {
        setError("Failed to fetch cart items. Please try again later.");
        console.error("Error fetching cart items:", err.message);
      }
    };

    fetchCartItems();
  }, [accessToken]);

  // Handle updating product quantity in cart
  const handleUpdateQuantity = async (cartId, newQuantity) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_API_URL}/order/cart/`,
        { cart_id: cartId, quantity: newQuantity },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data?.message === "success") {
        setProducts((prev) =>
          prev.map((product) =>
            product.id === cartId ? { ...product, quantity: newQuantity } : product
          )
        );
      }
    } catch (err) {
      enqueueSnackbar("Failed to update product quantity!", { variant: "error" });
    }
  };

  // Handle removing products from cart
  const handleRemove = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/order/cart/${id}/`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        enqueueSnackbar("Product removed from cart!", { variant: "success" });
      }
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (err) {
      enqueueSnackbar("Failed to remove product from cart!", { variant: "error" });
    }
  };

  // Calculate total items and amount
  const totalItems = products.reduce((acc, product) => acc + product.quantity, 0);
  const totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const discount = 266;
  const packagingFee = 198;

  return (
    <div className="flex flex-col md:flex-row justify-center md:p-8 bg-gray-50 overflow-y-auto">
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      {products.length > 0 ? (
        <>
          <div className="w-full md:w-2/3 lg:w-1/2 space-y-4 bg-white p-0">
            <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: "600px" }}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleRemove={handleRemove}
                  handleQuantityChange={handleUpdateQuantity}
                />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/5 mt-4 md:mt-0 md:ml-10">
            <CartSummary
              totalItems={totalItems}
              totalAmount={totalAmount}
              discount={discount}
              packagingFee={packagingFee}
              products={products}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
          <button
            className="bg-lime-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate("/shop")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
