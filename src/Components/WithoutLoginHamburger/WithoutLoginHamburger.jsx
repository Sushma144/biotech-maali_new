// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
// import {
//   faInstagram,
//   faFacebook,
//   faLinkedin,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const WithoutLoginHamburger = () => {
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
//           <div className="flex items-center justify-start mb-8">
//             <FontAwesomeIcon icon={faUser} className="text-gray-700" />
//             <Link to="/mobile-signin" // Use Link to navigate to the mobile-signin page
//               className="ml-2 p-2 text-black-800 flex items-center justify-start"
//               onClick={() => setIsOpen(false)} // Close the sidebar when clicking on the link
//             >
//               Login or Signup
//             </Link>
//           </div>

//           {/* Menu Links */}
//           <div className="space-y-6">
//             <Link to="#" className="block border-b pb-2">PLANTS</Link>
//             <Link to="#" className="block border-b pb-2">SEEDS</Link>
//             <Link to="#" className="block border-b pb-2">POTS & PLANTERS</Link>
//             <Link to="#" className="block border-b pb-2">PLANT CARE</Link>
//             <Link to="#" className="block border-b pb-2">GIFTING</Link>
//             <Link to="#" className="block border-b pb-2">Offers</Link>
//           </div>

//           {/* Additional Links */}
//           <div className="space-y-6 mt-6 text-gray-400">
//             <Link to="#" className="block">Blog</Link>
//             <Link to="#" className="block">Services</Link>
//             <Link to="#" className="block">Become A Franchise</Link>
//             <Link to="#" className="block">Contact Us</Link>
//           </div>

//           {/* Social Media Icons */}
//           <div className="flex items-center justify-center mt-28 space-x-12 border-b pt-4">
//             <Link to="#">
//               <FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-600" />
//             </Link>
//             <Link to="#">
//               <FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-600" />
//             </Link>
//             <Link to="#">
//               <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600" />
//             </Link>
//             <Link to="#">
//               <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-600" />
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WithoutLoginHamburger;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import LogoutGif from "../../Assets/logout.gif"; // Ensure this path is correct

const WithoutLoginHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsOpen(false);
    setIsLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    // Perform logout operations
    console.log("Logged out"); // Replace this with dispatch(logout()) or similar
    setIsLogoutDialogOpen(false);
  };

  const handleCancelLogout = () => {
    setIsLogoutDialogOpen(false);
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
          {/* Cancel Icon */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-xl"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {/* Account Section */}
          <div className="flex items-center justify-start mb-8">
            <FontAwesomeIcon icon={faUser} className="text-gray-700" />
            <Link
              to="/mobile-signin"
              className="ml-2 text-black flex items-center justify-start"
              onClick={() => setIsOpen(false)}
            >
              Mallikjan
            </Link>
          </div>

          {/* Menu Links */}
          <div className="space-y-6">
            <Link to="#" className="block border-b pb-2">PLANTS</Link>
            <Link to="#" className="block border-b pb-2">SEEDS</Link>
            <Link to="#" className="block border-b pb-2">POTS & PLANTERS</Link>
            <Link to="#" className="block border-b pb-2">PLANT CARE</Link>
            <Link to="#" className="block border-b pb-2">GIFTING</Link>
            <Link to="#" className="block border-b pb-2">Offers</Link>
          </div>

          {/* Additional Links */}
          <div className="space-y-6 mt-6 text-gray-400">
            <Link to="#" className="block">Blog</Link>
            <Link to="#" className="block">Track Order</Link>
            <Link to="#" className="block">Services</Link>
            <Link to="#" className="block">Become A Franchise</Link>
            <Link to="#" className="block">Contact Us</Link>
          </div>

          {/* Logout Button */}
          <div className="mt-8">
            <button
              onClick={handleLogoutClick}
              className="w-full py-2 px-4 bg-white border rounded-lg text-black"
            >
              Logout
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className="text-xl text-gray-600" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} className="text-xl text-gray-600" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600" />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faYoutube} className="text-xl text-gray-600" />
            </Link>
          </div>
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      {isLogoutDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
            <h3 className="text-lg font-semibold mb-4">Logout</h3>
            <div className="mb-4">
              <img src={LogoutGif} alt="Logout" className="mx-auto w-40" />
            </div>
            <p className="text-gray-700 mb-6">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-around">
              <button
                className="bg-gray-300 px-4 py-2 rounded text-gray-800 hover:bg-gray-400"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
                onClick={handleLogoutConfirm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithoutLoginHamburger;
