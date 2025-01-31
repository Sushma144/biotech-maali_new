// import React from "react";
// import { IconExclamationCircle } from "@tabler/icons-react";
// const Wallet = () => {
//   return (
//     <div className="flex justify-end px-6 bg-gray-100 min-h-screen">
//       <div className="w-full h-[2100px] bg-white shadow-lg p-6   rounded-lg">
//         {/* Total Wallet Balance */}
//         <h2 className="text-lg font-semibold mb-2">Biotech Maali Wallet</h2>
//         <div className="bg-gray-100 p-4 rounded-lg mb-6">
//           <div className="flex flex-col justify-between items-center space-y-5">
//             <span className="text-gray-700 font-semibold">
//               Total Wallet Balance
//             </span>
//             <span className="text-2xl font-bold text-green-600">₹0</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <div></div>{" "}
//             {/* This div acts as a placeholder to fill the left side */}
//             <a
//               href="#"
//               className="text-md font-semibold text-lime-400 self-end"
//             >
//               Wallet Transaction History
//             </a>
//           </div>
//         </div>
//         {/* Top Up Wallet */}
//         <div className="mb-6">
//           <h2 className="text-lg font-semibold mb-2">Top Up Wallet</h2>
//           <div className="flex space-x-2 mb-4">
//             <input
//               type="text"
//               placeholder="₹1000"
//               className="w-full p-3 border font-semibold rounded-lg text-green-600 focus:outline-none focus:border-green-500"
//             />
//           </div>
//           <div className="flex space-x-4">
//             {["₹500", "₹1000", "₹2000"].map((amount,idx) => (
//               <button
//                 key={idx}
//                 className="w-1/8 border  border-md border-gray-300 font-semibold text-center text-green-600 py-2 px-2 rounded-md hover:border-green-500 active:bg-border-green-500"
//               >
//                 {amount}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div>
//           <button className="w-full mb-6 bg-lime-600 text-white px-4 py-4 rounded-md hover:bg-green-700">
//             Proceed To Top-Up
//           </button>
//         </div>
//         {/* Rewards and Credits */}
//         <div className="mb-6">
//           <div className="bg-transparent border border-black-100 p-4 rounded-lg flex justify-between mb-2 items-center">
//             <div className="flex space-x-2 items-start">
//               <div className="flex flex-col">
//                 <span>Biotech Maali Rewards</span>
//                 <span className=" flex items-center">
//                   25% Utilization On Cart Value
//                 <IconExclamationCircle className="ml-1" />
//                 </span>
//               </div>
//             </div>
//             <span className="text-green-600 font-semibold">₹500</span>
//           </div>
//           <div className="bg-transparent border border-black-100 p-4 rounded-lg flex justify-between">
//             <div className="flex space-x-2 items-start">
//               <div className="flex flex-col">
//                 <span>Refund & Gift Credits</span>
//                 <span className="flex items-center">
//                   100% Utilization
//                   <IconExclamationCircle className="ml-1" />
//                 </span>
//               </div>
//             </div>
//             <span className="text-green-600 font-semibold">₹0</span>
//           </div>
//         </div>
//         {/* FAQs Section */}
//         <div className="mb-6 px-4 bg-transparent border border-black-100">
//           <h2 className="text-lg font-semibold mb-4">FAQs</h2>
//           {[
//             "What happens when I update my email address (or mobile number)?",
//             "What happens when I update my email address (or mobile number)?",
//             "What happens when I update my email address (or mobile number)?",
//             "What happens when I update my email address (or mobile number)?",
//           ].map((question, idx) => (
//             <details key={idx} className="mb-2">
//               <summary className="text-gray-700 py-2 cursor-pointer hover:text-gray-900">
//                 {question}
//               </summary>
//               <p className="pl-4 text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt.
//               </p>
//             </details>
//           ))}
//         </div>
//         {/* How to Use Section */}
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-2xl  text-left mb-6">
//             How to Pay with a Biotech Maali Card
//           </h1>
//           <ul className="list-decimal list-inside space-y-6">
//             <li>
//               Go to{" "}
//               <a
//                 href="https://biotechmaali.com"
//                 className="text-blue-500 hover:underline"
//               >
//                 biotechmaali.com
//               </a>{" "}
//               and select the items you want to purchase. When you're ready to
//               checkout, click "Proceed to Pay."
//             </li>
//             <li>Select the "Pay by Gift Card" option.</li>
//             <li>Enter your 16-digit gift card number.</li>
//             <li>
//               If the gift card value doesn't cover your order total, you'll be
//               prompted to select an additional payment method.
//             </li>
//             <li>
//               NOTE: Funds will be deducted from your Flipkart Gift Card when you
//               place your order. In case of any adjustment or cancellation at a
//               later stage, we will credit the refund back to your Gift Card.
//             </li>
//           </ul>
//           <h2 className=" text-left mt-6">
//             Does my Biotech Maali Card expire?
//           </h2>
//           <p className="text-left  mt-6">
//             All Biotech Maali Cards expire 1 year from the date of their
//             creation.
//           </p>
//           <h2 className="text-2xl  text-left mt-10">
//             Terms & Conditions
//           </h2>
//           <ul className="list-decimal list-inside space-y-6 py-8">
//             <li>
//               Biotech Maali Cards ("GCs" or "Gift Cards") are issued by
//               Qwikilver Solutions Pvt. Ltd. ("Qwikilver"), which is a private
//               limited company incorporated under the laws of India and is
//               authorized by the Reserve Bank of India (RBI) to issue such Gift
//               Cards.
//             </li>
//             <li>
//               The Gift Cards can be redeemed online against Sellers listed on  
//               www.BiotechMaali.com or the Biotech Maali Mobile App or Biotech
//               Maali me (Platform) only.
//             </li>
//             <li>
//               Gift Cards can be purchased only on www.BiotechMaali.com or
//               Biotech Maali Mobile App using the following payment modes: Credit
//               Card, Debit Card, and Net Banking.
//             </li>
//             <li>
//               Gift Cards can be redeemed by selecting the payment mode as Gift
//               Card.
//             </li>
//             <li>
//               Gift Cards cannot be used to purchase other Biotech Maali Gift
//               Cards or Biotech Maali First subscriptions.
//             </li>
//             <li>
//               Gift Cards cannot be used to make bulk purchases on the Platform.
//             </li>
//             <li>
//               If the order value exceeds the gift card amount, the balance must
//               be paid by Credit Card/Debit Card/Internet Banking.   The Cash on
//               Delivery payment option cannot be used to pay the balance amount.
//             </li>
//           </ul>
//         </div>
//          
//       </div>
//     </div>
//   );
// };

// export default Wallet;


import React from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <div className="flex justify-center sm:justify-start px-4 sm:px-6 bg-gray-100 min-h-screen w-full">
      <div className="w-full sm:w-full md:w-4/5 lg:w-full xl:w-full h-auto bg-white shadow-lg p-4 sm:p-6 rounded-lg">
        {/* Total Wallet Balance */}
        <h2 className="text-lg font-semibold mb-2">Biotech Maali Wallet</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <div className="flex flex-col justify-between items-center space-y-5">
            <span className="text-gray-700 font-semibold">Total Wallet Balance</span>
            <span className="text-2xl font-bold text-green-600">₹0</span>
          </div>
          <div className="flex justify-between items-center">
            <div>{/* Placeholder to fill the left side */}
            <Link to="#" className="text-md font-semibold text-lime-400 self-end">
              Wallet Transaction History
            </Link>
            </div> 
          </div>
        </div>

        {/* Top Up Wallet */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Top Up Wallet</h2>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="₹1000"
              className="w-full p-3 border font-semibold rounded-lg text-green-600 focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex space-x-4 justify-center sm:justify-start">
            {["₹500", "₹1000", "₹2000"].map((amount, idx) => (
              <button
                key={idx}
                className="w-1/3 sm:w-1/4 md:w-1/5 border border-md border-gray-300 font-semibold text-center text-green-600 py-2 px-2 rounded-md hover:border-green-500 active:bg-border-green-500"
              >
                {amount}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button className="w-full mb-6 bg-lime-600 text-white px-4 py-4 rounded-md hover:bg-green-700">
            Proceed To Top-Up
          </button>
        </div>

        {/* Rewards and Credits */}
        <div className="mb-6">
          <div className="bg-transparent border border-black-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between mb-2 items-center">
            <div className="flex flex-col items-center sm:items-start">
              <span>Biotech Maali Rewards</span>
              <span className="flex items-center">
                25% Utilization On Cart Value
                <IconExclamationCircle className="ml-1" />
              </span>
            </div>
            <span className="text-green-600 font-semibold mt-2 sm:mt-0">₹500</span>
          </div>
          <div className="bg-transparent border border-black-100 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col items-center sm:items-start">
              <span>Refund & Gift Credits</span>
              <span className="flex items-center">
                100% Utilization
                <IconExclamationCircle className="ml-1" />
              </span>
            </div>
            <span className="text-green-600 font-semibold mt-2 sm:mt-0">₹0</span>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-6 px-4 bg-transparent border border-black-100">
          <h2 className="text-lg font-semibold mb-4">FAQs</h2>
          {[
            "What happens when I update my email address (or mobile number)?",
            "What happens when I update my email address (or mobile number)?",
            "What happens when I update my email address (or mobile number)?",
            "What happens when I update my email address (or mobile number)?",
          ].map((question, idx) => (
            <details key={idx} className="mb-2">
              <summary className="text-gray-700 py-2 cursor-pointer hover:text-gray-900">
                {question}
              </summary>
              <p className="pl-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
            </details>
          ))}
        </div>

        {/* How to Use Section */}
        <div className="px-2 sm:px-4 py-6">
          <h1 className="text-xl sm:text-2xl text-left mb-4 sm:mb-6">
            How to Pay with a Biotech Maali Card
          </h1>
          <ul className="list-decimal list-inside space-y-4 sm:space-y-6">
            <li>
              Go to{" "}
              <a
                href="https://biotechmaali.com"
                className="text-blue-500 hover:underline"
              >
                biotechmaali.com
              </a>{" "}
              and select the items you want to purchase. When you're ready to
              checkout, click "Proceed to Pay."
            </li>
            <li>Select the "Pay by Gift Card" option.</li>
            <li>Enter your 16-digit gift card number.</li>
            <li>
              If the gift card value doesn't cover your order total, you'll be
              prompted to select an additional payment method.
            </li>
            <li>
              NOTE: Funds will be deducted from your Flipkart Gift Card when you
              place your order. In case of any adjustment or cancellation at a
              later stage, we will credit the refund back to your Gift Card.
            </li>
          </ul>
          <h2 className="text-left mt-4 sm:mt-6">Does my Biotech Maali Card expire?</h2>
          <p className="text-left mt-4 sm:mt-6">
            All Biotech Maali Cards expire 1 year from the date of their
            creation.
          </p>
          <h2 className="text-xl sm:text-2xl text-left mt-8 sm:mt-10">
            Terms & Conditions
          </h2>
          <ul className="list-decimal list-inside space-y-6 py-8">
             <li>
               Biotech Maali Cards ("GCs" or "Gift Cards") are issued by
               Qwikilver Solutions Pvt. Ltd. ("Qwikilver"), which is a private
               limited company incorporated under the laws of India and is
               authorized by the Reserve Bank of India (RBI) to issue such Gift
               Cards.
             </li>
             <li>
               The Gift Cards can be redeemed online against Sellers listed on  
               www.BiotechMaali.com or the Biotech Maali Mobile App or Biotech
               Maali me (Platform) only.
             </li>             <li>
               Gift Cards can be purchased only on www.BiotechMaali.com or
               Biotech Maali Mobile App using the following payment modes: Credit
               Card, Debit Card, and Net Banking.
             </li>
             <li>
               Gift Cards can be redeemed by selecting the payment mode as Gift
               Card.
             </li>
             <li>               Gift Cards cannot be used to purchase other Biotech Maali Gift
               Cards or Biotech Maali First subscriptions.
             </li>
             <li>
               Gift Cards cannot be used to make bulk purchases on the Platform.
             </li>
             <li>
               If the order value exceeds the gift card amount, the balance must
               be paid by Credit Card/Debit Card/Internet Banking.   The Cash on
               Delivery payment option cannot be used to pay the balance amount.
             </li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
