import React from "react";
import combo from "../../../src/Assets/ComboOffer/combooffer.png";
import { NavLink } from "react-router-dom";
const ComboOffer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white m-6 font-sans">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[400px] flex justify-center mb-6 md:mb-0">
        <img
          src={combo}
          alt="Plant Combo"
          className="w-full h-full rounded-lg shadow-md border-2 border-blue-300 object-cover "
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:items-center m-6 w-full md:w-1/2 h-auto md:h-full text-center md:text-left font-sans">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-start">
          Combo Offers
        </h2>
        <p className="text-md md:text-lg  text-left mb-6">
          Two for One, Twice the Greenery: Get
          <br /> Your Plant Combo Today!
        </p>
        <NavLink
          to="/combooffer"
          className="inline-block text-white bg-bio-green hover:bg-bio-green   rounded-md py-2 px-4 font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
        >
        Explore Combo
        </NavLink>
      </div>
    </div>
  );
};

export default ComboOffer;
