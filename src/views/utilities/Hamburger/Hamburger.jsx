// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

// const Hamburger = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       {/* Hamburger Button */}
//       <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//         <FontAwesomeIcon icon={faBars} className="text-2xl" />
//       </button>

//       {/* Sidebar Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-white z-50 p-4 w-3/4 max-w-xs shadow-lg h-full">

//           {/* Account Section */}
//           <div className="flex items-center justify-between mb-6">
//             <FontAwesomeIcon icon={faUser} />
//             <span className="ml-2">My Account</span>
//             <button className="text-gray-700 flex items-center justify-between ml-auto">
//               <span>Logout</span>
//               <FontAwesomeIcon icon={faSignOutAlt}
//                className="ml-4" />
//             </button>
//           </div>

//           {/* Menu Links */}
//           <div className="space-y-4">
//             <Link to="#" className="block border-b pb-2">PLANTS</Link>
//             <Link to="#" className="block border-b pb-2">SEEDS</Link>
//             <Link to="#" className="block border-b pb-2">POTS & PLANTERS</Link>
//             <Link to="#" className="block border-b pb-2">PLANT CARE</Link>
//             <Link to="#" className="block border-b pb-2">GIFTING</Link>
//             <Link to="#" className="block border-b pb-2">Offers</Link>
//           </div>

//           {/* Additional Links */}
//           <div className="space-y-2 mt-6">
//             <Link to="#" className="block">Blog</Link>
//             <Link to="#" className="block">Track Order</Link>
//             <Link to="#" className="block">Services</Link>
//             <Link to="#" className="block">Become A Franchise</Link>
//             <Link to="#" className="block">Contact Us</Link>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex justify-between items-center mt-8 space-2">
//             <Link to="#"><FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-600" /></Link>
//             <Link to="#"><FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-600" /></Link>
//             <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600" /></Link>
//             <Link to="#"><FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-600" /></Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hamburger;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsOpen(false); // Close the sidebar when logout is clicked
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <FontAwesomeIcon icon={faBars} className="text-2xl" />
      </button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 w-3/4 max-w-xs shadow-lg h-full">
          {/* Account Section */}
          <div className="flex items-center justify-between mb-6">
            <FontAwesomeIcon icon={faUser} />
            <span className="ml-2">My Account</span>
            <button
              className="text-gray-700 flex items-center justify-between ml-auto"
              onClick={handleLogoutClick} // Call the logout handler
            >
              <span>Logout</span>
              <FontAwesomeIcon icon={faSignOutAlt} className="ml-4" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <Link to="#" className="block border-b pb-2">
              PLANTS
            </Link>
            <Link to="#" className="block border-b pb-2">
              SEEDS
            </Link>
            <Link to="#" className="block border-b pb-2">
              POTS & PLANTERS
            </Link>
            <Link to="#" className="block border-b pb-2">
              PLANT CARE
            </Link>
            <Link to="#" className="block border-b pb-2">
              GIFTING
            </Link>
            <Link to="#" className="block border-b pb-2">
              Offers
            </Link>
          </div>

          {/* Additional Links */}
          <div className="space-y-6 mt-6 text-gray-400">
            <Link to="#" className="block">
              Blog
            </Link>
            <Link to="#" className="block">
              Track Order
            </Link>
            <Link to="#" className="block">
              Services
            </Link>
            <Link to="#" className="block">
              Become A Franchise
            </Link>
            <Link to="#" className="block">
              Contact Us
            </Link>
            <Link to="#" className="block">
             FAQ
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center mt-8  space-x-6">
            <Link to="#">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-xl text-gray-600"
              />
            </Link>
            <Link to="#">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl text-gray-600"
              />
            </Link>
            <Link to="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl text-gray-600"
              />
            </Link>
            <Link to="#">
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-xl text-gray-600"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
