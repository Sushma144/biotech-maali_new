// import React from 'react';
// import { Link } from 'react-router-dom';
// import { isMobile } from 'react-device-detect';

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-blue-900 to-blue-700">
//       <div className="container mx-auto px-4 py-4 sm:py-2 flex justify-between items-center">
//         {/* Free Shipping text */}
//         <p className="text-white text-xs sm:text-sm whitespace-nowrap">
//           Free Shipping above ₹499 | All India Delivery
//         </p>

//         <div className="flex items-center space-x-4 sm:space-x-6">
//           {/* Hide the helpline section on mobile view */}
//           <div className="hidden md:flex flex-col text-white text-xs sm:text-sm">
//             <p>Help line</p>
//             <p>+91 000 000 0000</p>
//           </div>

//           {/* Franchise Enquiries Button with conditional styling for mobile */}
//           <Link
//             to="/franchiseenquery"
//             className={`bg-bio-green rounded-lg text-white font-bold uppercase px-2 py-0.5 whitespace-nowrap
//               ${isMobile ? 'text-[10px] md:text-[14px] md:px-4 md:py-2' : 'text-[14px] md:px-4 md:py-2'}`}
//           >
//             Franchise Enquiries
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// // import { useNavigate } from "react-router-dom";
// const Header = () => {
//   // State to manage form data
//   // const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     freeShippingText: "Free Shipping above ₹499 | All India Delivery",
//     helpLine: "+91 000 000 0000",
//     franchiseEnquiry: "", // Placeholder for any additional data
//   });

 
//   return (
//     <header className="bg-gradient-to-r from-blue-900 to-blue-700">
//       <div className="container mx-auto px-4 py-4 sm:py-2 flex justify-between items-center">
//         {/* Free Shipping text */}
//         <p className="text-white text-xs sm:text-sm whitespace-nowrap">
//           {formData.freeShippingText}
//         </p>

//         <div className="flex items-center space-x-4 sm:space-x-6">
//           {/* Hide the helpline section on mobile view */}
//           <div className="hidden md:flex flex-col text-white text-xs sm:text-sm">
//             <p>Help line</p>
//             <p>{formData.helpLine}</p>
//           </div>

//           {/* Franchise Enquiries Button with conditional styling for mobile */}
//           <Link
//             to="franchiseenquery"
//             // onClick={handleClick}
//             className={`bg-bio-green rounded-lg text-white font-bold uppercase px-2 py-0.5 whitespace-nowrap 
//               ${isMobile ? "text-[7px] md:text-[14px] md:px-4 md:py-2" : "text-[14px] md:px-4 md:py-2"}`}
//           >
//             Franchise Enquiries
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { isMobile } from "react-device-detect";
// // import { useNavigate } from "react-router-dom";
// const Header = () => {
//   // State to manage form data
//   // const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     freeShippingText: "Free Shipping above ₹499 | All India Delivery",
//     helpLine: "+91 000 000 0000",
//     franchiseEnquiry: "", // Placeholder for any additional data
//   });

 
//   return (
//     <header className="bg-gradient-to-r from-blue-900 to-blue-700">
//       <div className="container mx-auto px-4 py-4 sm:py-2 flex justify-between items-center">
//         {/* Free Shipping text */}
//         <p className="text-white text-xs sm:text-sm whitespace-nowrap">
//           {formData.freeShippingText}
//         </p>

//         <div className="flex items-center space-x-4 sm:space-x-6">
//           {/* Hide the helpline section on mobile view */}
//           <div className="hidden md:flex flex-col text-white text-xs sm:text-sm">
//             <p>Help line</p>
//             <p>{formData.helpLine}</p>
//           </div>

//           {/* Franchise Enquiries Button with conditional styling for mobile */}
//           <Link
//             to="franchiseenquery"
//             // onClick={handleClick}
//             className={`bg-bio-green rounded-lg text-white font-bold uppercase px-2 py-0.5 whitespace-nowrap 
//               ${isMobile ? "text-[7px] md:text-[14px] md:px-4 md:py-2" : "md:text-[14px] md:px-4 md:py-2"}`}
//           >
//             Franchise Enquiries
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Header = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    freeShippingText: "Free Shipping above ₹499 | All India Delivery",
    helpLine: "+91 000 000 0000",
    franchiseEnquiry: "", // Placeholder for any additional data
  });

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="container mx-auto px-4 py-4 sm:py-2 flex justify-between items-center">
        {/* Free Shipping text */}
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl whitespace-nowrap">
          {formData.freeShippingText}
        </p>

        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Help line (hidden on small screens, shown on medium and up) */}
          <div className="hidden md:flex flex-col text-white text-xs sm:text-sm md:text-sm lg:text-base">
            <p>Help line</p>
            <p>{formData.helpLine}</p>
          </div>

          {/* Franchise Enquiries Button with responsive text size */}
          <Link
            to="franchiseenquery"
            className={`bg-bio-green rounded-lg text-white font-bold uppercase px-2 p-1 whitespace-nowrap
              ${isMobile ? "text-[7px] sm:text-[10px] md:text-[12px] lg:text-[14px]" : "md:text-[14px] lg:text-[16px]"} 
              ${isMobile ? "md:px-3 md:py-1" : "md:px-4 md:py-2"}`}
          >
            Franchise Enquiries
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
