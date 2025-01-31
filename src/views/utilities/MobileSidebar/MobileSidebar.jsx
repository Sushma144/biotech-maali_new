// import { ChevronRight, Edit2, Gift, MapPin, Bell, ShoppingBag, Wallet, UserPlus } from 'lucide-react'

// export default function Component() {
//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="p-4 flex items-center space-x-4">
//         <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
//           <span className="text-2xl font-bold text-white">MB</span>
//         </div>
//         <div className="flex-grow">
//           <h2 className="text-xl font-semibold">Hello,</h2>
//           <p className="text-gray-600">Mallikjan Baroodwale</p>
//         </div>
//         <button className="text-gray-400">
//           <Edit2 className="w-5 h-5" />
//         </button>
//       </div>
//       <div className="border-t border-gray-200">
//         {[
//           { icon: Wallet, label: 'Wallet' },
//           { icon: ShoppingBag, label: 'My Orders' },
//           { icon: Bell, label: 'Notification' },
//           { icon: MapPin, label: 'Add New Address' },
//           { icon: UserPlus, label: 'Refer A Friend' },
//           { icon: Gift, label: 'Add Gift Card' },
//         ].map((item, index) => (
//           <button
//             key={index}
//             className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150"
//           >
//             <div className="flex items-center space-x-4">
//               <item.icon className="w-6 h-6 text-green-500" />
//               <span className="text-gray-700">{item.label}</span>
//             </div>
//             <ChevronRight className="w-5 h-5 text-gray-400" />
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }


// import React from 'react'; // Correctly import React
// import { ChevronRight, Edit2, Gift, MapPin, Bell, ShoppingBag, Wallet, UserPlus } from 'lucide-react';
// import { Outlet } from 'react-router-dom'; // Ensure you're using react-router-dom if needed
// import Header from '../../../Components/Header'; // Adjust the path based on your file structure
// import Footer from '../../../Components/Footer'; // Adjust the path based on your file structure
// import Navigation from '../../../Components/Navigation'; // Adjust the path based on your file structure

// const MobileSidebar = () => {
//   return (
//     <div>
//       <Header />
//       <Navigation />
//       <div className="px-8 bg-gray-100">
//         <div className="flex py-6 px-2">
      
       
//             <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="p-4 flex items-center space-x-4">
//                 <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
//                   <span className="text-2xl font-bold text-white">MB</span>
//                 </div>
//                 <div className="flex-grow">
//                   <h2 className="text-xl font-semibold">Hello,</h2>
//                   <p className="text-gray-600">Mallikjan Baroodwale</p>
//                 </div>
//                 <button className="text-gray-400">
//                   <Edit2 className="w-5 h-5" />
//                 </button>
//               </div>
//               <div className="border-t border-gray-200">
//                 {[
//                   { icon: Wallet, label: 'Wallet' },
//                   { icon: ShoppingBag, label: 'My Orders' },
//                   { icon: Bell, label: 'Notification' },
//                   { icon: MapPin, label: 'Add New Address' },
//                   { icon: UserPlus, label: 'Refer A Friend' },
//                   { icon: Gift, label: 'Add Gift Card' },
//                 ].map((item, index) => (
//                   <button
//                     key={index}
//                     className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-150"
//                   >
//                     <div className="flex items-center space-x-4">
//                       {React.createElement(item.icon, { className: "w-6 h-6 text-green-500" })}
//                       <span className="text-gray-700">{item.label}</span>
//                     </div>
//                     <ChevronRight className="w-5 h-5 text-gray-400" />
//                   </button>
//                 ))}
//               </div>
//             </div>
        

//           {/* Main Content */}
//           <div className="flex-grow">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MobileSidebar;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Mallikjan Baroodwale");

  const options = [
    { label: "Wallet", icon: "📂", link: "/profile/wallet" },
    { label: "My Orders", icon: "📦", link: "/orders" },
    { label: "Notification", icon: "🔔", link: "/profile/notification" },
    { label: "Add New Address", icon: "📍", link: "/profile" },
    { label: "Refer A Friend", icon: "👥", link: "/profile/referal" },
    { label: "Add Gift Card", icon: "🎁", link: "//profile/giftcard" },
  ];

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg mt-4">
      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-gray-500">Hello,</p>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b border-gray-300 outline-none focus:border-indigo-500"
                onBlur={handleSaveClick} // Save when clicking outside
                autoFocus
              />
            ) : (
              <h2 className="text-lg font-semibold">{name}</h2>
            )}
          </div>
        </div>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={handleEditClick}
        >
          ✏️
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {options.map((option, index) => (
          <Link
            to={option.link}
            key={index}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-3">
              <span className="text-green-600 text-xl">{option.icon}</span>
              <p className="text-gray-800">{option.label}</p>
            </div>
            <span className="text-gray-400">➡️</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileSidebar;
