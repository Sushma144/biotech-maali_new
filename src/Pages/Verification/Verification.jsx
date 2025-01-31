

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import biotech from "../../../src/Assets/Biotech-Maali.png";
// import { enqueueSnackbar } from "notistack";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setVerifiedUser } from "../../redux/User/verificationSlice";
// import { setUsername } from "../../redux/Slice/userSlice";
// import { storeToken } from "../../Services/Services/LocalStorageServices";
// const Verification = ({ onClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Retrieve mobile number from localStorage
//   const mobile = JSON.parse(localStorage.getItem("storeUserData"))?.mobile;

//   const handleOTPChange = (index, value) => {
//     if (/^\d*$/.test(value)) {
//       const updatedOtpDigits = [...otpDigits];
//       updatedOtpDigits[index] = value.slice(0, 1);
//       setOtpDigits(updatedOtpDigits);

//       if (value && index < otpDigits.length - 1) {
//         document.getElementById(`otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
//       document.getElementById(`otp-${index - 1}`).focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const otp = otpDigits.join(""); // Combine OTP digits into a single string

//     if (otp.length < 4) {
//       setError("Please fill all OTP fields");
//       setLoading(false);
//       return;
//     }

//     setError(""); // Reset error message

//     try {
//       const payload = {
//         mobile, // Mobile number from localStorage
//         otp, // OTP entered by the user
//       };

//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/account/validateOtp/`,
//         payload,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

      
//       if (response.status === 200) {
//         // Dispatch to Redux and store data
//         console.log(response.data); // Debug the response data
//         storeToken(response.data.data.token , response.data.data.token);
//         const user = response.data.data.user; // Get user data from the response
//         // console.log('store token ',user);
//         dispatch(setVerifiedUser(response.data)); // Dispatch the user data
//         dispatch(setUsername(user.name || user.first_name)); // Use the user data here
//         localStorage.setItem("userData", JSON.stringify(user)); // Store the user data in localStorage

//         onClose();
//         navigate("/");
//       }
//     } catch (error) {
//       if (error.response?.data?.message === "Invalid otp") {
//         setError("Invalid OTP. Please try again.");
//         enqueueSnackbar("Invalid OTP. Please try again.", { variant: "error" });
//       } else {
//         enqueueSnackbar("An error occurred. Please try again.", {
//           variant: "error",
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = () => {
//     enqueueSnackbar("OTP Resent Successfully!", { variant: "info" });
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[380px]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative mb-4 flex justify-center">
//           <img
//             src={biotech}
//             alt="Biotech Maali Logo"
//             className="w-[129px] h-[82px]"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
//           >
//             <FontAwesomeIcon icon={faTimes} size="lg" />
//           </button>
//         </div>
//         <h2 className="text-center text-lg font-semibold mb-6">
//           Enter verification code
//         </h2>
//         <form
//           className="flex flex-col items-center"
//           onSubmit={handleSubmit}
//           noValidate
//         >
//           <div className="flex justify-center gap-4 mb-4">
//             {otpDigits.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 className="w-12 h-12 text-center border rounded outline-none focus:ring focus:ring-green-300 text-xl"
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleOTPChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               />
//             ))}
//           </div>
//           {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
//           <div className="flex justify-between w-full mb-4">
//             <button
//               type="button"
//               onClick={handleResendOTP}
//               className="text-green-500 text-sm font-medium"
//             >
//               Resend
//             </button>
//           </div>
//           <button
//             type="submit"
//             className={`w-full bg-green-600 text-white py-2 rounded-md ${
//               loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Verification;


// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import biotech from "../../../src/Assets/Biotech-Maali.png";
// import { useSnackbar } from "notistack"; // Correct import
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setVerifiedUser } from "../../redux/User/verificationSlice";
// import { setUsername } from "../../redux/Slice/userSlice";
// import { storeToken } from "../../Services/Services/LocalStorageServices";

// const Verification = ({ onClose }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { enqueueSnackbar } = useSnackbar(); // Correct usage of useSnackbar
//   const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const mobile = JSON.parse(localStorage.getItem("storeUserData"))?.mobile;

//   const handleOTPChange = (index, value) => {
//     if (/^\d*$/.test(value)) {
//       const updatedOtpDigits = [...otpDigits];
//       updatedOtpDigits[index] = value.slice(0, 1);
//       setOtpDigits(updatedOtpDigits);

//       if (value && index < otpDigits.length - 1) {
//         document.getElementById(`otp-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
//       document.getElementById(`otp-${index - 1}`).focus();
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const otp = otpDigits.join("");

//     if (otp.length < 4) {
//       setError("Please fill all OTP fields");
//       setLoading(false);
//       return;
//     }

//     setError("");

//     try {
//       const payload = {
//         mobile,
//         otp,
//       };

//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/account/validateOtp/`,
//         payload,
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.status === 200) {
//         // onClose();
//         storeToken(response.data.data.token, response.data.data.token);
//         const user = response.data.data.user;
//         dispatch(setVerifiedUser(response.data));
//         dispatch(setUsername(user.name || user.first_name));
//         localStorage.setItem("userData", JSON.stringify(user));
//         onClose();
//         navigate("/");
//       }
//     } catch (error) {
//       if (error.response?.data?.message === "Invalid otp") {
//         setError("Invalid OTP. Please try again.");
//         enqueueSnackbar("Invalid OTP. Please try again.", { variant: "error" });
//       } else {
//         enqueueSnackbar("An error occurred. Please try again.", {
//           variant: "error",
//         });
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResendOTP = () => {
//     enqueueSnackbar("OTP Resent Successfully!", { variant: "info" });
//   };

//   return (
//     <div
//       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[380px]"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="relative mb-4 flex justify-center">
//           <img
//             src={biotech}
//             alt="Biotech Maali Logo"
//             className="w-[129px] h-[82px]"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
//           >
//             <FontAwesomeIcon icon={faTimes} size="lg" />
//           </button>
//         </div>
//         <h2 className="text-center text-lg font-semibold mb-6">
//           Enter verification code
//         </h2>
//         <form
//           className="flex flex-col items-center"
//           onSubmit={handleSubmit}
//           noValidate
//         >
//           <div className="flex justify-center gap-4 mb-4">
//             {otpDigits.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 className="w-12 h-12 text-center border rounded outline-none focus:ring focus:ring-green-300 text-xl"
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleOTPChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//               />
//             ))}
//           </div>
//           {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
//           <div className="flex justify-between w-full mb-4">
//             <button
//               type="button"
//               onClick={handleResendOTP}
//               className="text-green-500 text-sm font-medium"
//             >
//               Resend
//             </button>
//           </div>
//           <button
//             type="submit"
//             className={`w-full bg-green-600 text-white py-2 rounded-md ${
//               loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Verification;



import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import biotech from "../../../src/Assets/Biotech-Maali.png";
import { useSnackbar } from "notistack"; // Correct import
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setVerifiedUser } from "../../redux/User/verificationSlice";
import { setUsername } from "../../redux/Slice/userSlice";
import { storeToken } from "../../Services/Services/LocalStorageServices";
import { storenewData } from "../../redux/newUserData/newUserdataSlice";

const Verification = ({ onClose, onSubmit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); // Correct usage of useSnackbar
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mobile = JSON.parse(localStorage.getItem("storeUserData"))?.mobile;

  const handleOTPChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedOtpDigits = [...otpDigits];
      updatedOtpDigits[index] = value.slice(0, 1);
      setOtpDigits(updatedOtpDigits);

      if (value && index < otpDigits.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const otp = otpDigits.join("");

    if (otp.length < 4) {
      setError("Please fill all OTP fields");
      setLoading(false);
      return;
    }

    setError("");

    const payload = {
      mobile,
      otp,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/account/validateOtp/`,
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);

      if (response.data) {
        console.log(response.data?.message);
        // dispatch to redux and store data message and phone number
        // dispatch(setVerifiedUser(response.data));

        if (
          response.data?.message ===
          "OTP is valid. and only registered with mobile number."
        ) {
          console.log(
            "inside the meassage open the login page for the new user"
          );

          onSubmit(); // open the login page for the new user
          console.log(response.data);

          // dispatch(setVerifiedUser(response));
          dispatch(storenewData(response.data));
        } else {
          console.log("inside For the Old user");

          // handle the message for the old user, no need to open the login page
          storeToken(response?.data?.data?.token, response?.data?.data?.token);
          const user = response.data.data.user;
          dispatch(setVerifiedUser(response.data));
          dispatch(setUsername(user.name || user.first_name));
          localStorage.setItem("userData", JSON.stringify(user));
          onClose();
          navigate("/");
        }
      }

      // if (response.status === 200) {
      //   //after the successfull otp valid then only open the login for the new user based on the message
      //   // onSubmit();
      //   storeToken(response.data.data.token, response.data.data.token);
      //   const user = response.data.data.user;
      //   dispatch(setVerifiedUser(response.data));
      //   dispatch(setUsername(user.name || user.first_name));
      //   localStorage.setItem("userData", JSON.stringify(user));
      //   onClose();
      //   navigate("/");
      // }
    } catch (error) {
      // console.log(error.response?.data?.message);

      if (error.response?.data?.message) {
        setError("Invalid OTP. Please try again.");
        // setOtpDigits(["", "", "", ""]);
        enqueueSnackbar("Invalid OTP. Please try again.", { variant: "error" });
      } else {
        enqueueSnackbar("An error occurred. Please try again.", {
          variant: "error",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = () => {
    enqueueSnackbar("OTP Resent Successfully!", { variant: "info" });
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[350px] h-[380px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mb-4 flex justify-center">
          <img
            src={biotech}
            alt="Biotech Maali Logo"
            className="w-[129px] h-[82px]"
          />
          <button
            onClick={onClose}
            className="absolute top-0 right-0 text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <h2 className="text-center text-lg font-semibold mb-6">
          Enter verification code
        </h2>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex justify-center gap-4 mb-4">
            {otpDigits.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                className="w-12 h-12 text-center border rounded outline-none focus:ring focus:ring-green-300 text-xl"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOTPChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          <div className="flex justify-between w-full mb-4">
            <button
              type="button"
              onClick={handleResendOTP}
              className="text-green-500 text-sm font-medium"
            >
              Resend
            </button>
          </div>
          <button
            type="submit"
            className={`w-full bg-green-600 text-white py-2 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verification;
