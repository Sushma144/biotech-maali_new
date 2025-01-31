// import React from 'react';

// const CorporateGiftingPage = () => {
//   const recentlyViewed = [
//     { id: 1, name: 'Indoor Plant', price: '$24.99', image: '/api/placeholder/150/150' },
//     { id: 2, name: 'Indoor Plant', price: '$24.99', image: '/api/placeholder/150/150' },
//     { id: 3, name: 'Indoor Plant', price: '$24.99', image: '/api/placeholder/150/150' },
//     { id: 4, name: 'Indoor Plant', price: '$24.99', image: '/api/placeholder/150/150' },
//     { id: 5, name: 'Indoor Plant', price: '$24.99', image: '/api/placeholder/150/150' },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Gift Image */}
//       <div className="relative h-48 md:h-64 overflow-hidden">
//         <img
//           src="/api/placeholder/1200/400"
//           alt="Corporate Gifting"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Form Section */}
//       <div className="max-w-3xl mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Corporate Gifting / Bulk Order</h1>
//           <p className="text-gray-600">Have any questions about our services? Let us know and we'll get back to you!</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <input
//               type="tel"
//               placeholder="Phone"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               placeholder="Company"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <div>
//             <textarea
//               placeholder="Message"
//               rows={4}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
//           >
//             Send
//           </button>
//         </form>
//       </div>

//       {/* Recently Viewed Section */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Recently Viewed</h2>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//           {recentlyViewed.map((product) => (
//             <div key={product.id} className="group cursor-pointer">
//               <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition duration-200"
//                 />
//               </div>
//               <div className="mt-2">
//                 <h3 className="text-sm text-gray-700">{product.name}</h3>
//                 <p className="text-sm font-medium text-gray-900">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CorporateGiftingPage;

// import React from "react";
// import SeasonalCard from "./SeasonalCard";
// import plantImage from "../../../assests/images/plant.png"; // Adjust path as necessary
// import gift34 from "../../../assests/images/Gift1.png";

// const CorporateGiftingPage = () => {
//   const recentlyViewed = [
//     {
//       name: "Indoor Plant",
//       price: 499,
//       oldPrice: 650,
//       imageUrl: plantImage,
//       rating: 4,
//     },
//     {
//       name: "Peace Lily",
//       price: 499,
//       oldPrice: 650,
//       imageUrl: plantImage,
//       rating: 4.5,
//     },
//     {
//       name: "Bonsai Plant",
//       price: 499,
//       oldPrice: 650,
//       imageUrl: plantImage,
//       rating: 5,
//     },
//     {
//       name: "Succulent Plant",
//       price: 499,
//       oldPrice: 650,
//       imageUrl: plantImage,
//       rating: 3.5,
//     },
//     {
//       name: "Cactus Plant",
//       price: 499,
//       oldPrice: 650,
//       imageUrl: plantImage,
//       rating: 4,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted successfully!");
//     // Additional form handling logic can be added here.
//   };

//   return (
//     <div className="min-h-screen p-4 mt-6 bg-white">
//       {/* Hero Section */}
//       <div className="relative h-48 md:h-64 overflow-hidden">
//         <img
//           src={gift34}
//           alt="Corporate Gifting"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Form Section */}
//       <div className="max-w-3xl mx-auto px-4 py-8">
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">
//             Corporate Gifting / Bulk Order
//           </h1>
//           <p className="text-gray-600">
//             Have any questions about our services? Let us know and we'll get
//             back to you!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Company"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <textarea
//             placeholder="Message"
//             rows={4}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
//           >
//             Send
//           </button>
//         </form>
//       </div>

//       {/* Recently Viewed Section */}
//       <div className="w-full px-4 py-8">
//   <h2 className="text-xl font-semibold text-gray-800 mb-6">Recently Viewed</h2>
//   {/* Grid for Cards */}
//   <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//     {recentlyViewed.map((product, index) => (
//       <SeasonalCard
//         key={index}
//         name={product.name}
//         price={product.price}
//         oldPrice={product.oldPrice}
//         imageUrl={product.imageUrl}
//         rating={product.rating}
//       />
//     ))}
//   </div>
// </div>

//     </div>
//   );
// };

// export default CorporateGiftingPage;



import React, { useState } from "react";
import SeasonalCard from "./SeasonalCard";
import plantImage from "../../../Assets/Gift/Gift3.png"; // Adjust path as necessary
import gift34 from "../../../Assets/Gift/Gift1.png";

const CorporateGiftingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you for submitting your corporate query
        </h2>
        <p className="text-gray-600 mb-2">
          Our corporate gift specialist will surely get back to you soon!
        </p>
        <p className="text-gray-600">
          For more details, you can reach out to us at{' '}
          <a 
            href="mailto:kiran@biotechmagii.com" 
            className="text-green-600 hover:text-green-700"
          >
            kiran@biotechmagii.com
          </a>
          {' '}or call us at{' '}
          <a 
            href="tel:8884981840" 
            className="text-green-600 hover:text-green-700"
          >
            8884981840
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Corporate Gifting / Bulk Order
        </h1>
        <p className="text-gray-600">
          Have any questions about our services? Let us know and we'll get back to you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

const CorporateGiftingPage = () => {
  const recentlyViewed = [
    {
      name: "Indoor Plant",
      price: 499,
      oldPrice: 650,
      imageUrl: plantImage,
      rating: 4,
    },
    {
      name: "Peace Lily",
      price: 499,
      oldPrice: 650,
      imageUrl: plantImage,
      rating: 4.5,
    },
    {
      name: "Bonsai Plant",
      price: 499,
      oldPrice: 650,
      imageUrl: plantImage,
      rating: 5,
    },
    {
      name: "Succulent Plant",
      price: 499,
      oldPrice: 650,
      imageUrl: plantImage,
      rating: 3.5,
    },
    {
      name: "Cactus Plant",
      price: 499,
      oldPrice: 650,
      imageUrl: plantImage,
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen p-4 mt-6 bg-white">
      {/* Hero Section */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={gift34}
          alt="Corporate Gifting"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <CorporateGiftingForm />

      {/* Recently Viewed Section */}
      <div className="w-full px-4 py-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {recentlyViewed.map((product, index) => (
            <SeasonalCard
              key={index}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.imageUrl}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateGiftingPage;
