import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(""); // State to track open sections

  // Toggle function to manage dropdown visibility
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <footer className="bg-white  border-black-100 py-8 px-4 md:px-16 font-sans mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 md:gap-8 ">
        {/* Quick Links */}
        <div>
          <h3
            className="font-semibold text-lg mb-4 cursor-pointer md:cursor-auto border-b md:border-b-0"
            onClick={() => toggleSection("quick-links")}
          >
            Quick Links
          </h3>
          <ul
            className={`space-y-2 transition-all duration-300 md:block ${
              openSection === "quick-links" ? "block" : "hidden"
            }`}
          >
            <li className="hover:text-green-500 ">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/ourwork"> Our Work</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/carriers">Carriers</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/blogcomponent">Blog</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/stores">Our Stores</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/franchiseenquery">Franchise Enquire</Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3
            className="font-semibold text-lg mb-4 cursor-pointer md:cursor-auto border-b md:border-b-0"
            onClick={() => toggleSection("customer-care")}
          >
            Customer Care
          </h3>
          <ul
            className={`space-y-2 transition-all duration-300 md:block ${
              openSection === "customer-care" ? "block" : "hidden"
            }`}
          >
            <li className="hover:text-green-500">
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/profile/trackorder">Track Order</Link>
            </li>
            <li className="hover:text-green-500">Terms of Services</li>
            <li className="hover:text-green-500">Privacy Policy</li>
            <li className="hover:text-green-500">Shipping Policy</li>
            <li className="hover:text-green-500">Return Policy</li>
            <li className="hover:text-green-500">FAQs</li>
          </ul>
        </div>

        {/* Offers & Rewards */}
        <div>
          <h3
            className="font-semibold text-lg mb-4 cursor-pointer md:cursor-auto border-b md:border-b-0"
            onClick={() => toggleSection("offers-rewards")}
          >
            Offers & Rewards
          </h3>
          <ul
            className={`space-y-2 transition-all duration-300 md:block ${
              openSection === "offers-rewards" ? "block" : "hidden"
            }`}
          >
            <li className="hover:text-green-500">
              <Link to="/profile/referal">Rewards Club</Link>
            </li>
            <li className="hover:text-green-500">
              <Link to="/profile/wallet">Wallet</Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3
            className="font-semibold text-lg mb-4 cursor-pointer md:cursor-auto border-b md:border-b-0"
            onClick={() => toggleSection("get-in-touch")}
          >
            Get in touch
          </h3>
          <ul
            className={`space-y-2 transition-all duration-300 md:block ${
              openSection === "get-in-touch" ? "block" : "hidden"
            }`}
          >
            <li className="text-gray-700">+91 000 000 0000</li>
            <li className="text-gray-700">
              Email:{" "}
              <Link
                to="mailto:contact@biotechmaali.com"
                className="hover:text-green-500"
              >
                contact@biotechmaali.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-normal text-md mb-4 ">
            Sign up for our newsletter 
          </h3>
          <p className="text-gray-600 mb-4">
            For plant care tips, our featured plant of the week, exclusive
            offers, and discounts.
          </p>
          <form className="flex items-center border border-green-500 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-2 w-full font-semibold focus:outline-none text-xs"
            />
            <button type="submit" className="bg-bio-green text-white px-1 m-2 rounded-md py-1 text-xs">
              Subscribe
            </button>
          </form>
          {/* Social Icons */}
          <h2 className="text-lg font-semibold mt-6">Follow Us</h2>

          <div className="flex space-x-4 mt-2">
            <Link to="/facebook" className="text-black hover:text-green-500">
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="/instagram"
              className="text-black hover:text-green-500"
            >
              <FaInstagram size={20} />
            </Link>
            <Link to="/twitter" className="text-black hover:text-green-500">
              <FaTwitter size={20} />
            </Link>
            <Link to="/linkedin" className="text-black hover:text-green-500">
              <FaLinkedin size={20} />
            </Link>
            <Link to="/youtube" className="text-black hover:text-green-500">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
