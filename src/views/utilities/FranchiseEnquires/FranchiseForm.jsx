// import React, { useState } from "react";
// import { useSnackbar } from "notistack";
// import franchiseenquires2 from "../../../Assets/FranchiseEnquires/franchiseenquires2.png";

// const FranchiseForm = () => {
//   const { enqueueSnackbar } = useSnackbar();
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     area: "",
//     address: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/franchise/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const result = await response.json();

//       if (response.ok) {
//         // Show success message in Snackbar
//         enqueueSnackbar("Franchise request submitted successfully!", { variant: "success" });

//         // Reset form data
//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//           area: "",
//           address: "",
//           message: "",
//         });
//       } else {
//         enqueueSnackbar("Error: " + result.message, { variant: "error" });
//       }
//     } catch (error) {
//       enqueueSnackbar("Error: " + error.message, { variant: "error" });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="w-full md:w-[1450px] mx-auto px-2">
//       <div className="flex flex-col md:flex-row items-stretch justify-between p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-10">
//         <div className="flex-1">
//           <img
//             src={franchiseenquires2}
//             alt="Franchise"
//             className="w-full h-[200px] md:h-full object-cover rounded-lg shadow-md"
//           />
//         </div>
//         <div className="flex-1 bg-white p-4 md:p-8 rounded-lg shadow-md">
//           <h1 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6">
//             Get a Franchise
//           </h1>
//           <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               className="w-full border border-gray-300 p-2 rounded-lg "
//             />
//             <input
//               type="number"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               placeholder="Contact Number"
//               className="w-full border border-gray-300 p-2 rounded-lg"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               className="w-full border border-gray-300 p-2 rounded-lg"
//             />
//             <input
//               type="text"
//               name="area"
//               value={formData.area}
//               onChange={handleChange}
//               placeholder="Area In Which You Want To Open"
//               className="w-full border border-gray-300 p-2 rounded-lg"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="w-full border border-gray-300 p-2 rounded-lg"
//             />
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Message"
//               className="w-full border border-gray-300 p-2 rounded-lg"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "SEND"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FranchiseForm;



import React, { useState } from "react";
import { useSnackbar } from "notistack";
import franchiseenquires2 from "../../../Assets/FranchiseEnquires/franchiseenquires2.png";

const FranchiseForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    area: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/franchise/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        enqueueSnackbar("Franchise request submitted successfully!", { variant: "success" });

        setFormData({
          name: "",
          mobile: "",
          email: "",
          area: "",
          address: "",
          message: "",
        });
      } else {
        enqueueSnackbar("Error: " + result.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Error: " + error.message, { variant: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full md:w-[1450px] mx-auto px-2">
      <div className="flex flex-col md:flex-row items-stretch justify-between p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex-1">
          <img
            src={franchiseenquires2}
            alt="Franchise"
            className="w-full h-[200px] md:h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="flex-1 bg-white p-4 md:p-8 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-center  md:mb-6">
            Get a Franchise
          </h1>
          <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Area In Which You Want To Open"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
           <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Message"
  className="w-full border border-gray-300 p-2 rounded-lg"
  rows="7" // Adjust the number of rows for height
  style={{ resize: "vertical", minHeight: "150px" }} // Prevent horizontal resizing and set minimum height
  required
/>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
