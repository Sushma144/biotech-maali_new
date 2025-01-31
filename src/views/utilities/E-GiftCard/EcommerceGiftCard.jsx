// import React, { useState } from 'react';
// import GiftCardVoucher from "../../../Assets/Gift/GiftCardVoucher.jpg"

// const EcommerceGiftCard = () => {
//   const [selectedAmount, setSelectedAmount] = useState(500);

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div>
//           <img
//             src={GiftCardVoucher}// Replace with actual image
//             alt="Gift Card"
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Product Details */}
//         <div>
//           <h1 className="text-2xl font-semibold">Biotech Maali E-Gift Card</h1>
//           <p className="text-xl text-green-600 font-bold mt-2">₹{selectedAmount}.00</p>

//           <div className="mt-4">
//             <h3 className="font-semibold text-lg mb-2">Gift Cards:</h3>
//             <div className="flex flex-wrap gap-2">
//               {[500, 1000, 2000, 3000, 4000, 5000].map((amount) => (
//                 <button
//                   key={amount}
//                   className={`px-4 py-2 border rounded ${
//                     selectedAmount === amount
//                       ? 'bg-gray-900 text-white'
//                       : 'bg-gray-100 text-gray-800'
//                   }`}
//                   onClick={() => setSelectedAmount(amount)}
//                 >
//                   ₹{amount}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="mt-6 space-y-4">
//             <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
//               Add to Cart
//             </button>
//             <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 transition">
//               Buy It Now
//             </button>
//           </div>

//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Enter Pin Code"
//               className="border p-2 w-2/3 rounded-l"
//             />
//             <button className="bg-green-600 text-white px-6 py-2 rounded-r">
//               Check
//             </button>
//           </div>

//           <div className="mt-4 text-gray-600 text-sm flex items-center">
//             <span>Share:</span>
//             <a href="#" className="text-green-500 ml-2">🔗</a>
//           </div>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow">
//         <h2 className="text-xl font-semibold text-gray-800">How it works</h2>
//         <ul className="list-decimal list-inside mt-4 text-gray-700 space-y-2">
//           <li>Select the gift card value that suits you.</li>
//           <li>Add to cart and complete your order.</li>
//           <li>You will receive the e-gift card in your registered email.</li>
//           <li>Forward the gift card to the recipient.</li>
//           <li>The recipient can enter the code in the email at checkout to redeem.</li>
//           <li>The code cannot be shared with others.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EcommerceGiftCard;

import React, { useState } from "react";
import GiftCardVoucher from "../../../Assets/Gift/GiftCardVoucher.jpg";
import { Link } from "react-router-dom";
const EcommerceGiftCard = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Image Section */}
          <div className="h-full">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              {/* Using a placeholder since actual image path may vary */}
              <img
                src={GiftCardVoucher}
                alt="Gift Voucher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Details Section */}
          <div className="flex flex-col h-full">
            <h1 className="text-2xl font-bold text-gray-900">
              Biotech Maali E-Gift Card
            </h1>
            <div className="mt-2">
              <p className="text-xl font-semibold text-gray-900">
                ₹{selectedAmount}.00
              </p>
              <div className="flex items-center mt-2">
                {[...Array(3)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Gift Card Values */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Gift Cards:</p>
              <div className="grid grid-cols-3 gap-6">
                {[500, 1000, 2000, 3000, 4000, 5000].map((amount) => (
                   <button
                   key={amount}
                   onClick={() => setSelectedAmount(amount)}
                   className="px-4 py-2 text-sm rounded-md border text-black border-gray-300 hover:border-bio-green"
                 >
                   ₹{amount}
                 </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 space-y-3">
              <button className="w-full bg-bio-green hover:bg-bio-green text-white py-3 px-4 rounded-md transition">
                Add To Cart
              </button>
              <button className="w-full bg-bio-green hover:bg-bio-green text-white py-3 px-4 rounded-md transition">
                Buy It Now
              </button>
            </div>

            {/* Pin Code Check */}
            <div className="mt-10 flex">
              <input
                type="text"
                placeholder="Enter Pin Code"
                className="flex-1 rounded-l-md border-gray-300 border p-2 focus:ring-2 focus:ring-gray-200 focus:outline-none"
              />
              <button className="bg-bio-green hover:bg-bio-green text-white px-6 py-2 rounded-r-md transition">
                Check
              </button>
            </div>

            {/* Share Section */}
            <div className="mt-8 text-gray-600 text-sm flex items-center">
             <span>Share:</span>
             <Link to="#"
              className="text-bio-green ml-2">
                🔗
                </Link>
           </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-12 p-6 md:p-8 rounded-lg border border-gray-200">
 
  
  <h2 className="text-xl font-semibold text-gray-900 text-center">How it works</h2>
  <p className="mt-4 text-gray-600 leading-relaxed">
    Are you confused about what to give your friends and family? We have the perfect gift hamper for you – 
    the Biotech Maali Gift Card. Gift your loved ones the Biotech Maali gift card and let them choose their 
    favorite plants, planters, and plant care essentials for their gardening journey. Simply select the 
    value you prefer and watch your gift bring beauty to lives and homes.
  </p>
  
  <ol className="mt-4 space-y-2 text-gray-600 list-decimal list-inside">
    <li>Add your selected gift card to the cart.</li>
    <li>Check out and complete your order.</li>
    <li>After a successful transaction, you will receive the e-gift card in your registered email.</li>
    <li>Forward the gift card to the recipient.</li>
    <li>The recipient can enter the voucher code in the email at checkout to redeem the gift card.</li>
    <li>Do not share the voucher code with anyone other than the intended recipient.</li>
  </ol>
  
  
</div>


      </div>
    </div>
  );
};

export default EcommerceGiftCard;
