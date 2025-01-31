// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setUsername } from '../../redux/Slice/userSlice'; // Import the action
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import biotech from "../../../src/Assets/Biotech-Maali.png"; // Adjust the path to your logo image

// const Login = ({ onClose, onGetOtpClick }) => {
//   // Initialize formData state to store the values of the form fields
//   const [formData, setFormData] = useState({
//     name: '',
//     referralCode: '',
//   });

//   const dispatch = useDispatch(); // Initialize dispatch

//   // Handle input changes and update the respective field in formData
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Update the respective field in formData
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(setUsername(formData.name)); // Dispatch action to update the username in Redux store
//     alert('Logged in successfully!');
//     onClose(); // Close the modal after submitting
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-sans"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[auto]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative mb-4">
//           <img
//             src={biotech}
//             alt="Biotech Maali Logo"
//             className="mx-auto w-[129px] h-[82px]"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//         </div>
//         <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
//           Enter your details
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Enter Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter Name"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="referral"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Enter Referral Code (optional)
//             </label>
//             <input
//               type="text"
//               name="referralCode"
//               value={formData.referralCode}
//               onChange={handleInputChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="000000"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'; // Import the action
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import biotech from "../../../src/Assets/Biotech-Maali.png"; // Adjust the path to your logo image
// import { signInSuccess } from '../../redux/Auth/authSlice'; // Import the action to update the user state
// import { enqueueSnackbar } from 'notistack';

// const Login = ({ onClose }) => {
//   // Initialize formData state to store the values of the form fields
//   const [formData, setFormData] = useState({
//     first_name: '',
//     referralCode: '',
//   });

//   const dispatch = useDispatch(); // Initialize dispatch

//   // Get mobile number and first name from Redux store
//   const mobile = useSelector((state) => state.auth.currentUser.mobile);
//   // const new_user_mobile = useSelector((state) => state?.auth.currentUser.mobile);

//   const first_name = useSelector((state) => state.auth.currentUser.first_name);

//   // Handle input changes and update the respective field in formData
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Update the respective field in formData
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate inputs before submitting
//     if (!formData.name || !mobile) {
//       // alert("Mobile number, name, and referral code (optional) are required.");
//       enqueueSnackbar("Mobile number and Name is required.", { variant: 'error' });
//       return;
//     }

//     // Dispatch action to update the username in Redux store
//     dispatch(signInSuccess({
//       name: formData.name,  // Include name from formData
//       mobile: mobile,       // Include mobile from Redux
//       first_name: first_name, // Include first_name from Redux
//     }));
//     try {
//       // Make POST request to the API
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/account/register/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name, // Use the correct name value
//           mobile: mobile,      // Get mobile number from Redux
//           referralCode: formData.referralCode,
//         }),
//       });
//       const data = await response.json();

//       console.log(response,mobile)
//       if (response.ok) {
//         // alert('Logged in successfully!');
//         enqueueSnackbar('Logged in successfully!', { variant: 'success' });
//         onClose(); // Close the modal after successful submission
//       } else {
//         // alert(`Error: ${data.message}`);
//         enqueueSnackbar(`Error: ${data.message}`, { variant: 'error' });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       // alert('An error occurred while registering.');
//       enqueueSnackbar('An error occurred while registering.', { variant: 'error' });
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-sans"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[auto]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative mb-4">
//           <img
//             src={biotech}
//             alt="Biotech Maali Logo"
//             className="mx-auto w-[129px] h-[82px]"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//         </div>
//         <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
//           Enter your details
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Enter Your Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter Name"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="referral"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Enter Referral Code (optional)
//             </label>
//             <input
//               type="text"
//               name="referralCode"
//               value={formData.referralCode}
//               onChange={handleInputChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="000000"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; // Import the action
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import biotech from "../../../src/Assets/Biotech-Maali.png"; // Adjust the path to your logo image
import { signInSuccess } from "../../redux/Auth/authSlice"; // Import the action to update the user state
import { enqueueSnackbar } from "notistack";
import { setVerifiedUser } from "../../redux/User/verificationSlice";
import { setUsername } from "../../redux/Slice/userSlice";
import { storeToken } from "../../Services/Services/LocalStorageServices";
import axios from "axios";

const Login = ({ onClose }) => {
  // Initialize formData state to store the values of the form fields
  const [formData, setFormData] = useState({
    first_name: "",
    referralCode: "",
  });

  const dispatch = useDispatch(); // Initialize dispatch

  // Get mobile number and first name from Redux store
  //old mobile number
  const mobile = useSelector((state) => state?.auth?.currentUser?.mobile);
  const new_user_mobile = useSelector(
    (state) => state?.newUsersdata?.data?.mobile
  );
  console.log(new_user_mobile);

  const first_name = useSelector(
    (state) => state?.auth?.currentUser?.first_name
  );

  // Handle input changes and update the respective field in formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the respective field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate inputs before submitting
    if (!formData.name || !new_user_mobile) {
      // alert("Mobile number, name, and referral code (optional) are required.");
      enqueueSnackbar("Mobile number and Name is required.", {
        variant: "error",
      });
      return;
    }

    // Dispatch action to update the username in Redux store
    dispatch(
      signInSuccess({
        name: formData.name, // Include name from formData
        mobile: mobile, // Include mobile from Redux
        first_name: first_name, // Include first_name from Redux
      })
    );
    try {
      // Make POST request to the API
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/account/register/`,
        {
          name: formData.name, // Use the correct name value
          //here i changed to mobile of the current user persent in the new Slice
          // mobile: mobile, // Get mobile number from Redux
          mobile: new_user_mobile,
          referralCode: formData.referralCode,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response, "in json and in Normal");

      if (response.data) {
        console.log(response, "============");

        storeToken(response.data.data.token, response.data.data.token);
        const user = response.data.data.user;
        dispatch(setVerifiedUser(response.data));
        dispatch(setUsername(user.name || user.first_name));
        localStorage.setItem("userData", JSON.stringify(user));

        enqueueSnackbar("Logged in successfully!", { variant: "success" });
        onClose(); // Close the modal after successful submission
      } else {
        enqueueSnackbar(`Error: ${response.message}`, { variant: "error" });
      }
    } catch (error) {
      console.error("Error:", error);
      // alert('An error occurred while registering.');
      enqueueSnackbar("An error occurred while registering.", {
        variant: "error",
      });
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-sans"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[auto]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mb-4">
          <img
            src={biotech}
            alt="Biotech Maali Logo"
            className="mx-auto w-[129px] h-[82px]"
          />
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-4">
          Enter your details
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="referral"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Referral Code (optional)
            </label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="000000"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
