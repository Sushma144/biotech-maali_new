import React, { useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaScissors } from "react-icons/fa6";
import landscapingImg from "../../Assets/landscaping.png";
import service from "../../Assets/Serviceform.png";

function ServicesPage() {
   useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top
    }, []);
  return (
    <div className="bg-white-100 min-h-screen">
      <header className="bg-white-500 text-black py-6 px-8 mt-4">
        <h1 className="text-4xl font-bold text-center">Services We Provide</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Service Cards */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-center">
                <img
                  src={landscapingImg}
                  alt="Service"
                  className="w-[400px] h-[450px] object-cover rounded-lg mb-4"
                />
              </div>
              <h2 className="text-lg font-semibold text-center">
                {
                  [
                    "Landscaping",
                    "Terrace Garden",
                    "Garden Maintenance",
                    "Farm Management",
                    "Poly House",
                    "Net House",
                  ][index]
                }
              </h2>
              <p className="text-gray-700 text-center">
                {
                  [
                    "Enhance your outdoor space with beautifully designed landscaping.",
                    "Create a vibrant terrace garden to enjoy nature in your urban space.",
                    "Keep your garden lush and healthy with our expert maintenance services.",
                    "Optimize your farm operations with our comprehensive management solutions.",
                    "Protect your crops and maximize yields with our high-quality poly houses.",
                    "Create a controlled environment for your plants with our durable net houses.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="flex flex-col items-center my-8 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-center">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
            <div className="flex flex-col items-center">
              <FaHandPointer size={40} />
              <p className="text-center">
                Select the garden package that's right for you
              </p>
            </div>
            <div className="flex flex-col items-center">
              <RiCustomerService2Fill size={40} />
              <p className="text-center">Our team will reach out to you</p>
            </div>
            <div className="flex flex-col items-center">
              <SlCalender size={40} />
              <p className="text-center">Book your initial visit</p>
            </div>
            <div className="flex flex-col items-center">
              <FaScissors size={40} />
              <p className="text-center">
                Our garden expert will carry out the requested service
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-screen mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 w-full">
              <img
                src={service}
                alt="Illustration"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition duration-500"
              />
            </div>
            <div className="md:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-6 text-black-600">
                Biotech Maali Service
              </h2>
              {/* <form>
                <div className="mb-5">
                  <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:outline-none" />
                </div>
                <div className="mb-5">
                  <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:outline-none" />
                </div>
                <div className="mb-5">
                  <input type="tel" placeholder="Contact Number" className="w-full p-3 border rounded-lg focus:outline-none" />
                </div>
                <div className="mb-5">
                  <select className="w-full p-3 border rounded-lg focus:outline-none">
                    <option value="" disabled selected>
                      Select a location
                    </option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                  </select>
                </div>
                <div className="mb-5">
                  <select className="w-full p-3 border rounded-lg focus:outline-none">
                    <option value="" disabled selected>
                      Services
                    </option>
                    <option value="landscaping">Landscaping</option>
                    <option value="terrace">Terrace Garden</option>
                    <option value="maintenance">Garden Maintenance</option>
                    <option value="farm">Farm Management</option>
                  </select>
                </div>
                <div className="mb-5">
                  <textarea placeholder="Description" rows={4} className="w-full p-3 border rounded-lg focus:outline-none" />
                </div>
                <button type="submit" style={{ backgroundColor: "#A3CD39" }} className="w-full text-white py-3 px-4 rounded-lg hover:scale-105 shadow-md">
                  Send Message
                </button>
              </form> */}
              <form>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-5">
                  <select
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  >
                    <option value="" disabled selected>
                      Select a location
                    </option>
                    <option value="new-york">New York</option>
                    <option value="los-angeles">Los Angeles</option>
                  </select>
                </div>
                <div className="mb-5">
                  <select
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  >
                    <option value="" disabled selected>
                      Services
                    </option>
                    <option value="landscaping">Landscaping</option>
                    <option value="terrace">Terrace Garden</option>
                    <option value="maintenance">Garden Maintenance</option>
                    <option value="farm">Farm Management</option>
                  </select>
                </div>
                <div className="mb-5">
                  <textarea
                    placeholder="Description"
                    rows={4}
                    className="w-full p-3 border rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: "#A3CD39" }}
                  className="w-full text-white py-3 px-4 rounded-lg hover:scale-105 shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServicesPage;
