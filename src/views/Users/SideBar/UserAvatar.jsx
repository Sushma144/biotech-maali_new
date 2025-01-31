// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { selectUserProfile } from "../../../redux/User/verificationSlice";

// const UserAvatar = ({ 
//   letter = 'M', 
//   backgroundColor = 'bg-yellow-400',
// }) => {

//   const userProfile = useSelector(selectUserProfile);
// const [imageUrl, setImageUrl] = useState(selectUserProfile);

//   return (
//     <div className={`w-10 h-10 rounded-full ${!imageUrl ? backgroundColor : ''} flex items-center justify-center overflow-hidden`}>
//       {imageUrl ? (
//         <img 
//           src={imageUrl} 
//           alt="User avatar" 
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <span className="text-2xl font-semibold text-white">{letter}</span>
//       )}
//     </div>
//   );
// };

// export default UserAvatar;