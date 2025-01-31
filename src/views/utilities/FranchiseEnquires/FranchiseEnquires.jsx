// import React, { useState } from "react";
// import franchiseenquires from "../../../Assets/FranchiseEnquires/franchiseenquires.png";
// import franchiseenquires2 from "../../../Assets/FranchiseEnquires/franchiseenquires2.png";
// import franchiseenquires3 from "../../../Assets/FranchiseEnquires/franchiseenquires3.png";
// import { CiLocationOn } from "react-icons/ci"; // Import the location icon

// function FranchiseEnquires() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic
//     e.target.reset();
//   };

//   const features = [
//     {
//       title: "Target Audience",
//       description:
//         "We have a diverse target audience, ranging from plant enthusiasts to eco-conscious individuals.",
//       icon: "🌱",
//     },
//     {
//       title: "Preferences",
//       description:
//         "Customers prefer fresh, organic, and eco-friendly products that resonate with their lifestyle.",
//       icon: "🌿",
//     },
//     {
//       title: "Fresh Concept",
//       description:
//         "Our concept revolves around creating green spaces and selling eco-friendly products.",
//       icon: "🌍",
//     },
//     {
//       title: "Brand Value",
//       description:
//         "Biotech Maali is known for its trust, innovation, and customer satisfaction.",
//       icon: "💡",
//     },
//   ];

//   const stores = [
//     {
//       city: "Bangalore",
//       address:
//         "Electronics city pin code is 560100. Electronics city is located in Bangalore, Karnataka, India.",
//       contact: "8884981840",
//       time: "9am to 8pm",
//     },
//     {
//       city: "Mumbai",
//       address:
//         "Mumbai city pin code is 400001. Located in the heart of Mumbai, Maharashtra.",
//       contact: "8884981841",
//       time: "9am to 8pm",
//     },
//     {
//       city: "Chennai",
//       address:
//         "Chennai city pin code is 600100. Located in Tamil Nadu, India.",
//       contact: "8884981842",
//       time: "9am to 8pm",
//     },
//   ];

//   const [showAll, setShowAll] = useState(false);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   const isMobile = window.innerWidth <= 768;
//   const displayedStores = showAll || !isMobile ? stores : stores.slice(0, 2);

//   return (
//     <div className="space-y-10 mt-10 px-4 md:px-0">
//       {/* Hero Section */}
//       <div className="relative flex justify-center items-center w-full">
//         <img
//           src={franchiseenquires}
//           alt="Plant Bliss, Ecovibe"
//           className="w-[1380px] h-[200px] md:h-[448px] object-cover mx-auto"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 px-2 py-1 md:px-4 md:py-2 w-auto max-w-xl mx-auto">
//           <p className="text-center text-sm md:text-xl font-bold text-white leading-tight">
//             Your Next Big Venture Starts Here
//           </p>
//         </div>
//       </div>

//       {/* Franchise Form Section */}
//       <div className="w-full md:w-[1450px] mx-auto px-2">
//         <div className="flex flex-col md:flex-row items-stretch justify-between p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-10">
//           {/* Image Section */}
//           <div className="flex-1">
//             <img
//               src={franchiseenquires2}
//               alt="Franchise"
//               className="w-full h-[200px] md:h-full object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Form Section */}
//           <div className="flex-1 bg-white p-4 md:p-8 rounded-lg shadow-md">
//             <h1 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6">
//               Get a Franchise
//             </h1>
//             <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Contact Number"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Area In Which You Want To Open"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <textarea
//                 placeholder="Message"
//                 className="w-full border border-gray-300 p-2 rounded-lg"
//               />
//               <button className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg">
//                 SEND
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//        {/* Why We Rock Section */}
//        <div className="bg-white py-8 md:py-10 px-2 md:px-4">
//          <div className="w-full md:w-[1380px] mx-auto">
//            <h2 className="text-xl md:text-2xl text-center font-bold mb-4">
//              Why We Rock?
//            </h2>
//            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
//              Take the first step and become a part of the family that is
//              ever-growing. Partner with the most trusted plant nursery in the
//              market. The vision of{" "}
//              <span className="font-bold">Biotech Maali franchise</span> is to
//              deliver our unique cultural blend and values to each corner of this
//              world. Started 3 years back, we have accomplished great tasks and
//              achieved incredible milestones.{" "}
//              <span className="font-bold">550+ outlets</span>,{" "}
//              <span className="font-bold">320+ cities</span>, countless kulhads,
//              and global presence say it all.
//            </p>
//          </div>
//        </div>
//        <div className="relative flex justify-center items-center w-full">
//          <img
//           src={franchiseenquires3}
//           alt="Plant Bliss, Ecovibe"
//           className="w-[1380px] h-[200px] md:h-[346px] object-cover mx-auto"
//         />
//       </div>

//       {/* Features Section */}
//       <div className="py-8 md:py-16 bg-white-50">
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
//            {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 md:p-8 rounded-lg shadow-lg"
//             >
//               <div className="text-2xl md:text-4xl mb-2 md:mb-4">
//                 {feature.icon}
//               </div>
//               <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
//                 {feature.title}
//               </h2>
//               <p className="text-gray-600 text-sm md:text-base">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Store Locations Section */}
//       <div className="py-4 md:py-2 bg-white">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
//           Checkout Our Stores
//         </h2>
//         <div className={`flex ${isMobile ? "justify-center" : "justify-between "} flex-wrap`}>
//           {displayedStores.map((store, index) => (
//             <div
//               key={index}
//               className="max-w-xs bg-white shadow-md rounded-lg p-6 m-2 border border-bio-green"
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {store.city}
//                 </h3>
//                 <CiLocationOn className="text-green-500" />
//               </div>
//               <p className="mt-4 text-sm text-gray-600">{store.address}</p>
//               <p className="text-sm text-gray-600">Contact: {store.contact}</p>
//               <p className="text-sm text-gray-600">Time: {store.time}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <button
//             className="bg-bio-green text-white w-[94px] h-[34px] rounded"
//             onClick={toggleShowAll}
//           >
//             {showAll ? "View Less" : "View All"}
//           </button>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="hidden md:flex justify-center items-center bg-pink-200 p-4 md:p-10 rounded-lg">
//          <div className="max-w-screen-md w-full text-center">
//            <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 md:mb-8">
//              Our Happy Franchise Owners
//            </h2>
//            <div className="flex justify-center space-x-4 md:space-x-12">
//              <div className="bg-gray-300 rounded-lg w-[150px] h-[150px] md:w-[400px] md:h-[400px]"></div>
//              <div className="bg-gray-300 rounded-lg w-[150px] h-[150px] md:w-[400px] md:h-[400px]"></div>
//            </div>
//          </div>
//        </div>
//      </div>
//   );
// }

// export default FranchiseEnquires;

import React, { useState } from "react";
import HeroSection from "./HeroSection";
import FranchiseForm from "./FranchiseForm";
import WhyWeRockSection from "./WhyWeRock";
import FeaturesSection from "./FeaturesSection";
import StoreLocations from "./StoreLocations";
import TestimonialsSection from "./Testimonials";

function FranchiseEnquires() {
  return (
    <div className="space-y-10 mt-10 px-4 md:px-0">
      <HeroSection />
      <FranchiseForm />
      <WhyWeRockSection />
      <FeaturesSection />
      <StoreLocations />
      <TestimonialsSection />
    </div>
  );
}

export default FranchiseEnquires;
