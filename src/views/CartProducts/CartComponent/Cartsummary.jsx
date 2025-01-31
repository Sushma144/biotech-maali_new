// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios"; // Make sure to install axios
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import { useNavigate } from "react-router-dom"
// import { replace } from "formik";
// const CartSummary = ({ totalItems, totalAmount, discount, packagingFee, products }) => {
//   const accessToken = useSelector(selectAccessToken);
//   const navigate = useNavigate();

//   // Prepare the cart data to be sent
//   const prepareCartData = () => {
//     return products.map((product) => ({
//       prod_id: product.product_id, // Assuming each product has an id field
//       quantity: product.quantity,
//     }));
//   };

//   // Function to handle the order placement
//   const handlePlaceOrder = async () => {
//     const cartData = prepareCartData();
//     console.log(cartData, '================cart data');

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/order/orderItem/`,
//         // Sending the cartData in the body of the POST request
//         cartData, 
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data); // Handle success response here (e.g., show confirmation)

//       if (response.status === 201) {
//         // Navigate to the checkout page after successful creation
//            // Navigate to the checkout page with data passed in state
//            navigate("/checkout", { state: { resource: response.data.data } });
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//       // Handle error (e.g., show error message)
//     }
//   };

//   return (
//     <div className="p-4 bg-white text-gray-500">
//       <h2 className="border-b pb-2 text-xl font-semibold mb-4">Price Details</h2>
//       <div className="space-y-2">
//         <div className="flex justify-between">
//           <span>Price ({totalItems} items)</span>
//           <span>₹{totalAmount}</span>
//         </div>
//         <div className="flex justify-between text-green-600">
//           <span>Discount</span>
//           <span>-₹{discount}</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Delivery Charges</span>
//           <span className="text-green-600">Free</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Packaging Fee</span>
//           <span>₹{packagingFee}</span>
//         </div>
//         <div className="border-y-2 border-dashed py-2 flex justify-between font-bold">
//           <span>Total Amount</span>
//           <span>₹{totalAmount - discount + packagingFee}</span>
//         </div>
//         <p className="text-green-600 mt-2">
//           You will save ₹{discount} on this order
//         </p>
//       </div>
//       <div className="flex justify-end">
//         <button
//           onClick={handlePlaceOrder} // Call the handlePlaceOrder function on button click
//           className="w-full md:full bg-lime-500 text-white py-2 m-4 rounded-sm hover:bg-green-600"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartSummary;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectAccessToken } from "../../../redux/User/verificationSlice";
import { useNavigate } from "react-router-dom";

const CartSummary = ({
  totalItems,
  totalAmount,
  discount,
  packagingFee,
  products,
}) => {
  const accessToken = useSelector(selectAccessToken);
  const navigate = useNavigate();

  // Prepare the cart data to be sent
  const prepareCartData = () => {
    return products.map((product) => ({
      prod_id: product.product_id,
      quantity: product.quantity,
    }));
  };

  // Function to handle the order placement
  const handlePlaceOrder = async () => {
    const cartData = prepareCartData();
    // console.log(cartData, "================cart data");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/order/orderItem/`,
        cartData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      if (response.status === 201) {
        navigate("/checkout", { state: { resource: response.data.data } });
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (totalItems === 0) {
    return (
      <div className="p-4 bg-white text-gray-500 text-center">
       
      </div>
    );
  }

  return (
    <div className="p-4 bg-white text-gray-500">
      <h2 className="border-b pb-2 text-xl font-semibold mb-4">Price Details</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Price ({totalItems} items)</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Discount</span>
          <span>-₹{discount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between">
          <span>Packaging Fee</span>
          <span>₹{packagingFee}</span>
        </div>
        <div className="border-y-2 border-dashed py-2 flex justify-between font-bold">
          <span>Total Amount</span>
          <span>₹{totalAmount - discount + packagingFee}</span>
        </div>
        <p className="text-green-600 mt-2">
          You will save ₹{discount} on this order
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePlaceOrder}
          className="w-full md:full bg-lime-500 text-white py-2 m-4 rounded-sm hover:bg-green-600"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
