// import React, { useState } from 'react';
// import plantImage from "../../../src/Assets/Trending.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import SeasonalCard from './SeasonalCard';

// const products = [
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
  
// ];

// const SeasonalProduct = () => {
  
//   return (
//     <div className="my-8 p-4 bg-white rounded-md ">
//       <h2 className="text-2xl mb-4 text-start font-bold">Seasonal Collections</h2>

      

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//     {products.map((product, index) => (
//       <SeasonalCard
//         key={index}
//         name={product.name}
//         price={product.price}
//         oldPrice={product.oldPrice}
//         imageUrl={plantImage}
//         rating={product.rating}
//       />
//     ))}
//   </div>

//       <div className="flex justify-center mt-4">
//         <button
          
//           className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//         >
//           <span className="text-bio-green">< FaAngleLeft/></span>
//         </button>
//         <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//           View All
//         </button>
//         <button
         
//           className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//         >
//           <span className="text-bio-green"><FaAngleRight /></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeasonalProduct;



// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import plantImage from "../../../src/Assets/Trending.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import SeasonalCard from './SeasonalCard';

// const products = [
//   { id: 1, name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { id: 2, name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { id: 3, name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { id: 4, name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { id: 5, name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
// ];

// const SeasonalProduct = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleProductClick = (productId) => {
//     // Navigate to the product details page when a product is clicked
//     navigate(`/productdata`);
//   };

//   return (
//     <div className="my-8 p-4 bg-white rounded-md">
//       <h2 className="text-2xl mb-4 text-start font-bold">Seasonal Collections</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//         {products.map((product) => (
//           <div key={product.id} onClick={() => handleProductClick(product.id)}>
//             <SeasonalCard
//               name={product.name}
//               price={product.price}
//               oldPrice={product.oldPrice}
//               imageUrl={plantImage}
//               rating={product.rating}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//           <span className="text-bio-green"><FaAngleLeft /></span>
//         </button>
//         <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//           View All
//         </button>
//         <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//           <span className="text-bio-green"><FaAngleRight /></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeasonalProduct;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import plantImage from "../../../src/Assets/Trending.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import SeasonalCard from './SeasonalCard';

// const SeasonalProduct = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from the API
//     axios.get(`${process.env.REACT_APP_API_URL}/product/homeProducts/`)
//       .then(response => {
//         console.log(response.data); // Log the response to verify its structure
//         if (response.data.message === 'success') {
//           // Filter products where `is_seasonal_collection` is true
//           const filteredProducts = response.data.data.products.filter(product => product.is_seasonal_collection === true);
//           console.log(filteredProducts); // Log the filtered products
//           setProducts(filteredProducts);
//         } else {
//           console.error("API response message is not 'success'");
//         }
//       })
//       .catch(error => {
//         console.error("There was an error fetching the products:", error);
//       });
//   }, []);
  
//   const handleProductClick = (productId) => {
//     navigate(`/productdata`);
//   };

//   return (
//     <div className="my-8 p-4 bg-white rounded-md">
//       <h2 className="text-2xl mb-4 text-start font-bold">Seasonal Collections</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//         {products.map((product) => (
//           <div key={product.id} onClick={() => handleProductClick(product.id)}>
//             <SeasonalCard
//               name={product.name}
//               price={product.price}
//               oldPrice={product.oldPrice}
//               imageUrl={product.images && product.images.length > 0 ? product.images[0].image : plantImage}
//               rating={product.rating || 0}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//           <span className="text-bio-green"><FaAngleLeft /></span>
//         </button>
//         <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//           View All
//         </button>
//         <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//           <span className="text-bio-green"><FaAngleRight /></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SeasonalProduct;




import React, { useEffect, useState } from 'react';    

import SeasonalCard from '../SeasonalCollection/SeasonalCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const SeasonalProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
       axios.get(`${process.env.REACT_APP_API_URL}/product/homeProducts/`)
      .then(response => {
        console.log(response.data); // Log the response to verify its structure
        if (response.data.message === 'success') {
          // Filter products where `is_seasonal_collection` is true
          const filteredProducts = response.data.data.products.filter(product => product.is_seasonal_collection === true);
          console.log(filteredProducts); // Log the filtered products
          setProducts(filteredProducts);
        } else {
          console.error("API response message is not 'success'");
        }
      })
      .catch(error => {
        console.error("There was an error fetching the products:", error);
      });
  }, []);
  
  const handleProductClick = (productId) => {
    navigate(`/productdata`);
  };

  
  return (
    <div className="my-8 p-4 bg-white rounded-md ">
      <h2 className="text-2xl mb-4 text-center font-bold">Seasonal Collections</h2>

     
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
         {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <SeasonalCard
            productId={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.image}
              rating={product.rating || 0}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
          <span className="text-bio-green"><FaAngleLeft /></span>
        </button>
        <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
          View All
        </button>
        <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
          <span className="text-bio-green"><FaAngleRight /></span>
        </button>
      </div>
    </div>
  );
};

export default SeasonalProduct;