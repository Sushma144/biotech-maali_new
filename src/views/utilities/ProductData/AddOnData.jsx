// import React, { useState } from "react";
// import ReactStars from 'react-rating-stars-component';
// import { Paper } from "@mui/material";
// import { FaStar } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FiEye } from "react-icons/fi";

// const AddOnData = ({ name, price, oldPrice, imageUrl, rating }) => {
//   const [isHovered, setIsHovered] = useState(false);
 

//   return (
//     <Paper
//       elevation={0}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       sx={{
//         width: { xs: "80%", sm: "14rem" },
//         height: { xs: "23rem" },
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         textAlign: "center",
//         transition: "all 0.3s ease",
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "white",
//         borderRadius: "12px",
//         border: "1px solid transparent",
//         "&:hover": {
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//           transform: "translateY(-8px)",
//           backgroundColor: "#C2FFC7",
//           border: "1px solid #e5e7eb",
//         },
//       }}
//     >
//       {/* Timer Component */}
// <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20  
// rounded-full px-2 py-1 flex items-center gap-1 w-full md:w-1/2 sm:w-full">
//       </div>

//       <div className="relative w-full flex flex-col items-center p-2">
//         {/* Image Container with Green Overlay */}
//         <div className="relative w-full flex justify-center mb-6  ">
//           <div
//             className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out ${
//               isHovered ? "opacity-20" : "opacity-0"
//             }`}
//           />
//           <div
//             className={`transition-colors duration-300 relative rounded-lg  ${
//               isHovered ? "bg-white" : "bg-white"
//             }`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <img
//               className={`w-40 h-28 sm:w-52 sm:h-59 object-contain rounded-lg transition-transform duration-300 relative z-10 mt-8  ${
//                 isHovered ? "scale-105" : "scale-100"
//               }`}
//               src={imageUrl}
//               alt={name}
//             />
//             {/* New Arrival Tag */}
//             <div
//               className="absolute top-0 right-0 bg-bio-green text-white px-2 py-1 rounded-bl-lg"
//             >
//               New Arrival
//             </div>
//           </div>

//           {/* Action Icons */}
//           <div
//             className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 transition-all duration-300 z-20 ${
//               isHovered
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <button className="w-8 h-8 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               <MdOutlineShoppingBag  className="w-4 h-4" />
//             </button>
//             <button className="w-8 h-8 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               < FaRegHeart  className="w-4 h-4" />
//             </button>
//             <button className="w-8 h-8 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               < FiEye className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="p-4 w-full justify-items-center ">
//           <ReactStars
//             count={5}
//             value={rating}
//             edit={false}
//             size={12}
//             activeColor="#0D2164"
//             char={< FaStar />}
//           />
//           <h3 className="text-sm sm:text-md font-semibold mt-2">{name}</h3>
//           <div className="flex flex-col justify-center items-center mt-2">
//           <p className="text-sm font-medium text-black">₹{price}.00</p>
//             {oldPrice && (
//               <p className="text-sm text-gray-400 line-through">
//                 ₹{oldPrice}.00
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Hover Line */}
//       {isHovered && (
//         <div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-800"
//           style={{
//             width: "90px",
//             height: "4px",
//           }}
//         ></div>
//       )}
//     </Paper>
//   );
// };

// export default AddOnData;


// import React, { useState } from "react";
// import ReactStars from 'react-rating-stars-component';
// import { Paper } from "@mui/material";
// import { FaStar } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FiEye } from "react-icons/fi";

// const AddOnData = ({ name, price, oldPrice, imageUrl, rating }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Paper
//       elevation={0}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       sx={{
//         width: { xs: "12rem", sm: "10rem" }, // Adjusted card width
//         height: { xs: "20rem", sm: "18rem" }, // Adjusted card height
//         display: "flex",
//         gap: "4rem",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         textAlign: "center",
//         transition: "all 0.3s ease",
//         position: "relative",
//         overflow: "hidden",
//         backgroundColor: "white",
//         borderRadius: "8px", // Slightly smaller border radius
//         border: "1px solid transparent",
//         "&:hover": {
//           boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//           transform: "translateY(-5px)",
//           backgroundColor: "#C2FFC7",
//           border: "1px solid #e5e7eb",
//         },
//       }}
//     >
//       <div className="relative w-full flex flex-col items-center p-2">
//         <div className="relative w-full flex mb-4">
//           <div
//             className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out ${
//               isHovered ? "opacity-20" : "opacity-0"
//             }`}
//           />
//           <div
//             className={`transition-colors duration-300 relative rounded-lg ${
//               isHovered ? "bg-white" : "bg-white"
//             }`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <img
//               className={`w-40 h-24 sm:w-40 sm:h-36 object-contain rounded-lg transition-transform duration-300 relative z-10 mt-6 ${
//                 isHovered ? "scale-105" : "scale-100"
//               }`}
//               src={imageUrl}
//               alt={name}
//             />
//             <div className="absolute top-0 right-0 bg-bio-green text-white px-1 py-1 rounded-bl-lg text-xs">
//               New Arrival
//             </div>
//           </div>

//           <div
//             className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 z-20 ${
//               isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//             }`}
//           >
//             <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               <MdOutlineShoppingBag className="w-4 h-4" />
//             </button>
//             <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               <FaRegHeart className="w-4 h-4" />
//             </button>
//             <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
//               <FiEye className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         <div className="p-4 w-full text-center">
//           <ReactStars
//             count={5}
//             value={rating}
//             edit={false}
//             size={10} 
//             activeColor="#0D2164"
//             char={<FaStar />}
//           />
//           <h3 className="text-sm sm:text-md font-semibold mt-2">{name}</h3>
//           <div className="flex flex-col justify-center items-center mt-1">
//             <p className="text-xs font-medium text-black">₹{price}.00</p>
//             {oldPrice && (
//               <p className="text-xs text-gray-400 line-through">
//                 ₹{oldPrice}.00
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {isHovered && (
//         <div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-800"
//           style={{
//             width: "60px",
//             height: "3px",
//           }}
//         ></div>
//       )}
//     </Paper>
//   );
// };

// export default AddOnData;




import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component';
import { Paper } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";

const AddOnData = ({ name, price, oldPrice, imageUrl, rating, isNewArrival }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Paper
      elevation={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        width: { xs: "12rem", sm: "10rem" }, // Adjusted card width
        height: { xs: "20rem", sm: "18rem" }, // Adjusted card height
        display: "flex",
        gap: "4rem",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "8px", // Slightly smaller border radius
        border: "1px solid transparent",
        "&:hover": {
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-5px)",
          backgroundColor: "#C2FFC7",
          border: "1px solid #e5e7eb",
        },
      }}
    >
      {/* Timer Component */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20  rounded-full px-2 py-1 flex items-center gap-1 w-full md:w-1/2 sm:w-full">
      </div>

      <div className="relative w-full flex flex-col items-center p-2">
          {/* Image Container with Green Overlay */}
        <div className="relative w-full flex mb-4">
          <div
            className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ease-in-out ${
              isHovered ? "opacity-20" : "opacity-0"
            }`}
          />
          <div
            className={`transition-colors duration-300 relative rounded-lg ${
              isHovered ? "bg-white" : "bg-white"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className={`w-40 h-24 sm:w-40 sm:h-36 object-contain rounded-lg transition-transform duration-300 relative z-10 mt-6 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
              src={imageUrl}
              alt={name}
            />
           {/* New Arrival Tag */}
           {isNewArrival && !isHovered && (
              <div
                className="absolute top-0 right-0 bg-bio-green text-white px-2  rounded-bl-lg"
              >
                New Arrival
              </div>
            )}
          </div>
     
      {/* Action Icons */}
          <div
            className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 transition-all duration-300 z-20 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
              <MdOutlineShoppingBag className="w-4 h-4" />
            </button>
            <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
              <FaRegHeart className="w-4 h-4" />
            </button>
            <button className="w-6 h-6 rounded-full bg-white hover:bg-bio-green hover:text-white flex items-center justify-center transition-colors duration-200">
              <FiEye className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-4 w-full text-center">
          <ReactStars
            count={5}
            value={rating}
            edit={false}
            size={10} 
            activeColor="#0D2164"
            char={<FaStar />}
          />
          <h3 className="text-sm sm:text-md font-semibold mt-2">{name}</h3>
          <div className="flex flex-col justify-center items-center mt-1">
            <p className="text-xs font-medium text-black">₹{price}.00</p>
            {oldPrice && (
              <p className="text-xs text-gray-400 line-through">
                ₹{oldPrice}.00
              </p>
            )}
          </div>
        </div>
      </div>

      {isHovered && (
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-800"
          style={{
            width: "60px",
            height: "3px",
          }}
        ></div>
      )}
    </Paper>
  );
};

export default AddOnData;
