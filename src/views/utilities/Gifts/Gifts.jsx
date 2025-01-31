// import React, { useState } from "react";
// import Gift1 from "../../../Assets/Gift/Gift1.png";
// import Gift2 from "../../../Assets/Gift/Gift2.png";
// import Gift3 from "../../../Assets/Gift/Gift3.png";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";

// const FaqAccordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const faqItems = [
//     "How tall does the Peace Lily Plant grow?",
//     "What are the common names of Peace Lily Plant?",
//     "What are the common names of Bamboo Palm Plant?",
//     "How much sunlight does a Bamboo Palm Plant need?",
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       {faqItems.map((item, index) => (
//         <div key={index} className="border-b">
//           <button
//             className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
//             onClick={() => toggleAccordion(index)}
//           >
//             <span className="text-gray-700">{item}</span>
//             <span className="text-gray-700">
//               {activeIndex === index ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5 10a1 1 0 011.707 0L10 13.293 13.293 10a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 10z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 5a1 1 0 00-.707.293l-4 4a1 1 0 001.414 1.414L10 7.414l3.293 3.293a1 1 0 001.414-1.414l-4-4A1 1 0 0010 5z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               )}
//             </span>
//           </button>
//           {activeIndex === index && (
//             <div className="p-4 text-gray-600">
//               This is the answer or more details about "{item}".
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };
// const Gifts = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Peace Lily Plant",
//       price: "₹420.00",
//       OldPrice: "₹500.00",
//       imageUrl: "https://via.placeholder.com/150",
//       rating: 4.5,
//     },
//     {
//       id: 2,
//       name: "Peace Lily Plant",
//       price: "₹420.00",
//       OldPrice: "₹500.00",
//       imageUrl: "https://via.placeholder.com/150",
//       rating: 4.5,
//     },
//     {
//       id: 3,
//       name: "Peace Lily Plant",
//       price: "₹420.00",
//       OldPrice: "₹500.00",
//       imageUrl: "https://via.placeholder.com/150",
//       rating: 4.5,
//     },
//     {
//       id: 4,
//       name: "Peace Lily Plant",
//       price: "₹420.00",
//       OldPrice: "₹500.00",
//       imageUrl: "https://via.placeholder.com/150",
//       rating: 4.5,
//     },
//     {
//       id: 5,
//       name: "Peace Lily Plant",
//       price: "₹420.00",
//       OldPrice: "₹500.00",
//       imageUrl: "https://via.placeholder.com/150",
//       rating: 4.5,
//     },
//   ];

//   return (
//     <div className="container mx-auto p-6">
//       <div className="text-sm text-gray-500 mb-4">
//         Home / <span className="text-blue-500">gifts</span>
//       </div>
//       {/* Header Section */}
//       <header className="bg-gray-200">
//         <img
//           className="w-full h-[450px] object-cover"
//           src={Gift1}
//           alt="Header"
//         />
//       </header>

//       {/* Today's Offers Section */}
//       <section className=" w-full my-8 px-4 ml-8">
//         <h2 className="text-2xl font-semibold mb-4">Shop By</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           <div className="text-center">
//             <img
//               className="w-[290px] h-[350px] object-cover"
//               src={Gift2}
//               alt="Birthday Gifts"
//             />
//             <p className="mt-2 text-center">Birthday Gifts</p>
//           </div>

//           {/* Second offer: Basil */}
//           <div className="text-center">
//             <img
//               className="w-[290px] h-[350px] object-cover"
//               src={Gift2}
//               alt="Anniversary Gifts"
//             />
//             <p className="mt-2">Anniversary Gifts</p>
//           </div>

//           {/* Third offer: Monstera */}
//           <div className="text-center">
//             <img
//               className="w-[290px] h-[350px] object-cover"
//               src={Gift2}
//               alt="ThankYou Gifts"
//             />
//             <p className="mt-2">ThankYou Gifts</p>
//           </div>

//           {/* Fourth offer: Fern */}
//           <div className="text-center">
//             <img
//               className="w-[290px] h-[350px] object-cover"
//               src={Gift2}
//               alt="House Warming Plants"
//             />
//             <p className="mt-2">House Warming Plants</p>
//           </div>
//         </div>
//       </section>

//       {/* Seasonal Collection Section */}
//       <section className="p-6 bg-gray-100 w-full h-[441px]">
//         <h2 className="text-2xl font-bold mb-4">Raksha Bhandan Special</h2>
//         <div className="flex gap-3 space-x-24">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-md rounded-lg p-4 min-w-[200px]"
//             >
//               <img
//                 src={Gift3}
//                 alt={product.name}
//                 className="w-[145.09px] h-[198px] object-cover rounded-md"
//               />
//               <h3 className="mt-4 text-sm font-medium text-center">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 text-center">{product.price}</p>
//               <div className="flex justify-center items-center mt-4">
//                 <div className="text-yellow-500">
//                   {"★".repeat(Math.round(product.rating))}
//                   {"☆".repeat(5 - Math.round(product.rating))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-4">
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronLeft />
//             </span>{" "}
//             {/* Left Arrow */}
//           </button>
//           <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//             View All
//           </button>
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronRight />
//             </span>{" "}
//             {/* Right Arrow */}
//           </button>
//         </div>
//       </section>

//       {/* Best Seller Section */}
//       <section className="p-6 bg-gray-100 w-full h-[441px]">
//         <h2 className="text-2xl font-bold mb-4">Best Seller</h2>
//         <div className="flex gap-3 space-x-24">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-md rounded-lg p-4 min-w-[200px]"
//             >
//               <img
//                 src={Gift3}
//                 alt={product.name}
//                 className="w-[145.09px] h-[198px] object-cover rounded-md"
//               />
//               <h3 className="mt-4 text-sm font-medium text-center">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 text-center">{product.price}</p>
//               <div className="flex  justify-center items-center  mt-4">
//                 <div className="text-yellow-500 ">
//                   {"★".repeat(Math.round(product.rating))}
//                   {"☆".repeat(5 - Math.round(product.rating))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-4">
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronLeft />
//             </span>{" "}
//             {/* Left Arrow */}
//           </button>
//           <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//             View All
//           </button>
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronRight />
//             </span>{" "}
//             {/* Right Arrow */}
//           </button>
//         </div>
//       </section>

//       {/* Recently Viewed Section */}
//       <section className="p-6 bg-gray-100 w-full h-[441px]">
//         <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
//         <div className="flex gap-3 space-x-24">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white shadow-md rounded-lg p-4 min-w-[200px]"
//             >
//               <img
//                 src={Gift3}
//                 alt={product.name}
//                 className="w-[145.09px] h-[192px] object-cover rounded-md"
//               />
//               <h3 className="mt-4 text-sm font-medium text-center">
//                 {product.name}
//               </h3>
//               <p className="text-gray-500 text-center">{product.price}</p>
//               <div className="flex justify-center items-center mt-2">
//                 <div className="text-yellow-500  ">
//                   {"★".repeat(Math.round(product.rating))}
//                   {"☆".repeat(5 - Math.round(product.rating))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center mt-4">
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronLeft />
//             </span>{" "}
//             {/* Left Arrow */}
//           </button>
//           <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//             View All
//           </button>
//           <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border ">
//             <span className="text-bio-green">
//               <FaChevronRight />
//             </span>{" "}
//             {/* Right Arrow */}
//           </button>
//         </div>
//       </section>

//       {/* FAQ Accordion */}
//       <FaqAccordion />
//     </div>
//   );
// };

// export default Gifts;

import React from "react";
import { FaChevronLeft, FaChevronRight,FaChevronDown } from "react-icons/fa";
import Gift1 from "../../../Assets/Gift/Gift1.png";
import Gift2 from "../../../Assets/Gift/Gift2.png";
import Gift3 from "../../../Assets/Gift/Gift3.png";

// Header Component
const Header = () => (
  <header className="bg-gray-200">
    <img className="w-full h-[450px] object-cover" src={Gift1} alt="Header" />
  </header>
);

// Shop By Section Component
const ShopBySection = () => (
  <section className="w-full my-8 px-4">
    <h2 className="text-3xl font-semibold mb-6 text-center">Shop By</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { src: Gift2, alt: "Birthday Gifts", label: "Birthday Gifts" },
        { src: Gift2, alt: "Anniversary Gifts", label: "Anniversary Gifts" },
        { src: Gift2, alt: "Thank You Gifts", label: "Thank You Gifts" },
        { src: Gift2, alt: "House Warming Plants", label: "House Warming Plants" },
      ].map((item, index) => (
        <div key={index} className="text-center bg-white rounded-lg shadow-lg p-4">
          <img className="w-[290px] h-[350px] object-cover rounded-md" src={item.src} alt={item.alt} />
          <p className="mt-4 text-lg font-medium text-gray-700">{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

// Product Card Component
const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md rounded-lg p-4 min-w-[200px] text-center">
    <img src={Gift3} alt={product.name} className="w-[145px] h-[198px] object-cover rounded-md mx-auto" />
    <h3 className="mt-4 text-sm font-medium">{product.name}</h3>
    <p className="text-gray-500">{product.price}</p>
    <div className="flex justify-center items-center mt-4 text-yellow-500">
      {"★".repeat(Math.round(product.rating))}
      {"☆".repeat(5 - Math.round(product.rating))}
    </div>
  </div>
);

// Products Section Component
const ProductsSection = ({ title, products }) => (
  <section className="p-6 bg-white-100 w-full">
    <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
    <div className="flex gap-6 overflow-x-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div className="flex justify-center mt-6">
      <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full mx-2 border">
        <FaChevronLeft className="text-gray-500" />
      </button>
      <button className="bg-green-600 text-white w-[120px] h-[40px] rounded-full mx-2 font-semibold">
        View All
      </button>
      <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full mx-2 border">
        <FaChevronRight className="text-gray-500" />
      </button>
    </div>
  </section>
);

// FAQ Accordion Component
const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    "How tall does the Peace Lily Plant grow?",
    "What are the common names of Peace Lily Plant?",
    "What are the common names of Bamboo Palm Plant?",
    "How much sunlight does a Bamboo Palm Plant need?",
  ];

  return (
    <div className="container mx-auto p-6">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-gray-700">{item}</span>
            <span className="text-gray-700">
              {activeIndex === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-4 text-gray-600">
              This is the answer or more details about "{item}".
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Gifts Component
const Gifts = () => {
  const products = [
    {
      id: 1,
      name: "Peace Lily Plant",
      price: "₹420.00",
      OldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Peace Lily Plant",
      price: "₹420.00",
      OldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Peace Lily Plant",
      price: "₹420.00",
      OldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="text-sm text-gray-500 mb-4">
        Home / <span className="text-blue-500">gifts</span>
      </div>
      <Header />
      <ShopBySection />
      <ProductsSection title="Raksha Bandhan Special" products={products} />
      <ProductsSection title="Best Seller" products={products} />
      <ProductsSection title="Recently Viewed" products={products} />
      <FaqAccordion />
    </div>
  );
};

export default Gifts;
