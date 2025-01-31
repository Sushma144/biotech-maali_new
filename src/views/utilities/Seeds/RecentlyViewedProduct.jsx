// import React, { useState } from 'react';
// import plantImage from "../../../Assets/Gift/Gift3.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import RecentlyViewedCard from './RecentlyViewedCard';

// const products = [
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
  
// ];

// const RecentlyViewedProduct = () => {
//   const [selectedTab, setSelectedTab] = useState("featured");
  
//   return (
//     <div className="my-8 p-4 bg-white rounded-md ">
//      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//     {products.map((product, index) => (
//       <RecentlyViewedCard
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

// export default RecentlyViewedProduct;



import React, { useEffect, useState } from 'react';    
import RecentlyViewedCard from './RecentlyviewedCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const RecentlyViewedProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
       axios.get(`${process.env.REACT_APP_API_URL}/product/homeProducts/`)
      .then(response => {
        console.log(response.data); // Log the response to verify its structure
        if (response.data.message === 'success') {
          // // Filter products where `is_seasonal_collection` is true
          // const filteredProducts = response.data.data.products.filter(product => product.is_featured===true || {});

          // Filter products where `is_featured` is true
          const filteredProducts = response.data.data.products.filter(product => product.is_featured === true);


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
      <h2 className="text-2xl mb-4 text-center font-bold">Recently Viewed</h2>

     
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
         {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <RecentlyViewedCard
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product.image}
              rating={product.rating || 0}
            />
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default RecentlyViewedProduct;