


// import React from "react";
// import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
// import gift22 from "../../../Assets/Gift/Gift card 1.png";
// const GiftCard = () => {
//   // Assuming useDeviceDetect returns an object with an isDesktop boolean
//   const { isDesktop } = useDeviceDetect();

//   return (
//     <div className="flex justify-center px-8">
//       {isDesktop && (
//         <main className="flex-1 bg-white p-8">
//           <div className="border p-6 rounded-md shadow-md bg-white text-center">
//             <h2 className="text-xl font-bold">Enter Gift Card Number</h2>

//             {/* Gift Card Image Section */}
//             <div className="flex items-center justify-center my-6">
//               <div className="relative w-[429.04px] h-[169.38px] border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
//                 <img src={gift22} 
//                 alt="Gift Card" 
//                 className="w-[600px] h-[200px] object-cover" />
//               </div>
//             </div>

//             {/* Card Number Input */}
//             <input
//               type="text"
//               className="w-[462px] h-[44px] text-center text-lg border border-gray-300 rounded-md py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter card number"
//               maxLength={9}
//             />
//             <br />

//             {/* Apply Button */}
//             <button className="w-[462px] h-[44px] py-2 bg-bio-green text-white text-lg font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
//               Apply
//             </button>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// };

// export default GiftCard;



// import React from "react";
// import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
// import gift22 from "../../../Assets/Gift/Gift card 1.png";

// const GiftCard = () => {
//   // Assuming useDeviceDetect returns an object with an isDesktop boolean
//   const { isDesktop } = useDeviceDetect();

//   return (
//     <div className="flex justify-center px-8">
//       {isDesktop && (
//         <main className="flex-1 bg-white p-8">
//           <div
//             className="border p-6 rounded-md shadow-md bg-white text-center"
//             style={{ width: "950px", height: "878px" }}
//           >
//             <h2 className="text-xl font-bold">Enter Gift Card Number</h2>

//             {/* Gift Card Image Section */}
//             <div className="flex items-center justify-center my-6">
//               <div
//                 className="relative flex items-center justify-center bg-gray-50 border border-gray-300 rounded-lg"
//                 style={{ width: "500px", height: "500px" }}
//               >
//                 <img
//                   src={gift22}
//                   alt="Gift Card"
//                   className="w-[500px] h-[500px] object-cover"
//                 />
//               </div>
//             </div>

//             {/* Card Number Input */}
//             <input
//               type="text"
//               className="w-[462px] h-[44px] text-center text-lg border border-gray-300 rounded-md py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               placeholder="Enter card number"
//               maxLength={9}
//             />
//             <br />

//             {/* Apply Button */}
//             <button className="w-[462px] h-[44px] py-2 bg-bio-green text-white text-lg font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
//               Apply
//             </button>
//           </div>
//         </main>
//       )}
//     </div>
//   );
// };

// export default GiftCard;



// import React from "react";
// import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
// import gift22 from "../../../Assets/Gift/Gift card 1.png";

// const GiftCard = () => {
//   const { isDesktop } = useDeviceDetect();

//   return (
//     <div className={`flex justify-center ${isDesktop ? "px-8" : "px-4"}`}>
//       <main className="flex-1 bg-white p-4">
//         <div
//           className={` p-6 justify-center  bg-white text-center ${
//             isDesktop ? "w-[950px] h-[878px]" : "w-full"
//           }`}
//         >
//           <h2 className={`text-xl font-bold ${isDesktop ? "mb-4" : "mb-2"}`}>
//             Enter Gift Card Number
//           </h2>

//           {/* Gift Card Image Section */}
//           <div
//             className={`flex items-center justify-center my-6 ${
//               isDesktop ? "h-[500px]" : "h-[250px]"
//             }`}
//           >
//             <div
//               className={`relative flex items-center justify-center rounded-lg ${
//                 isDesktop ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
//               }`}
//             >
//               <img
//                 src={gift22}
//                 alt="Gift Card"
//                 className={`object-cover rounded-lg ${
//                   isDesktop ? "w-[500px] h-[500px]" : "w-[250px] h-[250px]"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Card Number Input */}
//           <input
//             type="text"
//             className={`${
//               isDesktop ? "w-[462px] h-[44px]" : "w-full h-[36px]"
//             } text-center text-lg   py-2 mb-6 focus:outline focus:ring-2 focus:ring-blue-400`}
//             placeholder="Enter card number"
//             maxLength={9}
//           />
//           <br />

//           {/* Apply Button */}
//           <button
//             className={`${
//               isDesktop ? "w-[462px] h-[44px]" : "w-full h-[36px]"
//             } py-2 bg-bio-green text-white text-lg font-semibold rounded-md hover:bg-bio-green focus:outline-none focus:ring-2 focus:ring-green-400`}
//           >
//             Apply
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default GiftCard;



import React, { useState } from "react";
import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
import gift22 from "../../../Assets/Gift/Gift card 1.png";

const TrackOrder = () => {
  const { isDesktop } = useDeviceDetect();
  const [giftId, setGiftId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gift Card:", giftId);
  };

  return (
    <div className="flex justify-center items-center  min-h-screen mx-10 bg-white font-sans">
      <main className="w-min-full bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Enter Gift Card Number
        </h1>

        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <img
            src={gift22}
            alt="Order Tracking"
            className="w-80 h-80 object-contain"
          />
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order ID Input */}
          <div>
            <label
              htmlFor="giftId"
              className="block text-md font-medium text-gray-700 text-center mb-2"
            >
              Order ID
            </label>
            <div className="flex justify-center">
              <input
                id="giftId"
                type="text"
                value={giftId}
                onChange={(e) => setGiftId(e.target.value)}
                placeholder="Enter your order ID"
                className="w-[400px] h-[48px] p-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[400px] h-[48px] py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition duration-300"
            >
             Apply
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default TrackOrder;
