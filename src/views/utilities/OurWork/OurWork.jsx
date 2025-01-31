import React from "react";
import ourwork from "../../../Assets/OurWork/ourwork1.png";
import ourwork2 from "../../../Assets/OurWork/ourwork2.png";
import ourwork3 from "../../../Assets/OurWork/ourwork3.png";
import ourwork4 from "../../../Assets/OurWork/ourwork4.png";
import ourwork5 from "../../../Assets/OurWork/ourwork5.png";
import ourwork6 from "../../../Assets/OurWork/ourwork6.png";

import { FaPlay } from "react-icons/fa";

const OurWork = () => {
  return (
    <div className="App">
      <h4 className="text-sm sm:text-base p-4">Home / Our Work</h4>
      
      {/* Hero Image */}
      <div className="flex items-center justify-center mt-4">
        <img src={ourwork} alt="hero" className="w-full h-auto max-w-[1280px] sm:h-[469px]" />
      </div>
      
      {/* Hero Section */}
      <div className="bg-gray-100 py-8 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold">
          Elevate Your Outdoor Space. Transform your terrace into a lush green retreat with expert landscaping.
          <br />
          Biotech Maali
        </h2>
      </div>

      {/* Video Section */}
      <div className="flex justify-center mt-8">
        <div className="relative w-full max-w-[1280px] h-[200px] sm:h-[450px]">
          <img
            src={ourwork2}
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white rounded-full p-4 shadow-lg">
              <FaPlay className="text-green-600 text-2xl sm:text-4xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[1280px] h-auto lg:h-[499px] mx-auto">
            {/* Left Side: Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl lg:text-4xl mb-4">
                Design Your Dreamscape: <br />
                Personalized Landscaping with Biotech Maali
              </h4>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                Contact
              </button>
            </div>

            {/* Right Side: Image Section */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
              <img
                src={ourwork3}
                alt="Landscape Design"
                className="w-full max-w-[660px] h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action 2 */}
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-[1280px] h-auto lg:h-[499px] mx-auto">
            {/* Left Side: Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={ourwork4}
                alt="Landscape Design"
                className="w-full max-w-[660px] h-auto object-cover"
              />
            </div>

            {/* Right Side: Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end mt-6 lg:mt-0 text-center lg:text-right">
              <h4 className="text-xl sm:text-2xl lg:text-4xl mb-4">
                Expert Advice, Anytime <br />
                Personalized Garden Consultations <br />
                with Biotech Maali
              </h4>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-8 px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">
          Creative Projects
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
          {/* Row 1 */}
          <div className="col-span-2 row-span-2">
            <img
              src={ourwork5}
              alt="Plants"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              src={ourwork5}
              alt="Garden view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-1 row-span-1">
            <img
              src={ourwork5}
              alt="Man with plant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={ourwork5}
              alt="Plants close-up"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Row 3 */}
          <div className="col-span-2 row-span-1">
            <img
              src={ourwork5}
              alt="Indoor Oasis"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <img
              src={ourwork5}
              alt="Outdoor space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-8 px-4 bg-gray-50 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Meet the Visionaries <br />
          The People Behind the Plants at Biotech Maali
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg p-4">
            <img
              src={ourwork6}
              alt="member 1"
              className="w-full h-auto max-w-[440px]"
            />
            <p className="text-lg font-bold">
              Sujith <br /> CEO And Founder
            </p>
          </div>
          <div className="bg-white shadow-lg p-4">
            <img
              src={ourwork6}
              alt="member 2"
              className="w-full h-auto max-w-[440px]"
            />
            <p className="text-lg font-bold">
              Sujith <br /> CEO And Founder
            </p>
          </div>
          <div className="bg-white shadow-lg p-4">
            <img
              src={ourwork6}
              alt="member 3"
              className="w-full h-auto max-w-[440px]"
            />
            <p className="text-lg font-bold">
              Sujith <br /> CEO And Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
