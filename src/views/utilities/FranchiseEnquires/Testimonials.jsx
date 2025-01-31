import React from "react";

const TestimonialsSection = () => (
  <div className="hidden md:flex justify-center items-center bg-pink-200 p-4 md:p-10 rounded-lg">
    <div className="max-w-screen-md w-full text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4 md:mb-8">
        Our Happy Franchise Owners
      </h2>
      <div className="flex justify-center space-x-4 md:space-x-12">
        <div className="bg-gray-300 rounded-lg w-[150px] h-[150px] md:w-[400px] md:h-[400px]"></div>
        <div className="bg-gray-300 rounded-lg w-[150px] h-[150px] md:w-[400px] md:h-[400px]"></div>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
