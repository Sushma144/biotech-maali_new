// import React, { useState, useEffect } from "react";
// import notificationImage from "../../../assests/images/Noti.png"; // Ensure the path is correct

// const Notification = () => {
  
      
//         const dummyNotifications = [
//           {
//             title: "Peace Lily Plant (Roma Pot, ... is waiting to be yours. Hurry, complete your order now!",
//             price: "₹499.00",
//             date: "21 Aug 2024",
//             imageSrc: notificationImage,
//           },
//           {
//             title: "Snake Plant (Roma Pot) is waiting for you. Hurry, complete your order now!",
//             price: "₹399.00",
//             date: "15 Aug 2024",
//             imageSrc: notificationImage,
//           },
//           {
//             title: "Lucky Bamboo Plant is waiting for you. Hurry, complete your order now!",
//             price: "₹599.00",
//             date: "10 Aug 2024",
//             imageSrc: notificationImage,
//           },
         
//         ];

//   return (
//     <div className="flex justify-center px-6  bg-gray-100 min-h-screen">
//       <div className="w-full md:w-[705px] lg:w-full bg-white p-4 shadow-lg rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Notifications</h2>
//         <div className="space-y-6 py-3">
//           {dummyNotifications.map((notification, index) => (
//             <div
//               key={index}
//               className="flex flex-wrap items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center h-20 w-full md:w-auto">
//                 <img
//                   src={notification.imageSrc}
//                   alt="Product"
//                   className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg mr-4"
//                 />
//                 <div className="flex flex-col">
//                   <h3 className="text-sm sm:text-md font-semibold text-gray-800 truncate">
//                     {notification.title}
//                   </h3>
//                   <p className="text-gray-600">{notification.price}</p>
//                   <p className="text-sm text-gray-400">{notification.date}</p>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 className="text-green-600 text-sm font-semibold mt-2 md:mt-0"
//               >
//                 More Details &rarr;
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notification;


// import React from "react";
// import notificationImage from "../../../assests/images/Noti.png"; // Ensure the path is correct

// const Notification = () => {
//   const dummyNotifications = [
//     {
//       title:
//         "Peace Lily Plant (Roma Pot, ... is waiting to be yours. Hurry, complete your order now!",
//       price: "₹499.00",
//       date: "21 Aug 2024",
//       imageSrc: notificationImage,
//     },
//     {
//       title: "Snake Plant (Roma Pot) is waiting for you. Hurry, complete your order now!",
//       price: "₹399.00",
//       date: "15 Aug 2024",
//       imageSrc: notificationImage,
//     },
//     {
//       title: "Lucky Bamboo Plant is waiting for you. Hurry, complete your order now!",
//       price: "₹599.00",
//       date: "10 Aug 2024",
//       imageSrc: notificationImage,
//     },
//   ];

//   return (
//     <div className="flex justify-center px-4 bg-gray-100 min-h-screen">
//       <div className="w-full md:w-[705px] lg:w-full bg-white p-4 shadow-lg rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">Notifications</h2>
//         <div className="space-y-6 py-3">
//           {dummyNotifications.map((notification, index) => (
//             <div
//               key={index}
//               className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4"
//             >
//               <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
//                 <img
//                   src={notification.imageSrc}
//                   alt="Product"
//                   className="w-16 h-16 object-cover rounded-lg mr-4"
//                 />
//                 <div className="flex flex-col">
//                   <h3 className="text-sm sm:text-md font-semibold text-gray-800 truncate">
//                     {notification.title}
//                   </h3>
//                   <p className="text-gray-600">{notification.price}</p>
//                   <p className="text-sm text-gray-400">{notification.date}</p>
//                 </div>
//               </div>
//               <a
//                 href="#"
//                 className="text-green-600 text-sm font-semibold mt-2 sm:mt-0 self-end sm:self-auto"
//               >
//                 More Details &rarr;
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Notification;


import React from "react";
import notificationImage from "../../../Assets/Noti.png"; // Ensure the path is correct

const Notification = () => {
  const dummyNotifications = [
    {
      title: "Peace Lily Plant (Roma Pot) is waiting to be yours. Hurry, complete your order now!",
      price: "₹499.00",
      date: "21 Aug 2024",
      imageSrc: notificationImage,
    },
    {
      title: "Snake Plant (Roma Pot) is waiting for you. Hurry, complete your order now!",
      price: "₹399.00",
      date: "15 Aug 2024",
      imageSrc: notificationImage,
    },
    {
      title: "Lucky Bamboo Plant is waiting for you. Hurry, complete your order now!",
      price: "₹599.00",
      date: "10 Aug 2024",
      imageSrc: notificationImage,
    },
  ];

  return (
    <div className="flex justify-center px-4 bg-gray-100 min-h-screen">
      {/* Desktop View */}
      <div className="hidden sm:block w-full md:w-[705px] lg:w-full bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-6 py-3">
          {dummyNotifications.map((notification, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-4"
            >
              <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
                <img
                  src={notification.imageSrc}
                  alt="Product"
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-md font-semibold text-gray-800 truncate">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600">{notification.price}</p>
                  <p className="text-sm text-gray-400">{notification.date}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-green-600 text-sm font-semibold mt-2 sm:mt-0 self-end sm:self-auto"
              >
                More Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden w-full max-w-md bg-white p-4 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-6 py-3">
          {dummyNotifications.map((notification, index) => (
            <div
              key={index}
              className="flex flex-col items-start border-b pb-4"
            >
              <div className="flex items-start mb-4">
                <img
                  src={notification.imageSrc}
                  alt="Product"
                  className="w-20 h-20 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold text-gray-800 leading-tight">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{notification.price}</p>
                  <p className="text-sm text-gray-400">{notification.date}</p>
                </div>
              </div>
              <a
                href="#"
                className="text-green-600 text-sm font-semibold"
              >
                More Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
