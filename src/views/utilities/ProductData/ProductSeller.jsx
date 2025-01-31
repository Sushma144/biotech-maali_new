// import React from 'react';    
// import plantImage from "../../../Assets/Gift/Gift3.png";
// import ProductSellerData from './ProductSellerData';

// const products = [
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
  
// ];

// const ProductSeller = () => {
  
  
//   return (
//     <div className="my-8 p-4 bg-white rounded-md ">
//       <h2 className="text-2xl mb-4 text-start font-bold">Best Seller</h2>

      

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//     {products.map((product, index) => (
//       <ProductSellerData
//         key={index}
//         name={product.name}
//         price={product.price}
//         oldPrice={product.oldPrice}
//         imageUrl={plantImage}
//         rating={product.rating}
//       />
//     ))}
//   </div>

      
//     </div>
//   );
// };

// export default ProductSeller;



// import React from 'react';    
// import plantImage from "../../../Assets/Gift/Gift3.png";
// import ProductSellerCard from '../ProductData/ProductSellerData';

// const products = [
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4, isNewArrival: true },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4, isNewArrival: true },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4, isNewArrival: true },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4, isNewArrival: true },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4, isNewArrival: true },
// ];

// const ProductSeller = () => {
//   return (
//     <div className="my-8 p-4 bg-white rounded-md ">
//       <h2 className="text-2xl mb-4 text-start font-bold">Best Seller</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
//         {products.map((product, index) => (
//           <ProductSellerCard
//             key={index}
//             name={product.name}
//             price={product.price}
//             oldPrice={product.oldPrice}
//             imageUrl={product.image}
//             rating={product.rating}
//             isNewArrival={product.isNewArrival}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductSeller;




import React, { useEffect, useState } from 'react';    
import ProductSellerCard from '../ProductData/ProductSellerData';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const ProductSeller = () => {
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
          const filteredProducts = response.data.data.products.filter(product => product.is_best_seller === true);


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
      <h2 className="text-2xl mb-4 text-start font-bold">Best Seller</h2>

     
       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center font-sans">
         {products.map((product) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)}>
            <ProductSellerCard
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

export default ProductSeller;