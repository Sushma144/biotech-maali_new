

// import React from 'react';
// import Image from '../../../src/Assets/ShopTheLook.png';
// import Image1 from '../../../src/Assets/ShopTheLook.png'; // Add your mobile-specific image here

// function ShopTheLook() {
//   return (
//     <div className="bg-white p-4 font-sans">
//       <h2 className="text-2xl font-bold mb-4 text-start">Shop The Look</h2>
//       <div className="flex flex-col">
//         {/* Desktop Image */}
//         <img
//           src={Image}
//           alt="plant image"
//           className="hidden md:block w-full h-full object-cover"
//         />
//         {/* Mobile Image */}
//         <img
//           src={Image1}
//           alt="plant image mobile"
//           className="block md:hidden w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default ShopTheLook;

// import React from 'react';
// import { isMobile } from 'react-device-detect'; // Import device detection
// import Image from '../../../src/Assets/ShopTheLook.png'; // Ensure this path is correct

// function ShopTheLook() {
//   return (
//     <div className="bg-white p-4 font-sans">
//       <h2 className="text-2xl font-bold mb-4 text-start">Shop The Look</h2>
//       <div className="flex flex-col">
//         {/* Desktop Image */}
//         <img
//           src={Image}
//           alt="plant image"
//           className="hidden md:block w-full h-full object-cover"
//         />
//         {/* Mobile Image with adjusted height */}
//         <img
//           src={Image}
//           alt="plant image mobile"
//           className={`block md:hidden w-full ${isMobile ? 'h-[400px]' : 'h-full'} object-cover`}
//         />
//       </div>
//     </div>
//   );
// }

// export default ShopTheLook;



// import React, { useState } from "react";
// import { isMobile } from "react-device-detect";
// import Image from "../../../src/Assets/ShopTheLook.png";
// import PopupShopTheLook from "./PopupShopTheLook"; // Adjust the import path

// function ShopTheLook() {
//   const [showPopup, setShowPopup] = useState(false);

//   return (
//     <div className="bg-white p-4 font-sans">
//       <h2 className="text-2xl font-bold mb-4 text-start">Shop The Look</h2>
//       <div className="flex flex-col">
//         {/* Desktop Image */}
//         <img
//           src={Image}
//           alt="plant image"
//           className="hidden md:block w-full h-full object-cover cursor-pointer"
//           onClick={() => setShowPopup(true)}
//         />
//         {/* Mobile Image */}
//         <img
//           src={Image}
//           alt="plant image mobile"
//           className={`block md:hidden w-full ${isMobile ? "h-[400px]" : "h-full"} object-cover cursor-pointer`}
//           onClick={() => setShowPopup(true)}
//         />
//       </div>

//       {/* Render PopupShopTheLook conditionally */}
//       {showPopup && <PopupShopTheLook onClose={() => setShowPopup(false)} />}
//     </div>
//   );
// }

// export default ShopTheLook;


import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import Image from "../../../src/Assets/ShopTheLook.png"; // Ensure the image path is correct
import PopupShopTheLook from "./PopupShopTheLook"; // Ensure this file exists and is in the correct path

function ShopTheLook() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-white p-4 font-sans">
      <h2 className="text-2xl font-bold mb-4 text-center">Shop The Look</h2>
      <div className="flex flex-col">
        {/* Desktop Image */}
        <img
          src={Image}
          alt="Shop the Look"
          className="hidden md:block w-full h-full object-cover cursor-pointer"
          onClick={() => setShowPopup(true)}
        />
        {/* Mobile Image */}
        <img
          src={Image}
          alt="Shop the Look Mobile"
          className={`block md:hidden w-full ${isMobile ? "h-[400px]" : "h-full"} object-cover cursor-pointer`}
          onClick={() => setShowPopup(true)}
        />
      </div>

      {/* Popup Component */}
      {showPopup && (
        <PopupShopTheLook onClose={() => setShowPopup(false)} 
        />
      )}
    </div>
  );
}

export default ShopTheLook;
