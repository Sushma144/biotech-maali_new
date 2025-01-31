import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import search icon
import DownloadApp from "../../../Assets/DownloadApp.png";
import { Link } from 'react-router-dom';

function CategoryFilter() {
  return (
    <div className="w-full bg-white">

      {/* Search Bar */}
      <div className="mb-6 relative  bg-gray-200 p-1">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <AiOutlineSearch /> {/* Search Icon */}
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400 text-gray-700"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 ">Categories</h2>
        <ul className="space-y-2 border border-gray-300">
          <li className=" border-gray-300">
            < div className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Trace Gardening</div>
          </li>
          <li className="border-t border-gray-300">
            <div className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">Landscaping</div>
          </li>
          <li className="border-t border-gray-300">
             <div className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">  Drip Irrigation for Terrace Garden </div>
          </li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-left">Recent Posts</h2>
        <ul className="space-y-2 text-gray-700 text-left leading-8 ">
          <li><Link Link to="#" className="hover:underline">Top 5 Scenic Road Trips from Chennai to Coastal Getaways</Link></li>
          <li><Link Link to="#" className="hover:underline">How to Plan a Road Trip from Bangalore to Ooty: Route and Tips</Link></li>
          <li><Link Link to="#" className="hover:underline">Solo Women Travel: Safe and Scenic Routes in South India</Link></li>
          <li><Link Link to="#" className="hover:underline">Tips for Renting a Car During Monsoon: Stay Safe on the Road</Link></li>
        </ul>
      </div>

      {/* Promotional Image with Download Button */}
      <div className="text-center mt-6 border bg-gray-300 p-16">
        <img src={DownloadApp} alt="Promo" className="w-full rounded-lg mb-4" />
        <button className="px-6 py-2 mr-10 bg-bio-green text-white rounded-full font-semibold hover:bg-bio-green">Download App</button>
      </div>
    </div>
  );
}

export default CategoryFilter;