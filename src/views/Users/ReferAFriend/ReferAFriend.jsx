// import React from 'react';
// import { FiShare2 } from 'react-icons/fi';

// function ReferAFriend() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md p-8 w-96">
//         {/* Header */}
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Refer a Friend</h2>

//         {/* Illustration */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="https://www.link-to-image.com/sample-image.png" // Replace with the actual image link
//             alt="Refer a Friend"
//             className="w-48 h-48"
//           />
//         </div>

//         {/* Referral Link */}
//         <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 mb-4">
//           <p className="text-sm text-gray-500">biotechmail.com/?refer=MALIK00123</p>
//           <button className="text-green-600 text-lg">
//             <FiShare2 />
//           </button>
//         </div>

//         {/* Share Button */}
//         <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center">
//           <FiShare2 className="mr-2" /> SHARE
//         </button>

//         {/* Total Referrals */}
//         <div className="mt-4 text-sm text-right">
//           <span className="text-gray-600">Total Referrals: </span>
//           <span className="text-green-500 font-semibold">0</span>
//         </div>
//       </div>

//       {/* Steps Section */}
//       <div className="mt-8 w-96">
//         <h3 className="text-lg font-bold mb-4">How do I Refer a Friend?</h3>
//         <ol className="list-decimal ml-5 text-gray-600">
//           <li>Go to BiotechMail.com and select the items you want to purchase...</li>
//           <li>Select the 'Pay By Gift Card' option.</li>
//           <li>Enter your 16-digit gift card number.</li>
//           <li>If the gift card value doesn’t cover your order...</li>
//           <li>Funds will be deducted from your Flipkart Gift Card...</li>
//         </ol>
//       </div>

//       {/* Card Expiry FAQ */}
//       <div className="mt-8 w-96">
//         <h3 className="text-lg font-bold mb-2">Does my Biotech Mail Card expire?</h3>
//         <p className="text-gray-600">
//           All Biotech Mail Cards expire 1 year from the date of their creation.
//         </p>
//       </div>

//       {/* Terms & Conditions */}
//       <div className="mt-8 w-96">
//         <h3 className="text-lg font-bold mb-4">Terms & Conditions</h3>
//         <ol className="list-decimal ml-5 text-gray-600">
//           <li>Biotech Mail Cards ("GSCs" or "Gift Cards") are issued by...</li>
//           <li>The GSCs can be redeemed on BiotechMail.com or its mobile apps...</li>
//           <li>Gift Cards can only be applied when selecting the payment mode as Gift Card.</li>
//           <li>GSCs cannot be used to purchase certain items...</li>
//           <li>In case of any balance credit, the balance must be paid via credit card...</li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default ReferAFriend;

// import React from 'react';
// import { FiShare2 } from 'react-icons/fi';
// import Refer from '../../../assests/images/ReferAFriend.png';

// function ReferAFriend() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white rounded-lg shadow-md p-8 w-[950px] h-[1763px]">
//         {/* Header */}
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Refer a Friend</h2>

//         {/* Illustration */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={Refer} // Replace with the actual image link
//             alt="Refer a Friend"
//             className="w-48 h-48"
//           />
//         </div>

//         {/* Referral Link */}
//         <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg border border-gray-300 mb-4">
//           <p className="text-sm text-gray-500">biotechmail.com/?refer=MALIK00123</p>
//           <button className="text-green-600 text-lg">
//             <FiShare2 />
//           </button>
//         </div>

//         {/* Share Button */}
//         <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg flex justify-center items-center">
//           <FiShare2 className="mr-2" /> SHARE
//         </button>

//         {/* Total Referrals */}
//         <div className="mt-4 text-sm text-right">
//           <span className="text-gray-600">Total Referrals: </span>
//           <span className="text-green-500 font-semibold">0</span>
//         </div>

//         {/* Steps Section */}
//         <div className="bg-white rounded-lg shadow-md p-8 w-[950px]">
//         {/* How do I Refer a Friend Section */}
//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">How do I Refer a Friend?</h3>
//           <ol className="list-decimal pl-5 text-gray-600 space-y-2">
//             <li>Go to BiotechMaali.com and select the items you want to purchase. When you are ready to checkout, click 'Proceed To Pay'.</li>
//             <li>Select the 'Pay By Gift Card' option.</li>
//             <li>Enter your 16-digit gift card number.</li>
//             <li>If the Gift Card value doesn’t cover your Order total, you will be prompted to select an additional payment method.</li>
//             <li>NOTE: Funds will be deducted from your Flipkart Gift Card when you place your order. In case of any adjustment or cancellation at a later stage, we will credit the refund back to your Gift Card.</li>
//           </ol>
//         </div>

//         {/* Card Expiry FAQ */}
//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-2">Does my Biotech Maali Card expire?</h3>
//           <p className="text-gray-600">All Biotech Maali Cards expire 1 year from the date of their creation.</p>
//         </div>

//         {/* Terms & Conditions */}
//         <div className="mb-8">
//           <h3 className="text-lg font-bold mb-4">Terms & Conditions</h3>
//           <ol className="list-decimal pl-5 text-gray-600 space-y-2">
//             <li>
//               Biotech Maali Cards ("GSCs" or "Gift Cards") are issued by Qwikcilver Solutions Pvt. Ltd. ("Qwikcilver") which is a private limited company incorporated under the laws of India, and is authorized by the Reserve Bank of India ("RBI") to issue such Gift Cards.
//             </li>
//             <li>
//               The Gift Cards can be redeemed online against Sellers listed on www.BiotechMaali.com or Biotech Maali Mobile App or Biotech Maali m-site ("Platform") only.
//             </li>
//             <li>
//               Gift Cards can be purchased on www.BiotechMaali.com or Biotech Maali Mobile App using the following payment modes only - Credit Card, Debit Card and Net Banking.
//             </li>
//             <li>Gift Cards can be redeemed by selecting the payment mode as Gift Card.</li>
//             <li>
//               Gift Cards cannot be used to purchase other Biotech Maali Gift Cards or Biotech Maali First subscriptions.
//             </li>
//             <li>Gift Cards cannot be used to make bulk purchases on the Platform.</li>
//             <li>
//               If the order value exceeds the Gift Card amount, the balance must be paid by Credit Card/Debit Card/Internet Banking. The Cash on Delivery payment option cannot be used to pay the balance amount.
//             </li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ReferAFriend;

import React from "react";
import { FiShare2 } from "react-icons/fi";
import Refer from "../../../Assets/ReferAFriend.png"; // Ensure the image path is correct

function ReferAFriend() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  px-8">
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-md p-8 w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Refer a Friend
          </h2>
          <div className="text-sm text-right border border-green-500 p-2 rounded-md">
            <span className="text-green-600">Total Referrals: </span>
            <span className="text-green-500 font-semibold">0</span>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src={Refer} // Ensure you have the correct path to the image
            alt="Refer a Friend"
            className="w-48 h-48"
          />
        </div>

        {/* Referral Link */}
        <div className="flex justify-between items-center bg-gray-100  rounded-lg border  mb-1 w-full max-w-[754px] mx-auto h-[60px]">
          {/* <p  className="text-sm p-4 text-gray-500 truncate flex-grow">{`biotechmaali.com/?refer=MALIK00123`}</p> */}
          <input
            type="text"
            className="text-sm p-4 focus:outline-none text-gray-500 truncate flex-grow"
            placeholder="referal code"
          />
          <button className="w-[174px] h-[60px] bg-green-500 text-white font-semibold rounded-tr-lg rounded-br-lg flex justify-center items-center">
            <FiShare2 className="mr-2" /> SHARE
          </button>
        </div>

        {/* Steps Section */}
        <div className="mt-8">
          {/* How do I Refer a Friend Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">How do I Refer a Friend?</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>
                Go to BiotechMaali.com and select the items you want to
                purchase. When you are ready to checkout, click 'Proceed To
                Pay'.
              </li>
              <li>Select the 'Pay By Gift Card' option.</li>
              <li>Enter your 16-digit gift card number.</li>
              <li>
                If the Gift Card value doesn’t cover your Order total, you will
                be prompted to select an additional payment method.
              </li>
              <li>
                NOTE: Funds will be deducted from your Flipkart Gift Card when
                you place your order. In case of any adjustment or cancellation
                at a later stage, we will credit the refund back to your Gift
                Card.
              </li>
            </ol>
          </div>

          {/* Card Expiry FAQ */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-2">
              Does my Biotech Maali Card expire?
            </h3>
            <p className="text-gray-600">
              All Biotech Maali Cards expire 1 year from the date of their
              creation.
            </p>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Terms & Conditions</h3>
            <ol className="list-decimal pl-5 text-gray-600 space-y-2">
              <li>
                Biotech Maali Cards ("GSCs" or "Gift Cards") are issued by
                Qwikcilver Solutions Pvt. Ltd. ("Qwikcilver"), which is a
                private limited company incorporated under the laws of India,
                and is authorized by the Reserve Bank of India ("RBI") to issue
                such Gift Cards.
              </li>
              <li>
                The Gift Cards can be redeemed online against Sellers listed on
                www.BiotechMaali.com or Biotech Maali Mobile App or Biotech
                Maali m-site ("Platform") only.
              </li>
              <li>
                Gift Cards can be purchased on www.BiotechMaali.com or Biotech
                Maali Mobile App using the following payment modes only - Credit
                Card, Debit Card and Net Banking.
              </li>
              <li>
                Gift Cards can be redeemed by selecting the payment mode as Gift
                Card.
              </li>
              <li>
                Gift Cards cannot be used to purchase other Biotech Maali Gift
                Cards or Biotech Maali First subscriptions.
              </li>
              <li>
                Gift Cards cannot be used to make bulk purchases on the
                Platform.
              </li>
              <li>
                If the order value exceeds the Gift Card amount, the balance
                must be paid by Credit Card/Debit Card/Internet Banking. The
                Cash on Delivery payment option cannot be used to pay the
                balance amount.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReferAFriend;
