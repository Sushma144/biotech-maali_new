import React from "react";
import franchiseenquires from "../../../Assets/FranchiseEnquires/franchiseenquires.png";

const HeroSection = () => (
  <div className="relative flex justify-center items-center w-full">
    <img
      src={franchiseenquires}
      alt="Plant Bliss, Ecovibe"
      className="w-[1380px] h-[200px] md:h-[448px] object-cover mx-auto"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 px-2 py-1 md:px-4 md:py-2 w-auto max-w-xl mx-auto">
      <p className="text-center text-sm md:text-xl font-bold text-white leading-tight">
        Your Next Big Venture Starts Here
      </p>
    </div>
  </div>
);

export default HeroSection;
