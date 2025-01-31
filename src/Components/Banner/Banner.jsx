import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImage from "../../../src/Assets/Banner.png"; // Ensure correct path

const Banner = (home_images) => {
  const banners = [
    {
      title: "Vibrant and Thriving Plants Online",
      subtitle: "Celebrate Friendship with 15% Off",
      buttonText: "Shop Now",
      image: bannerImage,
    },
    {
      title: "Vibrant and Thriving Plants Online",
      subtitle: "Celebrate Friendship with 15% Off",
      buttonText: "Shop Now",
      image: bannerImage,
    },
    {
      title: "Vibrant and Thriving Plants Online",
      subtitle: "Celebrate Friendship with 15% Off",
      buttonText: "Shop Now",
      image: bannerImage,
    },
    {
      title: "Vibrant and Thriving Plants Online",
      subtitle: "Celebrate Friendship with 15% Off",
      buttonText: "Shop Now",
      image: bannerImage,
      is_visible: true
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-4">
      <Swiper
        modules={[Autoplay]} // Only include Autoplay module
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {home_images.home.map((banner, index) => (
          <SwiperSlide key={banner.id || index}>
            <div className="flex items-center bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-sm p-4">
              {/* Left side with plant image */}
              <div className="w-1/4 sm:w-1/4 lg:w-1/2">
                <img
                  src={`${process.env.REACT_APP_API_URL}${banner.web_banner}`}
                  alt="Plant banner"
                  className="w-full h-auto object-cover rounded-lg sm:w-[50px] sm:h-[50px] lg:w-[400px] lg:h-[160px]" // Mobile: smaller size, Desktop: bigger size
                />
              </div>

              {/* Right side with text content */}
              <div className="w-3/4 sm:w-3/4 lg:w-1/2 pl-8 flex flex-col justify-center">
                <h2 className="text-xs md:text-sm lg:text-3xl text-green-800 mb-2">
                  {banner.title}
                </h2>
                <h3 className="text-sm md:text-sm lg:text-4xl font-semibold text-green-800 mb-4">
                  {banner.subtitle}
                </h3>
                <button className="bg-[#00b894] text-white px-6 py-2 rounded-md w-fit hover:bg-[#00a87c] transition-colors ml-auto mr-9">
                  {banner.buttonText}
                </button>  
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
