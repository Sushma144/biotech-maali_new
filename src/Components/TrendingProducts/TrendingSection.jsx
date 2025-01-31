// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import TrendingCard from './TrendingCard';
// import plantImage from "../../../src/Assets/Trending.png";
// import { FaAngleLeft } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa6";
// import axios from 'axios';
// import { set } from 'immutable';

// const products = [
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 },
//   { name: "Peace Lily Plant", price: 499, oldPrice: 650, image: plantImage, rating: 4 }
// ];

// const TrendingSection = () => {
//   const [selectedTab, setSelectedTab] = useState("featured");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const itemsPerSlide = 4; // Display 4 items per slide on mobile view
//   const navigate = useNavigate(); // Initialize the navigate function
//   const [productsDetails, setProductsDetails] = useState([]);
//   const getProducts = async () => {
//     console.log('get products');

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/homeProducts/`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//    console.log(response.data?.data?.products ,"response");

//    setProductsDetails(response?.data?.data?.products);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//       setProductsDetails([]); // Fallback to an empty array
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []); // Only run once when the component mounts

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide + itemsPerSlide < products.length ? prevSlide + itemsPerSlide : 0
//     );
//   };

//   const handlePreviousSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide - itemsPerSlide >= 0 ? prevSlide - itemsPerSlide : products.length - itemsPerSlide
//     );
//   };

//   const handleProductClick = (productId) => {

//     navigate('/productdata');
//   };

//   // const visibleProducts = window.innerWidth <= 768
//   //   ? products.slice(currentSlide, currentSlide + itemsPerSlide)
//   //   : products;

//     console.log(productsDetails,"productsDetails ////////////////////IKhlas");

//   return (
//     <div className="my-8 p-4 bg-white rounded-md font-sans ">
//       <h2 className="text-2xl mb-4 text-start font-bold">Trending Products</h2>

//       <div className="flex justify-center mb-4">
//         <button
//           onClick={() => setSelectedTab("is_featured")}
//           className={`px-4 py-2 border-2 ${selectedTab === "featured" ? "bg-bio-green text-white border-bio-green" : "text-black border-bio-green"} rounded mx-1`}
//         >
//           Featured
//         </button>
//         <button
//           onClick={() => setSelectedTab("is_trending")}
//           className={`px-4 py-2 border-2 ${selectedTab === "latest" ? "bg-bio-green text-white border-bio-green" : "border-bio-green"} rounded mx-1`}
//         >
//           Latest
//         </button>
//         <button
//           onClick={() => setSelectedTab("is_best_seller")}
//           className={`px-4 py-2 border-2 ${selectedTab === "bestseller" ? "bg-bio-green text-white border-bio-green" : "border-bio-green"} rounded mx-1`}
//         >
//           Bestseller
//         </button>
//       </div>

//       <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
//         {productsDetails.map((product, index) => (
//           <div key={index} onClick={() => handleProductClick(index)} className="cursor-pointer">
//             <TrendingCard
//               name={product.name}
//               price={product.price}
//               oldPrice={product.price}
//               imageUrl={product?.images[0]}
//               // rating={product.rating}
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handlePreviousSlide}
//           className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//         >
//           <span className="text-bio-green">< FaAngleLeft/></span>
//         </button>
//         <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//           View All
//         </button>
//         <button
//           onClick={handleNextSlide}
//           className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//         >
//           <span className="text-bio-green"><FaAngleRight /></span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrendingSection;



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import TrendingCard from "./TrendingCard";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";
import { Link } from "react-router-dom";

const TrendingSection = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4; // Display 4 items per slide on mobile view
  const navigate = useNavigate(); // Initialize the navigate function
  const [productsDetails, setProductsDetails] = useState([]);

  const getProducts = async () => {
    // console.log('get products');

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/homeProducts/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data?.data?.products, "response");

      setProductsDetails(response?.data?.data?.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setProductsDetails([]); // Fallback to an empty array
    }
  };

  useEffect(() => {
    getProducts();
  }, []); // Only run once when the component mounts

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + itemsPerSlide < productsDetails.length
        ? prevSlide + itemsPerSlide
        : 0
    );
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide - itemsPerSlide >= 0
        ? prevSlide - itemsPerSlide
        : productsDetails.length - itemsPerSlide
    );
  };

  const handleProductClick = (productId) => {
    console.log("Product ID:", productId);
    navigate("/productdata/" + productId);
  };

  // Filter products based on the selected tab
  const filteredProducts = productsDetails.filter((product) => {
    if (selectedTab === "featured") {
      return product.is_featured;
    } else if (selectedTab === "latest") {
      return product.is_trending;
    } else if (selectedTab === "bestseller") {
      return product.is_best_seller;
    }
    return true; // Return all products when selectedTab is empty
  });

  const ViewAll = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/viewAll`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setProductsDetails(response?.data?.data?.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setProductsDetails([]); // Fallback to an empty array
    }
  };
  return (
    <div className="my-8 p-4 bg-white rounded-md font-sans ">
      <h2 className="text-2xl mb-4 text-center font-bold">Trending Products</h2>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSelectedTab("")}
          className={`px-4 py-2 border-2 ${selectedTab === "" ? "bg-bio-green text-white border-bio-green" : "border-bio-green"} rounded mx-1`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedTab("featured")}
          className={`px-4 py-2 border-2 ${selectedTab === "featured" ? "bg-bio-green text-white border-bio-green" : "text-black border-bio-green"} rounded mx-1`}
        >
          Featured
        </button>
        <button
          onClick={() => setSelectedTab("latest")}
          className={`px-4 py-2 border-2 ${selectedTab === "latest" ? "bg-bio-green text-white border-bio-green" : "border-bio-green"} rounded mx-1`}
        >
          Latest
        </button>
        <button
          onClick={() => setSelectedTab("bestseller")}
          className={`px-4 py-2 border-2 ${selectedTab === "bestseller" ? "bg-bio-green text-white border-bio-green" : "border-bio-green"} rounded mx-1`}
        >
          Bestseller
        </button>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer"
          >
            <TrendingCard
              index={index}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              imageUrl={product?.image} // Fixed for safe access to the image,
              // rating={product.rating},
              product={product}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousSlide}
          className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
        >
          <span className="text-bio-green">
            <FaAngleLeft />
          </span>
        </button>
        <button
          onClick={ViewAll}
          className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1"
        >
          <Link to="/feature">View All</Link>
        </button>
        <button
          onClick={handleNextSlide}
          className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
        >
          <span className="text-bio-green">
            <FaAngleRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
