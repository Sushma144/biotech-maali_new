// // import React, { useEffect, useState } from "react";
// // import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
// // import DeactivationConfirmation from "../Deactivation/Deactivation";
// // import { useSelector } from "react-redux";
// // import FaqAccordion from "../../Users/ProfilePage/FAQ";
// // import axios from "axios";
// // import { selectAccessToken } from "../../../redux/User/verificationSlice";
// // import AddressSection from "./AddressSection";
// // import { useSnackbar } from "notistack";

// // const ProfilePage = () => {
// //   const accessToken = useSelector(selectAccessToken);

// //   const { isDesktop } = useDeviceDetect();
// //   const [showDeactivation, setShowDeactivation] = useState(false);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [dateOfBirth, setDateOfBirth] = useState("");
// //   const [gender, setGender] = useState("");
// //   const [userEmail, setUserEmail] = useState("");
// //   const storeName = useSelector(
// //     (state) => state.verification?.user?.first_name
// //   );
// //   const storeUserId = useSelector((state) => state.verification?.user?.id);
// //   console.log(storeName, "===========verify  =====", storeUserId);

// //   const storeMobile = useSelector((state) => state.verification?.user?.mobile);
// //   console.log(storeMobile);

// //   const [userName, setUserName] = useState(storeName);
// //   const [lastuserName, setlastUserName] = useState('');
// //   const [userMobile, setUserMobile] = useState(storeMobile);
// //   const { enqueueSnackbar } = useSnackbar();
// //   // const [storeUserId, setStoreUserId] = useState(storeUserId);

// //   const handleEditClick = () => {
// //     setIsEditing(true);
// //   };

// //   const handleCancelClick = () => {
// //     setIsEditing(false);
// //   };

// //     // Define an async function
// // const updateUserProfile = async () => {
// //       try {
// //         // Perform the PATCH request
// //         const response = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/account/profile//${storeUserId}/`,

// //           {
// //             headers: {
// //               "Content-Type": "application/json",
// //               Authorization: `Bearer ${accessToken}`, // Include authentication token if required
// //             },
// //           }
// //         );

// //         // Handle success response
// //         console.log("User udated:", response.data);
// //       } catch (error) {
// //         // Handle error response
// //         console.error("Error updating user:", error);
// //       }
// //     };

// //   useEffect(() => {
// //     window.scrollTo(0, 0); // Scroll to the top
// //     updateUserProfile();
// //   }, []);

// //   // profile submit

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Prepare the payload
// //     const payload = {
// //       user_id: storeUserId,
// //       first_name: userName.split(" ")[0], // Assuming first name is before space
// //       last_name: lastuserName || "", // Assuming last name is after space
// //       email: userEmail,
// //       mobile: userMobile,
// //       date_of_birth: dateOfBirth,
// //       // profile_picture: "",
// //       gender: gender,
// //       // address: "",
// //     };

// //     try {
// //       // Perform the PATCH request
// //         const response = await axios.patch(
// //         `${process.env.REACT_APP_API_URL}/account/profile/`,
// //         payload,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${accessToken}`, // Include authentication token if required
// //           },
// //         }
// //       );

// //       // Handle success response
// //       console.log("User updated:", response.data);
// //       enqueueSnackbar("Your profile is updated successfully!", {
// //         variant: "success",
// //       });
// //     } catch (error) {
// //       // Handle error response
// //       console.error("Error:", error);
// //        // Show error snackbar
// //     enqueueSnackbar("Failed to update profile. Please try again.", {
// //       variant: "error",
// //     });
// //     }
// //   };

// //   return (
// //     <div className="flex px-8">
// //       {showDeactivation ? (
// //         <DeactivationConfirmation onCancel={() => setShowDeactivation(false)} />
// //       ) : (
// //         isDesktop && (
// //           <main className="flex-1 bg-white p-8">
// //             <div className="border p-6 rounded-md shadow-md bg-white">
// //               <h2 className="text-xl font-bold">Personal Information</h2>
// //               <div className="text-right">
// //                 {!isEditing ? (
// //                   <p
// //                     className="text-bio-green font-semibold cursor-pointer"
// //                     onClick={handleEditClick}
// //                   >
// //                     Edit
// //                   </p>
// //                 ) : (
// //                   <p
// //                     className="text-red-600 font-semibold cursor-pointer"
// //                     onClick={handleCancelClick}
// //                   >
// //                     Cancel
// //                   </p>
// //                 )}
// //               </div>

// //               {/* Form Fields */}
// //               <form onSubmit={handleSubmit}>
// //                 {/* Name Fields */}
// //                 <div className="grid grid-cols-2 gap-6 mt-6">
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your First Name"
// //                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     disabled={!isEditing}
// //                     value={userName}
// //                     onChange={(e) => setUserName(e.target.value)} // Update state
// //                     required
// //                   />
// //                   <input
// //                     type="text"
// //                     placeholder="Enter your Last Name"
// //                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     disabled={!isEditing}
// //                     value={lastuserName}
// //                     onChange={(e) => setlastUserName(e.target.value)} // Update state
// //                     required

// //                   />
// //                 </div>

// //                 {/* Gender & Date of Birth Section */}
// //                 <div className="grid grid-cols-2 gap-6 mt-6">
// //                   <div>
// //                     <label className="block font-semibold">Gender</label>
// //                     <div className="flex space-x-4 mt-2">
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Male"
// //                           checked={gender === "Male"}
// //                           onChange={(e) => setGender(e.target.value)}
// //                           className="mr-2"
// //                           disabled={!isEditing}
// //                           required
// //                         />{" "}
// //                         Male
// //                       </label>
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Female"
// //                           checked={gender === "Female"}
// //                           onChange={(e) => setGender(e.target.value)}
// //                           className="mr-2"
// //                           disabled={!isEditing}
// //                           required
// //                         />{" "}
// //                         Female
// //                       </label>
// //                       <label>
// //                         <input
// //                           type="radio"
// //                           name="gender"
// //                           value="Other"
// //                           checked={gender === "Other"}
// //                           onChange={(e) => setGender(e.target.value)}
// //                           className="mr-2"
// //                           disabled={!isEditing}
// //                           required
// //                         />{" "}
// //                         Others
// //                       </label>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label
// //                       htmlFor="dateOfBirth"
// //                       className="block text-md font-semibold text-gray-700"
// //                     >
// //                       Date of Birth
// //                       <input
// //                         id="dateOfBirth"
// //                         type="date"
// //                         value={dateOfBirth}
// //                         onChange={(e) => setDateOfBirth(e.target.value)}
// //                         className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
// //                         max={new Date().toISOString().split("T")[0]} // Set max date to today
// //                         disabled={!isEditing}
// //                         required
// //                       />
// //                       {dateOfBirth ===
// //                         new Date().toISOString().split("T")[0] && (
// //                         <p className="text-red-500 text-sm mt-2">
// //                           Valid date of birth required
// //                         </p>
// //                       )}
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {/* Other Fields */}
// //                 <div className="grid grid-cols-2 gap-6 mt-6">
// //                   <input
// //                     type="email"
// //                     placeholder="Enter your Email ID"
// //                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     disabled={!isEditing}
// //                     value={userEmail}
// //                     onChange={(e) => setUserEmail(e.target.value)} // Update state
// //                     required
// //                   />
// //                   <input
// //                     type="tel"
// //                     placeholder="Enter your Mobile Number"
// //                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //                     disabled={true}
// //                     value={userMobile}
// //                     onChange={(e) => setUserMobile(e.target.value)} // Update state
// //                     required
// //                   />
// //                 </div>

// //                 {/* Save Button */}
// //                 {isEditing && (
// //                   <div className="mt-6">
// //                     <button
// //                       type="submit"
// //                       className="bg-bio-green text-white px-4 py-2 rounded hover:bg-green-500"
// //                     >
// //                       Save
// //                     </button>
// //                   </div>
// //                 )}
// //               </form>
// //             </div>

// //             {/* Address Section */}
// //             <AddressSection />

// //             {/* FAQs Section */}
// //             <FaqAccordion />
// //           </main>
// //         )
// //       )}
// //     </div>
// //   );
// // };

// // export default ProfilePage;

// import React, { useState, useEffect } from "react";
// import useDeviceDetect from "../../../CustomHooks/useDeviceDetect";
// import DeactivationConfirmation from "../Deactivation/Deactivation";
// import { useSelector } from "react-redux";
// import FaqAccordion from "./FAQ";
// import axios from "axios";
// import { selectAccessToken } from "../../../redux/User/verificationSlice";
// import { useSnackbar } from "notistack";
// import { TrashIcon } from "lucide-react";

// const ProfilePage = () => {
//   const accessToken = useSelector(selectAccessToken);

//   const { isDesktop } = useDeviceDetect();
//   const [showDeactivation, setShowDeactivation] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [dateOfBirth, setDateOfBirth] = useState("");
//   const [gender, setGender] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const storeName = useSelector(
//     (state) => state.verification?.user?.first_name
//   );
//   const storeUserId = useSelector((state) => state.verification?.user?.id);
//   console.log(storeName, "===========verify  =====", storeUserId);

//   const storeMobile = useSelector((state) => state.verification?.user?.mobile);
//   console.log(storeMobile);

//   const [userName, setUserName] = useState(storeName);
//   const [lastuserName, setlastUserName] = useState("");
//   const [userMobile, setUserMobile] = useState(storeMobile);

//   const [address, setAddresses] = useState([]);
//   const [loading, setLoading] = useState(true); // To show a loading state
//   const [error, setError] = useState(null); // To handle errors

//   // const [storeUserId, setStoreUserId] = useState(storeUserId);
//   const { enqueueSnackbar } = useSnackbar();
//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleCancelClick = () => {
//     setIsEditing(false);
//   };

//   // const [address, setAddresses] = useState([
//   //   {
//   //     firstName: "Mallikjan",
//   //     lastName: "Barrodwale",
//   //     phone: "8884981840",
//   //     address: "Mahalaxmi layout Nehru Nagar, Gokul road, Hubli - 58820",
//   //     city: "Hubli",
//   //     state: "Karnataka",
//   //     pinCode: "58820",
//   //     isHome: true,
//   //     isWork: false,
//   //   },
//   // ]);

//   // const handleEdit = (index) => {
//   //   setAddresses(
//   //     address.map((address, i) =>
//   //       i === index ? { ...address, isEditing: true } : address
//   //     )
//   //   );
//   // };

//   // const handleCancelEdit = (index) => {
//   //   setAddresses(
//   //     address.map((address, i) =>
//   //       i === index ? { ...address, isEditing: false } : address
//   //     )
//   //   );
//   // };

//   // const handleSaveEdit = async (index) => {
//   //   try {
//   //     const editedAddress = address[index];

//   //     const addressData = {
//   //       address: editedAddress.address,
//   //       state: editedAddress.state,
//   //       city: editedAddress.city,
//   //       pincode: editedAddress.pinCode,
//   //       is_default: false,
//   //       address_type: editedAddress.isWork ? "Work" : "Home"
//   //     };

//   //     const response = await axios.post(
//   //       `${process.env.REACT_APP_API_URL}/account/address/`,
//   //       addressData, // Pass data as the second argument
//   //       {
//   //         headers: {
//   //           'Content-Type': 'application/json',
//   //           Authorization: `Bearer ${accessToken}`, // Include the authentication token
//   //         },
//   //       }
//   //     );

//   //     if (!response.ok) {
//   //       throw new Error('Failed to save address');
//   //     }

//   //     const savedAddress = await response.json();

//   //     setAddresses(
//   //       address.map((addr, i) =>
//   //         i === index
//   //           ? {
//   //               ...addr,
//   //               isEditing: false,
//   //               ...savedAddress
//   //             }
//   //           : addr
//   //       )
//   //     );

//   //     // toast.success('Address saved successfully');
//   //     console.log('Address saved successfully');

//   //   } catch (error) {
//   //     console.error('Error saving address:', error);
//   //     // toast.error('Failed to save address. Please try again.');
//   //   }
//   // };

//   // const handleAddressChange = (index, field, value) => {
//   //   setAddresses(
//   //     address.map((address, i) =>
//   //       i === index ? { ...address, [field]: value } : address
//   //     )
//   //   );
//   // };

//   // const handleAddNewAddress = () => {
//   //   setAddresses([
//   //     ...address,
//   //     {
//   //       firstName: "",
//   //       lastName: "",
//   //       phone: "",
//   //       address: "",
//   //       city: "",
//   //       state: "",
//   //       pinCode: "",
//   //       isHome: false,
//   //       isWork: false,
//   //       isEditing: true,
//   //     },
//   //   ]);
//   // };

//   // Fetch all user addresses
//   const fetchAddresses = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/account/address/`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (response.status === 200 && response.data.data.address) {
//         const addresses = response.data.data.address.map((addr) => ({
//           ...addr,
//           isEditing: false, // Add editing state
//           isHome: addr.address_type === "Home",
//           isWork: addr.address_type === "Work",
//         }));
//         setAddresses(addresses);
//       }
//     } catch (err) {
//       console.error("Failed to fetch addresses:", err);
//       setError("Failed to fetch addresses. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch a particular address by ID
//   const fetchAddressById = async (id) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/account/address/${id}/`,
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (response.status === 200 && response.data.data.address) {
//         console.log("Particular Address:", response.data.data.address);
//       }
//     } catch (err) {
//       console.error("Failed to fetch address:", err);
//     }
//   };
//   const fetchProfileData = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/account/profile/`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       const profileData = response.data.data;
//       setUserName(profileData.first_name || "");
//       setlastUserName(profileData.last_name || "");
//       setUserEmail(profileData.email || "unknown@example.com");
//       setDateOfBirth(profileData.date_of_birth || "2000-01-01");
//       setGender(profileData.gender || "Other");
//       setUserMobile(profileData.mobile || "");
//     } catch (error) {
//       console.error("Error fetching user profile:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAddresses();
//     fetchProfileData();
//   }, []);

//   const handleEdit = (index) => {
//     fetchAddressById(address[index].id);
//     setAddresses(
//       address.map((addr, i) =>
//         i === index ? { ...addr, isEditing: true } : addr
//       )
//     );
//   };

//   const handleCancelEdit = (index) => {
//     setAddresses(
//       address.map((addr, i) =>
//         i === index ? { ...addr, isEditing: false } : addr
//       )
//     );
//   };

//   const handleSaveEdit = async (index) => {
//     console.log("handleSaveEdit", index);
//     try {
//       const editedAddress = address[index];
//       const addressData = {
//         first_name: editedAddress.firstName,
//         last_name: editedAddress.lastName,
//         phone: editedAddress.phone,
//         address: editedAddress.address,
//         state: editedAddress.state,
//         city: editedAddress.city,
//         pincode: editedAddress.pincode,
//         is_default: false,
//         address_type: editedAddress.isWork ? "Work" : "Home",
//       };

//       const response = await axios.post(
//         "http://www.dev.back.biotechmaali.com:8000/account/address/",
//         addressData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (response.status === 201) {
//         setAddresses(
//           address.map((addr, i) =>
//             i === index
//               ? {
//                   ...addr,
//                   isEditing: false,
//                   ...response.data, // Update with response data
//                 }
//               : addr
//           )
//         );
//         console.log("Address saved successfully");
//       }
//     } catch (error) {
//       console.error("Error saving address:", error);
//     }
//   };

//   const handleSaveEditChanges = async (index) => {
//     console.log("handleSaveEdit", index);
//     try {
//       const editedAddress = address[index];
//       const addressData = {
//         address_id: editedAddress.id, // Add the address ID here
//         first_name: editedAddress.firstName,
//         last_name: editedAddress.lastName,
//         address: editedAddress.address,
//         city: editedAddress.city,
//         state: editedAddress.state,
//         address_type: editedAddress.isWork ? "Work" : "Home",
//         pincode: editedAddress.pincode,
//       };

//       const response = await axios.patch(
//         "http://www.dev.back.biotechmaali.com:8000/account/address/", // Use PATCH method
//         addressData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         setAddresses(
//           address.map((addr, i) =>
//             i === index
//               ? {
//                   ...addr,
//                   isEditing: false,
//                   ...response.data, // Update with response data
//                 }
//               : addr
//           )
//         );
//         console.log("Address saved successfully");
//       }
//     } catch (error) {
//       console.error("Error saving address:", error);
//     }
//   };

//   // const handleAddressChange = (index, field, value) => {
//   //   setAddresses(
//   //     address.map((addr, i) =>
//   //       i === index ? { ...addr, [field]: value } : addr
//   //     )
//   //   );
//   // };
//   const handleAddressChange = (index, field, value) => {
//     setAddresses(
//       address.map((addr, i) =>
//         i === index
//           ? {
//               ...addr,
//               [field]: field === "pincode" ? Number(value) || "" : value, // Convert pincode to a number
//             }
//           : addr
//       )
//     );
//   };

//   const handleAddNewAddress = () => {
//     setAddresses([
//       ...address,
//       {
//         first_name: "",
//         last_name: "",
//         phone: "",
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         isHome: false,
//         isWork: false,
//         isEditing: true,
//       },
//     ]);
//   };

//   // const handleDelete = (index) => {
//   //   setAddresses(address.filter((_, i) => i !== index));
//   // };
//   // const handleDelete = (index, addressId, isDefault) => {
//   //   if (isDefault) {
//   //     alert('You cannot delete the default address.');
//   //     return;
//   //   }

//   // Send the DELETE request to the API
//   const handleDelete = async (index, addressId, accessToken) => {
//     try {
//       const response = await axios.delete(
//         `http://www.dev.back.biotechmaali.com:8000/account/address/${addressId}/`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       if (response.status === 200) {
//         // If delete is successful, update local state
//         setAddresses(address.filter((_, i) => i !== index));
//       }
//     } catch (error) {
//       console.error("Error deleting address:", error);
//       alert("Failed to delete address");
//     }
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   // +++++++++++++++++++++++++++ProfileAPI +++++++++++++++++++++++++++++++
//   // const updateUserProfile = async () => {
//   //   try {
//   //     // Perform the GET request
//   //     const response = await axios.get(
//   //       `${process.env.REACT_APP_API_URL}/account/profile/`,

//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${accessToken}`, // Include authentication token if required
//   //         },
//   //       }
//   //     );

//   //     // Handle success response
//   //     console.log("User udated:", response.data);
//   //   } catch (error) {
//   //     // Handle error response
//   //     console.error("Error updating user:", error);
//   //   }
//   // };

//   // const handleProfileSubmit = async (e) => {
//   //   e.preventDefault();

//   //   const payload = {
//   //     profile: {
//   //       id: storeUserId, // Ensure ID is provided
//   //       first_name: userName.split(" ")[0], // Default to empty string if null
//   //       last_name: lastuserName || "", // Default value
//   //       email: userEmail || "unknown@example.com", // Default email
//   //       date_of_birth: dateOfBirth || "2000-01-01", // Default date
//   //       gender: gender || "Other", // Default gender
//   //       mobile: userMobile || "", // Default mobile
//   //     },
//   //   };

//   //   try {
//   //     // Perform the PATCH request
//   //     const response = await axios.patch(
//   //       `${process.env.REACT_APP_API_URL}/account/profile/`,
//   //       payload,
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //           Authorization: `Bearer ${accessToken}`, // Include authentication token if required
//   //         },
//   //       }
//   //     );

//   //     console.log("User updated:", response.data);
//   //     enqueueSnackbar("Your profile is updated successfully!", {
//   //       variant: "success",
//   //     });
//   //   } catch (error) {
//   //     // Handle error response
//   //     console.error("Error:", error);
//   //     // Show error snackbar
//   //     enqueueSnackbar("Failed to update profile. Please try again.", {
//   //       variant: "error",
//   //     });
//   //   }
//   // };

//   // =================

//   const handleProfileSubmit = async (e) => {
//     e.preventDefault();
  
//     const payload = {
//       profile: {
//         id: storeUserId, 
//         first_name: userName.split(" ")[0] || "", 
//         last_name: lastuserName || "", 
//         email: userEmail || "unknown@example.com",
//         date_of_birth: dateOfBirth || "2000-01-01",
//         gender: gender || "Other",
//         mobile: userMobile || "",
//       },
//     };
  
//     try {
//       const response = await axios.patch(
//         `${process.env.REACT_APP_API_URL}/account/profile/`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );
  
//       console.log("User updated:", response.data);
//       enqueueSnackbar("Your profile is updated successfully!", {
//         variant: "success",
//       });
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       enqueueSnackbar("Failed to update profile. Please try again.", {
//         variant: "error",
//       });
//     }
//   };
  

//   return (
//     <div className="flex px-8">
//       {showDeactivation ? (
//         <DeactivationConfirmation onCancel={() => setShowDeactivation(false)} />
//       ) : (
//         isDesktop && (
//           <main className="flex-1 bg-white p-8">
//             <div className="border p-6 rounded-md shadow-md bg-white">
//               <h2 className="text-xl font-bold">Personal Information</h2>
//               <div className="text-right">
//                 {!isEditing ? (
//                   <p
//                     className="text-bio-green font-semibold cursor-pointer"
//                     onClick={handleEditClick}
//                   >
//                     Edit
//                   </p>
//                 ) : (
//                   <p
//                     className="text-red-600 font-semibold cursor-pointer"
//                     onClick={handleCancelClick}
//                   >
//                     Cancel
//                   </p>
//                 )}
//               </div>

//               {/* Form Fields */}
//               <form onSubmit={handleProfileSubmit}>
//                 {/* Name Fields */}
//                 <div className="grid grid-cols-2 gap-6 mt-6">
//                   <input
//                     type="text"
//                     placeholder="Enter your First Name"
//                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     disabled={!isEditing}
//                     value={userName}
//                     onChange={(e) => setUserName(e.target.value)} // Update state
//                     required
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter your Last Name"
//                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     disabled={!isEditing}
//                     value={lastuserName}
//                     onChange={(e) => setlastUserName(e.target.value)} // Update state
//                     required
//                   />
//                 </div>

//                 {/* Gender & Date of Birth Section */}
//                 <div className="grid grid-cols-2 gap-6 mt-6">
//                   <div>
//                     <label className="block font-semibold">Gender</label>
//                     <div className="flex space-x-4 mt-2">
//                       <label>
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Male"
//                           checked={gender === "Male"}
//                           onChange={(e) => setGender(e.target.value)}
//                           className="mr-2"
//                           disabled={!isEditing}
//                           required
//                         />{" "}
//                         Male
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Female"
//                           checked={gender === "Female"}
//                           onChange={(e) => setGender(e.target.value)}
//                           className="mr-2"
//                           disabled={!isEditing}
//                           required
//                         />{" "}
//                         Female
//                       </label>
//                       <label>
//                         <input
//                           type="radio"
//                           name="gender"
//                           value="Other"
//                           checked={gender === "Other"}
//                           onChange={(e) => setGender(e.target.value)}
//                           className="mr-2"
//                           disabled={!isEditing}
//                           required
//                         />{" "}
//                         Others
//                       </label>
//                     </div>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="dateOfBirth"
//                       className="block text-md font-semibold text-gray-700"
//                     >
//                       Date of Birth
//                       <input
//                         id="dateOfBirth"
//                         type="date"
//                         value={dateOfBirth}
//                         onChange={(e) => setDateOfBirth(e.target.value)}
//                         className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
//                         max={new Date().toISOString().split("T")[0]} // Set max date to today
//                         disabled={!isEditing}
//                         required
//                       />
//                       {dateOfBirth ===
//                         new Date().toISOString().split("T")[0] && (
//                         <p className="text-red-500 text-sm mt-2">
//                           Valid date of birth required
//                         </p>
//                       )}
//                     </label>
//                   </div>
//                 </div>

//                 {/* Other Fields */}
//                 <div className="grid grid-cols-2 gap-6 mt-6">
//                   <input
//                     type="email"
//                     placeholder="Enter your Email ID"
//                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     disabled={!isEditing}
//                     value={userEmail}
//                     onChange={(e) => setUserEmail(e.target.value)} // Update state
//                     required
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Enter your Mobile Number"
//                     className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                     disabled={true}
//                     value={userMobile}
//                     onChange={(e) => setUserMobile(e.target.value)} // Update state
//                     required
//                   />
//                 </div>

//                 {/* Save Button */}
//                 {isEditing && (
//                   <div className="mt-6">
//                     <button
//                       type="submit"
//                       className="bg-bio-green text-white px-4 py-2 rounded hover:bg-green-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 )}
//               </form>
//             </div>

//             {/* Address Section */}

//             <div className="mt-6">
//               <h3 className="text-lg font-bold mb-4">Address</h3>
//               {address.map((address, index) => (
//                 <div
//                   key={index}
//                   className="p-4 mb-4 border rounded-lg shadow-md"
//                 >
//                   {address.isEditing ? (
//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="font-bold">Edit Address</span>
//                         <button
//                           className="text-red-500 hover:text-red-700 font-semibold"
//                           onClick={() => handleCancelEdit(index)}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input
//                           type="text"
//                           placeholder="First Name"
//                           value={address.firstName || ""}
//                           onChange={(e) =>
//                             handleAddressChange(
//                               index,
//                               "firstName",
//                               e.target.value
//                             )
//                           }
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         />
//                         <input
//                           type="text"
//                           placeholder="Last Name"
//                           value={address.lastName || ""}
//                           onChange={(e) =>
//                             handleAddressChange(
//                               index,
//                               "lastName",
//                               e.target.value
//                             )
//                           }
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         />
//                         <input
//                           type="text"
//                           placeholder="Apartment, Suite, etc. (Optional)"
//                           value={address.address || ""}
//                           onChange={(e) =>
//                             handleAddressChange(
//                               index,
//                               "address",
//                               e.target.value
//                             )
//                           }
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         />
//                         <input
//                           type="text"
//                           placeholder="City"
//                           value={address.city || ""}
//                           onChange={(e) =>
//                             handleAddressChange(index, "city", e.target.value)
//                           }
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         />
//                         <select
//                           value={address.state || ""}
//                           onChange={(e) =>
//                             handleAddressChange(index, "state", e.target.value)
//                           }
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         >
//                           <option value="" disabled>
//                             Select State
//                           </option>
//                           <option value="Karnataka">Karnataka</option>
//                           <option value="Maharashtra">Maharashtra</option>
//                           <option value="Tamil Nadu">Tamil Nadu</option>
//                           <option value="Kerala">Kerala</option>
//                           <option value="Delhi">Delhi</option>
//                           <option value="Gujarat">Gujarat</option>
//                           <option value="Rajasthan">Rajasthan</option>
//                           <option value="Punjab">Punjab</option>
//                           {/* Add more states */}
//                         </select>
//                         <input
//                           type="number"
//                           placeholder="PIN Code"
//                           value={address.pinCode || ""}
//                           maxLength={6}
//                           onChange={(e) => {
//                             const value = e.target.value.slice(0, 6); // Restrict to 6 digits
//                             handleAddressChange(index, "pinCode", value);
//                           }}
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                           required
//                         />
//                         <input
//                           type="tel"
//                           placeholder="Phone"
//                           value={address.phone || ""}
//                           maxLength={10}
//                           inputMode="numeric"
//                           pattern="[0-9]*"
//                           onChange={(e) => {
//                             const value = e.target.value.slice(0, 10); // Restrict to 10 digits
//                             handleAddressChange(index, "phone", value);
//                           }}
//                           className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2"
//                           required
//                         />
//                       </div>
//                       <div className="mt-4">
//                         <label className="block font-semibold">
//                           Address Type
//                         </label>
//                         <div className="flex space-x-4 mt-2">
//                           <label>
//                             <input
//                               type="checkbox"
//                               checked={address.isHome || false}
//                               onChange={(e) =>
//                                 handleAddressChange(
//                                   index,
//                                   "isHome",
//                                   e.target.checked
//                                 )
//                               }
//                               className="mr-2"
//                             />
//                             Home (All day Delivery)
//                           </label>
//                           <label>
//                             <input
//                               type="checkbox"
//                               checked={address.isWork || false}
//                               onChange={(e) =>
//                                 handleAddressChange(
//                                   index,
//                                   "isWork",
//                                   e.target.checked
//                                 )
//                               }
//                               className="mr-2"
//                             />
//                             Work (9am - 6pm)
//                           </label>
//                         </div>
//                       </div>
//                       <div className="flex space-x-4 mt-4">
//                         <button
//                           className="bg-bio-green text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
//                           onClick={
//                             isEditing
//                               ? () => handleSaveEditChanges(index)
//                               : () => handleSaveEdit(index)
//                           }
//                         >
//                           {isEditing ? "Save Address" : "Save Address"}
//                         </button>

//                         {/* <button
//                           className="bg-bio-green text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
//                           onClick={() => handleSaveEdit(index)}
//                         >
//                           Save
//                         </button> */}
//                         <button
//                           className="border border-bio-green text-bio-green font-semibold py-2 px-4 rounded hover:bg-green-100"
//                           onClick={() => handleCancelEdit(index)}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   ) : (
//                     <div>
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="font-bold">{`${address.first_name} ${address.last_name}`}</span>

//                         <div className="flex justify-end space-x-4">
//                           <button
//                             className="text-bio-green hover:text-bio-green font-semibold"
//                             onClick={() => handleEdit(index)}
//                           >
//                             Edit
//                           </button>
//                           {/* <button
//                             className="text-red-600 hover:text-red-700 font-semibold flex items-center space-x-2"
//                             onClick={() => handleDelete(index)}
//                           >
//                             <TrashIcon className="h-5 w-5" /> 
//                           </button> */}
//                           <button
//                             className="text-red-600 hover:text-red-700 font-semibold flex items-center space-x-2"
//                             onClick={() =>
//                               handleDelete(index, address.id, accessToken)
//                             } // Pass address.id instead of addressId
//                           >
//                             <TrashIcon className="h-5 w-5" /> {/* Icon size */}
//                           </button>
//                         </div>
//                       </div>
//                       <p>{address.phone}</p>
//                       <p>{address.address}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <button
//                 onClick={handleAddNewAddress}
//                 className="flex items-center gap-2 mt-4 p-2 text-blue-500 font-semibold hover:text-blue-700"
//               >
//                 <span className="text-lg font-bold">+</span> Add New Address
//               </button>
//             </div>

//             {/* FAQs Section */}
//             <FaqAccordion />
//           </main>
//         )
//       )}
//     </div>
//   );
// };

// export default ProfilePage;
