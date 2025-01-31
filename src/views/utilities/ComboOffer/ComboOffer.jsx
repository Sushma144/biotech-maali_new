import React, { useState } from "react";
import combooffer from "../../../Assets/ComboOffer/combooffer.png";
import Combooffer1 from "../../../Assets/ComboOffer/Combooffer1.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import ComboImage from '../../../views/utilities/ComboOffer/ComboImage.jsx';

const RecentlyViewed = ({ products }) => {
  // Slider settings for mobile view
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // We'll manually add arrows later
    responsive: [
      {
        breakpoint: 768, // Mobile View
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 w-full h-[441px]">
      <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>

      {/* Conditional rendering: show carousel for mobile view */}
     
      <div className="block md:hidden">
  <Slider {...settings}>
    {products.map((product) => (
      <div key={product.id} className="bg-white shadow-md rounded-lg p-4 min-w-[200px] flex flex-col items-center">
        <div className="flex justify-center">
          <img
            src={Combooffer1}
            alt={product.name}
            className="w-[145.09px] h-[194px] object-cover rounded-md"
          />
        </div>
        <h3 className="mt-4 text-sm font-medium text-center">{product.name}</h3>
        <p className="text-gray-500 text-center">{product.price}</p>
        <div className="flex items-center mt-4 justify-center">
          <div className="text-bio-green">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>


      {/* Keep the desktop view unchanged */}
      <div className="hidden md:flex gap-3 space-x-24">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 min-w-[200px]">
            <img
              src={Combooffer1}
              alt={product.name}
              className="w-[145.09px] h-[194px] object-cover rounded-md"
            />
            <h3 className="mt-4 text-sm font-medium text-center">{product.name}</h3>
            <p className="text-gray-500 text-center">{product.price}</p>
            <div className="flex items-center mt-4 justify-center">
              <div className="text-bio-green">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
          <span className="text-bio-green">
            <FaChevronLeft />
          </span>
        </button>
        <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
          View All
        </button>
        <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
          <span className="text-bio-green">
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

// FaqAccordion Component
const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    "How tall does the Peace Lily Plant grow?",
    "What are the common names of the Peace Lily Plant?",
    "What are the common names of the Bamboo Palm Plant?",
    "What are the common names of the Bamboo Palm Plant?",
  ];

  return (
    <div className="container mx-auto p-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-gray-700">{item}</span>
            <span className="text-gray-700">
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011.707 0L10 13.293 13.293 10a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4A1 1 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 00-.707.293l-4 4a1 1 0 001.414 1.414L10 7.414l3.293 3.293a1 1 0 001.414-1.414l-4-4A1 1 0 0010 5z"
                    clipRule="evenodd"
                  />
                </svg>
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

// ComboOffer Component
const ComboOffer = () => {
  const products = [
    {
      id: 1,
      name: "Peace Lily Plant",
      price: "₹420.00",
      oldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Peace Lily Plant",
      price: "₹420.00",
      oldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Peace Lily Plant",
      price: "₹420.00",
      oldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Peace Lily Plant",
      price: "₹420.00",
      oldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
    {
      id: 5,
      name: "Peace Lily Plant",
      price: "₹420.00",
      oldPrice: "₹500.00",
      imageUrl: "https://via.placeholder.com/150",
      rating: 4.5,
    },
  ];

  return (
    <div>
      {/* Combo Offer Section */}
      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home / <span className="text-blue-500">Combo Offers</span>
        </div>

        {/* Image and Heading Section */}
        <div className="bg-gray-100 p-8 rounded-md shadow-lg">
          {/* Container for Image and Text */}
          <div className="flex justify-between items-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-green-600 text-center">
              Explore the combo Below
            </h2>
            {/* Dummy Image */}
            <img
              src={combooffer}
              alt="combo offer"
              className="w-[221px] h-[221px] object-cover rounded-md mb-4"
            />
          </div>
        </div>

        {/* Combo Image Section */}
        <ComboImage /> {/* Rendered ComboImage component here */}

        {/* Recent Products Section */}
        <RecentlyViewed products={products} />
        <FaqAccordion />
      </div>
    </div>
  );
};

export default ComboOffer;
