// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// const Stores = () => {
//   const stores = [
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Hubli (Franchise)',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     } ,
//      {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Hubli (Franchise)',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Hubli (Franchise)',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     },
//     {
//       name: 'Bangalore',
//       description: 'Electronics city pin code is 560100. electronics city is located in na bangalore, karnataka, india.'
//     }
//   ];

//   return (
//     <div className="flex justify-center py-12">
//     <div className="w-[1259px] h-auto border border-gray-300 rounded-lg p-6">
//       <h2 className="text-2xl justify-center text-center leading-9 tracking-tight text-gray-900 sm:text-3xl sm:leading-10 mb-6">
//         Checkout Our Stores
//       </h2>
      
//       {/* Stores list */}
//       <div className="flex flex-wrap justify-between">
//         {stores.map((store, index) => (
//           <div
//             key={index}
//             className="max-w-xs bg-white shadow-md rounded-lg p-6 m-2 border border-gray-200"
//           >
//             <div className="flex items-center justify-between">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {store.name}
//               </h3>
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500" />
//             </div>
//             <p className="mt-4 text-sm text-gray-600">{store.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Button aligned at the bottom center */}
//       <div className="flex justify-center mt-4">
//   <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border border-bio-gray">
//   <span className="text-bio-green">&#60;</span> {/* Left Arrow */}
// </button>
// <button className="bg-bio-green text-white w-[94px] h-[34px] rounded mx-1">
//   View All
// </button>
// <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border border-gray">
//   <span className="text-bio-green">&#62;</span> {/* Right Arrow */}
// </button>

//   </div>
//   <div>
//   <div className="mt-12 text-center">
//           <h3 className="text-xl font-semibold mb-4">Request A Free Franchise Consultation</h3>
//           <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg">
//             Apply Now
//           </button>
//         </div>
//         </div>
//     </div>
    
//   </div>
//   );
// }

// export default Stores;



import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci"; // Import the location icon
import axios from "axios"; // Import axios

const Stores = () => {
  // State to store selected store data for the form
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  // State for stores list
  const [stores, setStores] = useState([]);

  // Fetch stores from API when component mounts
  const fetchStores = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/store/store_list/`);
      // console.log(response,"response...........");
      
      setStores(response?.data?.data?.stores); // Set the stores if the response is an array
    } catch (error) {
      console.error(error);
      setError("Error fetching store data");
    } finally {
      setLoading(false); // Set loading to false once data is fetched or error occurs
    }
  };

  useEffect(() => {
    fetchStores();
  }, []); // Empty dependency array ensures this runs only once when component mounts

  // Handle loading and error states
  if (loading) {
    return <div>Loading stores...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full bg-white-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-start mb-6">
        Checkout Our Stores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stores && Array.isArray(stores) && stores.length > 0 ? (
          stores.map((store, index) => (
            <div
              key={index}
              className="p-4 border-2 border-bio-green rounded-md shadow-md bg-white w-full md:w-auto"
            >
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                {store.location}
                <a
                  href={store.address_link} // Set the address link for Google Maps
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer" // For security reasons
                  className="ml-2 text-bio-green"
                >
                  <CiLocationOn />
                </a>
              </h3>
              <p className="text-sm mb-2">
                <strong>Address:</strong> {store.address}
              </p>
              <p className="text-sm mb-2">
                <strong>Contact number:</strong> {store.contact}
              </p>
              <p className="text-sm">
                <strong>Time:</strong> {store.time_period}
              </p>
            </div>
          ))
        ) : (
          <div>No stores available</div>
        )}
      </div>

     
      {/* Request a Free Franchise Consultation Section */}
      <section className="text-center my-8 w-full p-6 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">
          Request A Free Franchise Consultation
        </h2>
        <button className="bg-bio-green text-white px-4 py-2 rounded hover:bg-green-700">
          Apply Now
        </button>
      </section>

    </div>
  );
};

export default Stores;
