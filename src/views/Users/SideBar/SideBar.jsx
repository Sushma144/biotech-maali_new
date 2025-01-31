// import React from 'react';
// import { Link } from 'react-router-dom';
// import { IoReorderThree } from "react-icons/io5";
// import { MdOutlinePerson } from "react-icons/md";
// import { IoLocationOutline } from "react-icons/io5";
// import { MdOutlineNotificationsActive } from "react-icons/md";
// import { CiWallet } from "react-icons/ci";
// import { TbGiftCard } from "react-icons/tb";
// import { GoCrossReference } from "react-icons/go";
// import { IoLogOutOutline } from "react-icons/io5";

// function SideBar() {
//   return (
//     <div className='bg-gray-100 '>
//       <div className="w-[270px] h-[743px] font-sans">
//         {/* Header Section */}
//         <div className="h-[74px] px-4 bg-white flex items-center space-x-2 border-b">
//           <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
//             <span className="text-2xl font-semibold text-white">M</span>
//           </div>
//           <div>
//             <div className="text-sm text-gray-400">Hello,</div>
//             <div className="text-lg font-bold">Mallikjan Baroodwale</div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className='bg-white mt-8 '>
//           <div className="overflow-y-auto h-[580px] pt-4">
//             <div className='space-x-2'>         
//             <MenuItem icon={<IoReorderThree style={{ color: '#A3CD39' }} />} text="MY ORDERS"  to="/orders"  />
//             <MenuSection title="ACCOUNT SETTINGS">
//               <MenuItem icon={< MdOutlinePerson style={{ color: '#A3CD39' }} />} text="My Profile" to="/profile" />
//               <MenuItem icon={< IoLocationOutline  style={{ color: '#A3CD39' }} />} text="Track Order" to="/profile/trackorder"/>
//               <MenuItem icon={< MdOutlineNotificationsActive style={{ color: '#A3CD39' }} />} text="Notification" to="/profile/notification" />
//             </MenuSection>
//             <MenuSection title="PAYMENTS">
//               <MenuItem icon={<CiWallet style={{ color: '#A3CD39' }} />} text="Wallet" to="/profile/wallet" badge="₹0" />
//             </MenuSection>
//             <MenuSection title="MY STUFF">
//               <MenuItem icon={<TbGiftCard style={{ color: '#A3CD39' }} />} text="Add A Gift Cards" to="/profile/giftcard" />
//               <MenuItem icon={<GoCrossReference style={{ color: '#A3CD39' }} />} text="My Referrals" to="/profile/referal"/>
//             </MenuSection>
//             <MenuItem icon={<IoLogOutOutline style={{ color: '#A3CD39' }} />} text="Logout" />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const MenuSection = ({ title, children }) => (
//   <div>
//     <div className="text-gray-500 text-md font-semibold uppercase px-2 py-2">{title}</div>
//     {children}
//   </div>
// );

// const MenuItem = ({ icon, text, badge, to }) => (
//   <div className="flex items-center justify-between px-2 py-2 hover:bg-gray-200 cursor-pointer">
//     <Link to={to || "#"} className="flex items-center space-x-2 w-full">
//       {icon && <span className="text-xl">{icon}</span>} {/* Removed the previous color styling here */}
//       <span className="text-md font-semibold">{text}</span>
//     </Link>
//     {badge && <div className="text-green-500 text-sm">{badge}</div>}
//   </div>
// );

// export default SideBar;

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoReorderThree, IoLocationOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlinePerson, MdOutlineNotificationsActive } from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { TbGiftCard } from "react-icons/tb";
import { GoCrossReference } from "react-icons/go";
import LogoutGif from "../../../Assets/logout.gif"; // Replace with the actual path to your GIf  36254071

const SideBar = () => {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const navigate = useNavigate(); // Hook used inside a functional component

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true); // Open the logout confirmation dialog
  };

  const handleCancelLogout = () => {
    setIsLogoutDialogOpen(false); // Close the dialog if user clicks 'Cancel'
  };

  const handleLogOutConfirm = () => {
    console.log("Logged out successfully");
    setIsLogoutDialogOpen(false); // Close the dialog
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[270px] h-screen font-sans">
        {/* Header Section */}
        <div className="h-[74px] px-4 bg-white flex items-center space-x-2 border-b">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className="text-2xl font-semibold text-white">M</span>
          </div>
          <div>
            <div className="text-sm text-gray-400">Hello,</div>
            <div className="text-lg font-bold">Mallikjan Baroodwale</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white mt-8">
          <div className="overflow-y-auto h-[580px] pt-4">
            <MenuItem
              icon={<IoReorderThree style={{ color: "#A3CD39" }} />}
              text="MY ORDERS"
              to="/orders"
            />
            <MenuSection title="ACCOUNT SETTINGS">
              <MenuItem
                icon={<MdOutlinePerson style={{ color: "#A3CD39" }} />}
                text="My Profile"
                to="/profile"
              />
              <MenuItem
                icon={<IoLocationOutline style={{ color: "#A3CD39" }} />}
                text="Track Order"
                to="/profile/trackorder"
              />
              <MenuItem
                icon={<MdOutlineNotificationsActive style={{ color: "#A3CD39" }} />}
                text="Notifications"
                to="/profile/notification"
              />
            </MenuSection>
            <MenuSection title="PAYMENTS">
              <MenuItem
                icon={<CiWallet style={{ color: "#A3CD39" }} />}
                text="Wallet"
                to="/profile/wallet"
                badge="₹0"
              />
            </MenuSection>
            <MenuSection title="MY STUFF">
              <MenuItem
                icon={<TbGiftCard style={{ color: "#A3CD39" }} />}
                text="Add A Gift Card"
                to="/profile/giftcard"
              />
              <MenuItem
                icon={<GoCrossReference style={{ color: "#A3CD39" }} />}
                text="My Referrals"
                to="/profile/referal"
              />
            </MenuSection>

            {/* Logout Menu Item */}
            <MenuItem
              icon={<IoLogOutOutline style={{ color: "#A3CD39" }} />}
              text="Logout"
              onClick={handleLogoutClick} // Open dialog when clicked
            />

            {/* Logout confirmation dialog */}
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
                      onClick={handleLogOutConfirm}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuSection = ({ title, children }) => (
  <div>
    <div className="text-gray-500 text-md font-semibold uppercase px-2 py-2">
      {title}
    </div>
    {children}
  </div>
);

const MenuItem = ({ icon, text, badge, to, onClick }) => (
  <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClick}>
    <Link to={to || "#"} className="flex items-center space-x-2 w-full">
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-md font-medium text-gray-700">{text}</span>
    </Link>
    {badge && <div className="text-green-500 text-sm">{badge}</div>}
  </div>
);

export default SideBar;
