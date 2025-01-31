// // import React from "react";
// // import combooffer from "../../../assests/images/combooffer.png";


// // function ComboImage() {
// //   const comboOffers = [
// //     {
// //       name: "Green Starter Kit",
// //       description: "For plant lovers looking to expand their collection.",
// //       price: "$499.00",
// //       imageUrl: {combooffer}, // Replace with actual image URLs
// //     },
// //     {
// //       name: "Nature's Duo",
// //       description: "For plant lovers looking to expand their collection.",
// //       price: "$599.00",
// //       imageUrl: {combooffer}, // Replace with actual image URLs
// //     },
// //     {
// //       name: "Urban Jungle Kit",
// //       description: "For plant lovers looking to expand their collection.",
// //       price: "$699.00",
// //       imageUrl: {combooffer}, // Replace with actual image URLs
// //     },
// //   ];

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h2 className="text-3xl font-bold mb-4">Combo Offers</h2>
// //       <p className="text-gray-600 mb-8">
// //         Indoor flowering plants bring vibrant colors and natural beauty into your home. From elegant peace lilies to cheerful ferns, these plants add a touch of joy and fragrance to any space. Discover the enchanting world of indoor flowering plants and create a blooming oasis indoors.
// //       </p>
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {comboOffers.map((offer, index) => (
// //           <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
// //             <Image
// //               src={combooffer}
// //               alt={offer.name}
// //               width={300}
// //               height={200}
// //               className="w-full h-48 object-cover"
// //             />
// //             <div className="p-6">
// //               <div className="bg-pink-100 -mx-6 -mt-6 p-6 mb-4">
// //                 <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
// //                 <p className="text-gray-600 text-sm">{offer.description}</p>
// //               </div>
// //               <div className="mb-4">
// //                 <span className="font-bold text-2xl">{offer.price}</span>
// //               </div>
// //               <p className="text-gray-600 text-sm mb-4">
// //                 Lily plant, Rose Gold, pink lily, white Rose
// //               </p>
// //               <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
// //                 Add To Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default ComboImage;


// import React from "react";

// import combooffer from "../../../assests/images/combooffer.png"; // Corrected the path from 'assests' to 'assets'

// function ComboImage() {
//   const comboOffers = [
//     {
//       name: "Green Starter Kit",
//       description: "For plant lovers looking to expand their collection.",
//       price: "$499.00",
//       imageUrl: {combooffer}, // Use the imageUrl directly
//     },
//     {
//       name: "Nature's Duo",
//       description: "For plant lovers looking to expand their collection.",
//       price: "$599.00",
//       imageUrl: {combooffer}, // Use the imageUrl directly
//     },
//     {
//       name: "Urban Jungle Kit",
//       description: "For plant lovers looking to expand their collection.",
//       price: "$699.00",
//       imageUrl: {combooffer}, // Use the imageUrl directly
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-4">Combo Offers</h2>
//       <p className="text-gray-600 mb-8">
//         Indoor flowering plants bring vibrant colors and natural beauty into your home. From elegant peace lilies to cheerful ferns, these plants add a touch of joy and fragrance to any space. Discover the enchanting world of indoor flowering plants and create a blooming oasis indoors.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {comboOffers.map((offer, index) => (
//           <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
//             < imageUrl
//               src={offer.imageUrl} // Use the imageUrl from the offer object
//               alt={offer.name}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <div className="bg-pink-100 -mx-6 -mt-6 p-6 mb-4">
//                 <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
//                 <p className="text-gray-600 text-sm">{offer.description}</p>
//               </div>
//               <div className="mb-4">
//                 <span className="font-bold text-2xl">{offer.price}</span>
//               </div>
//               <p className="text-gray-600 text-sm mb-4">
//                 Lily plant, Rose Gold, pink lily, white Rose
//               </p>
//               <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
//                 Add To Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ComboImage;


import React from "react";
import combooffer from "../../../Assets/ComboOffer/combooffer.png"; // Correct the path from 'assests' to 'assets'

function ComboImage() {
  const comboOffers = [
    {
      name: "Green Starter Kit",
      description: "For plant lovers looking to expand their collection.",
      price: "$499.00",
      imageUrl: combooffer, // Use the imageUrl directly without curly braces
    },
    {
      name: "Nature's Duo",
      description: "For plant lovers looking to expand their collection.",
      price: "$599.00",
      imageUrl: combooffer, // Use the imageUrl directly without curly braces
    },
    {
      name: "Urban Jungle Kit",
      description: "For plant lovers looking to expand their collection.",
      price: "$699.00",
      imageUrl: combooffer, // Use the imageUrl directly without curly braces
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Combo Offers</h2>
      <p className="text-gray-600 mb-8">
        Indoor flowering plants bring vibrant colors and natural beauty into your home. From elegant peace lilies to cheerful ferns, these plants add a touch of joy and fragrance to any space. Discover the enchanting world of indoor flowering plants and create a blooming oasis indoors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comboOffers.map((offer, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={offer.imageUrl} // Use the imageUrl from the offer object
              alt={offer.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-pink-100 -mx-6 -mt-6 p-6 mb-4">
                <h3 className="text-xl font-semibold mb-2">{offer.name}</h3>
                <br/>
                <p className="text-gray-600 text-sm">{offer.description}</p>
                <br/>
          
              <div className="mb-4">
               
                <span className="text-gray-600 text-sm mb-4"> Price : {offer.price}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                <p className="">Lily plant, Rose Gold, pink lily, white Rose</p>
              </p>
              </div>
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComboImage;
