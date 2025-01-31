// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"; // Import the icon
// import { FaStar } from "react-icons/fa";
// import ReactStars from "react-rating-stars-component";
// import testinomial from "../../../src/Assets/Testinomial image.png";

// const Testimonials = () => {
//   const rating = 4.5;

//   return (
//     <div className="bg-white p-6 rounded-lg mx-auto w-full max-w-full h-auto mb-8 mt-20 px-4 sm:px-10 md:px-20">
//       <div className="flex flex-col sm:flex-row">
//         <div className="flex-1">
//           <div className="flex items-center space-x-4 mb-4">
//             {/* Avatar */}
//             <img
//               className="w-12 h-12 rounded-full"
//               src={testinomial}
//               alt="User avatar"
//             />
//             <div>
//               <h4 className="font-semibold text-lg">Karanth.</h4>
//               <p className="text-sm text-gray-600">Online Buyer</p>
//             </div>
//             {/* Icon */}
//             <FontAwesomeIcon
//               icon={faQuoteRight} // Use the imported icon
//               className="text-bio-green text-6xl  "
//             />
//           </div>

//           <hr className="w-full border-t mb-4" />

//           <div className="p-4 w-full">
//             <ReactStars
//               count={5}
//               value={rating}
//               edit={false}
//               size={20}
//               activeColor="bio-green"
//               char={<FaStar />}
//             />

//             <p className="text-gray-700 text-sm leading-relaxed mt-2">
//               Introducing our latest client testimonial video where one of our
//               satisfied customers shares their experience with our terrace
//               garden setup service. Watch as they talk about how our team of
//               experts worked closely with them to create a beautiful and
//               sustainable garden, customized to their specific needs and
//               preferences. From initial consultation to final setup, our client
//               highlights how our service exceeded their expectations and
//               transformed their terrace space into a green oasis.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// import React from "react";
// import { FaQuoteRight } from "react-icons/fa";
// const Testimonial = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg mx-auto w-full max-w-full h-auto mb-8 mt-20 px-4 sm:px-10 md:px-20">
//       {/* User Info and Quote Section */}
//       <div className="flex items-center justify-between mb-4">
//         {/* Progress Bar */}

//         {/* User Info */}
//         <div className="text-start w-1/3">
//           <h3 className="text-lg font-semibold">Malikjan M</h3>
//           <p className="text-sm text-gray-500">Online Buyer</p>
//         </div>

//         <div className="flex justify-center items-center gap-1 w-1/3">
//           <div className="w-6 h-1 bg-gray-300 rounded"></div>
//           <div className="w-6 h-1 bg-gray-300 rounded"></div>
//           <div className="w-6 h-1 bg-green-500 rounded"></div>
//         </div>

//         {/* Quote Icon */}
//         <div className="w-1/3 flex justify-end relative -top-3">
//           <FaQuoteRight className="text-green-600 text-5xl font-semibold" />
//         </div>
//       </div>

//       {/* Testimonial Text */}
//       <p className="text-gray-700 text-md leading-relaxed">
//         Introducing our latest client testimonial video where one of our
//         satisfied customers shares their experience with our terrace garden
//         setup service. Watch as they talk about how our team of experts worked
//         closely with them to create a beautiful and sustainable garden,
//         customized to their specific needs and preferences. From initial
//         consultation to final setup, our client highlights how our service
//         exceeded their expectations and transformed their terrace space into a
//         green oasis.
//       </p>
//     </div>
//   );
// };

// export default Testimonial;

// import React, { useState, useEffect } from "react";
// import { FaQuoteRight } from "react-icons/fa";

// const testimonials = [
//   {
//     name: "Malikjan M",
//     role: "Online Buyer",
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//   },
//   {
//     name: "Anjali K",
//     role: "Happy Customer",
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//   },
//   {
//     name: "Ravi S",
//     role: "Satisfied Client",
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//   },
// ];

// const Testimonial = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change testimonial every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-lg mx-auto w-full max-w-full h-auto mb-8 mt-20 px-4 sm:px-10 md:px-20">
//       {/* User Info and Quote Section */}
//       <div className="flex items-center justify-between mb-4">
//         {/* User Info */}
//         <div className="text-start w-1/3">
//           <h3 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h3>
//           <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
//         </div>

//         {/* Progress Bar */}
//         <div className="flex justify-center items-center gap-1 w-1/3">
//           {testimonials.map((_, index) => (
//             <div
//               key={index}
//               className={`w-6 h-1 rounded ${
//                 index === currentTestimonial ? "bg-green-500" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>

//         {/* Quote Icon */}
//         <div className="w-1/3 flex justify-end relative -top-3">
//           <FaQuoteRight className="text-green-600 text-5xl font-semibold" />
//         </div>
//       </div>

//       {/* Testimonial Text */}
//       <p className="text-gray-700 text-md leading-relaxed">
//         {testimonials[currentTestimonial].text}
//       </p>
//     </div>
//   );
// };

// export default Testimonial;

// import React, { useState, useEffect } from "react";
// import { FaQuoteRight } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";

// // Testimonial Data
// const testimonials = [
//   {
//     name: "Malikjan M",
//     role: "Online Buyer",
//     image: "https://via.placeholder.com/50", // Replace with actual image URL
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//     rating: 5,
//   },
//   {
//     name: "Anjali K",
//     role: "Happy Customer",
//     image: "https://via.placeholder.com/50", // Replace with actual image URL
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//     rating: 4,
//   },
//   {
//     name: "Ravi S",
//     role: "Satisfied Client",
//     image: "https://via.placeholder.com/50", // Replace with actual image URL
//     text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
//     rating: 4,
//   },
// ];

// const Testimonial = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTestimonial((prev) =>
//         prev === testimonials.length - 1 ? 0 : prev + 1
//       );
//     }, 5000); // Change testimonial every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//  <div className="m-8">
//      <div className="bg-gray-100 p-6  mx-auto w-full  mb-8  mt-20 shadow-lg">
//       {/* Header Section */}
//       <div className="flex items-center justify-between mb-6">
//         {/* User Info */}
//         <div className="flex items-center gap-4">
//           <img
//             src={testimonials[currentTestimonial].image}
//             alt={testimonials[currentTestimonial].name}
//             className="w-12 h-12 rounded-full"
//           />
//           <div>
//             <h3 className="text-lg font-semibold">
//               {testimonials[currentTestimonial].name}
//             </h3>
//             <p className="text-sm text-gray-500">
//               {testimonials[currentTestimonial].role}
//             </p>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="flex justify-center items-center gap-2">
//           {testimonials.map((_, index) => (
//             <div
//               key={index}
//               className={`w-6 h-1 rounded ${
//                 index === currentTestimonial ? "bg-green-500" : "bg-gray-300"
//               }`}
//             ></div>
//           ))}
//         </div>

//         {/* Quote Icon */}
//         <div className="flex justify-end">
//           <FaQuoteRight className="text-green-600 text-4xl font-semibold" />
//         </div>
//       </div>

//       {/* Star Rating */}
//       <div className="flex items-center mb-4">
//         {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
//           <FaStar key={index} className="text-green-500" />
//         ))}
//       </div>

//       {/* Testimonial Text */}
//       <p className="text-gray-700 text-md leading-relaxed">
//         {testimonials[currentTestimonial].text}
//       </p>
//     </div>
//  </div>
//   );
// };

// export default Testimonial;

import React, { useState, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

// Testimonial Data
const testimonials = [
  {
    name: "Malikjan M",
    role: "Online Buyer",
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/3ef25463-241c-425b-93b2-816065b61ff7/9d7291de-f849-4071-917b-ff200b756194.png", // Replace with actual image URL
    text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
    rating: 5,
  },
  {
    name: "Anjali K",
    role: "Happy Customer",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_limit/v1724992542/ai_generated_images/weigenxgckxweaoy48tm.png", // Replace with actual image URL
    text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
    rating: 4,
  },
  {
    name: "Ravi S",
    role: "Satisfied Client",
    image:
      "https://pplx-res.cloudinary.com/image/upload/t_limit/v1724992542/ai_generated_images/weigenxgckxweaoy48tm.png", // Replace with actual image URL
    text: "Introducing our latest client testimonial video where one of our satisfied customers shares their experience with our terrace garden setup service. Watch as they talk about how our team of experts worked closely with them to create a beautiful and sustainable garden, customized to their specific needs and preferences. From initial consultation to final setup, our client highlights how our service exceeded their expectations and transformed their terrace space into a green oasis.",
    rating: 4,
  },
];

const Testimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-8">
      <div className="p-6 w-full mt-15">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {testimonials[currentTestimonial].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 mt-24 md:w-8 md:h-2 rounded ${
                  index === currentTestimonial ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>

          {/* Quote Icon */}
          <div className="flex justify-end">
            <FaQuoteRight className="text-green-600 text-4xl font-semibold" />
          </div>
        </div>
        {/*        
        <div className="flex items-center mb-4">
          {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
            <FaStar key={index} className="text-green-500" />
          ))}
        </div> */}

        <div className="mb-4">
          <hr className="border-t-2 border-gray-300 mb-4" />{" "}
          {/* Horizontal line */}
          <div className="flex items-center">
            {[...Array(testimonials[currentTestimonial].rating)].map(
              (_, index) => (
                <FaStar key={index} className="text-green-500" />
              )
            )}
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 text-md leading-relaxed">
          {testimonials[currentTestimonial].text}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
