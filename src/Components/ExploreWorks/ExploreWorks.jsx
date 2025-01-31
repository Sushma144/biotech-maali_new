
// import React from 'react';
// import creative from '../../../src/Assets/ExploreWorks.png';
// import { Link } from 'react-router-dom';

// const  ExploreWorks = () => {
//   return (
//     <div className="bg-white-100 py-2 md:py-4 lg:py-8 ">
//       <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 text-center font-sans">
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-start ">
//           Explore Our Work & Creative Projects
//         </h2>
        
//         {/* Image and Content Container */}
//         <div className="relative mt-4 rounded-lg shadow-lg overflow-hidden h-100 md:h-150 lg:h-180">
//           {/* Background Image */}
//           <img
//             className="w-full h-full object-cover"
//             src={creative}
//             alt="Biotech Maali"
//           />

//           {/* Overlay with Text */}
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
//             <h3 className="text-xs md:text-2xl lg:text-3xl font-semibold text-white mb-2 mt-20">
//               What Makes Biotech Maali Stand Out?
//             </h3>
//             <Link to="/combooffer">
//   <button 
//     className="bg-bio-green text-white font-semibold py-1 md:py-2 px-4 md:px-6 rounded-lg hover:bg-green-600 text-xs md:text-base"
//   >
//     Explore Now
//   </button>
// </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreWorks;



// import React from 'react';
// import creative from '../../../src/Assets/ExploreWorks.png';
// import { Link } from 'react-router-dom';
// import { isMobile } from 'react-device-detect'; // Import device detection

// const ExploreWorks = () => {
//   return (
//     <div className="bg-white-100 py-2 md:py-4 lg:py-8">
//       <div className="max-w-full mx-auto px-2 md:px-8 lg:px-8 text-center font-sans">
//         {/* Heading */}
//         <h2 className={`text-3xl font-bold text-start ${isMobile ? 'text-xl' : ''}`}>
//           Explore Our Work & Creative Projects
//         </h2>

//         {/* Image and Content Container */}
//         <div className={`relative mt-4 rounded-lg shadow-lg overflow-hidden ${isMobile ? 'h-[500px]' : 'h-200 md:h-150 lg:h-180'}`}>
//           {/* Background Image */}
//           <img
//             className="w-full h-full object-cover"
//             src={creative}
//             alt="Biotech Maali"
//           />

//           {/* Overlay with Text */}
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
//             <h3 className="text-md md:text-4xl lg:text-3xl font-semibold text-white mb-2 mt-20">
//               What Makes Biotech Maali Stand Out?
//             </h3>
//             <Link to="/combooffer">
//               <button 
//                 className="bg-bio-green text-white font-semibold py-1 md:py-2 px-4 md:px-6 rounded-lg hover:bg-green-600 text-md md:text-base"
//               >
//                 Explore Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreWorks;


import React from 'react';
import creative from '../../../src/Assets/ExploreWorks.png';
import { NavLink } from 'react-router-dom'; // Corrected import
import { isMobile } from 'react-device-detect'; // Import device detection

const ExploreWorks = () => {
  return (
    <div className="bg-white-100 py-2 md:py-4 lg:py-8">
      <div className="max-w-full mx-auto px-2 md:px-8 lg:px-8 text-center font-sans">
        {/* Heading */}
        <h2 className={`text-3xl font-bold text-center ${isMobile ? 'text-xl' : ''}`}>
          Explore Our Work & Creative Projects
        </h2>

        {/* Image and Content Container */}
        <div className={`relative mt-4 rounded-lg shadow-lg overflow-hidden ${isMobile ? 'h-[500px]' : 'h-200 md:h-150 lg:h-180'}`}>
          {/* Background Image */}
          <img
            className="w-full h-full object-cover"
            src={creative}
            alt="Biotech Maali"
          />

          {/* Overlay with Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
            <h3 className="text-md md:text-4xl lg:text-3xl font-semibold text-white mb-2 mt-20">
              What Makes Biotech Maali Stand Out?
            </h3>
            <NavLink to="/ourwork">
              <button 
                className="bg-bio-green text-white font-semibold py-1 md:py-2 px-4 md:px-6 rounded-lg hover:bg-green-600 text-md md:text-base"
              >
                Explore Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreWorks;
