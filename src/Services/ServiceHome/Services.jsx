// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Service Card Component
// const ServiceCard = ({ image, title, heading }) => {
//   // If the image URL is relative, prepend base API URL
//   const imageURL = `${process.env.REACT_APP_API_URL}${image}`;

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden font-sans">
//       <img className="w-full h-70 object-cover" src={imageURL} alt={title} />
//       <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">{title}</h3>
//       <p className="text-center text-gray-600 mt-2">{heading}</p>
//     </div>
//   );
// };

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [services, setServices] = useState([]);

//   // Function to fetch services data
//   const fetchServices = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/services/service_list/`);
//       console.log(response.data); // Log the response to verify the data structure

//       setServices(response.data); // Assuming the API response is an array of services
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // Navigation functions
//   const goToNextService = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//   };

//   const goToPreviousService = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
//   };

//   return (
//     <section className="bg-white-100 py-12 m-8 font-sans">
//       <div className="mx-auto px-0">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-start">Services</h2>

//         {/* Desktop View */}
//         <div className="hidden md:block">
//           <div className="flex justify-between space-x-4">
//             {services.map((service, index) => (
//               <div key={index} className="w-full">
//                 <ServiceCard
//                   image={service.Image} // Make sure the key for image is correct
//                   title={service.title}
//                   heading={service.Heading}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Arrow and View All Section */}
//           <div className="flex justify-center items-center mt-6 space-x-4">
//             <button className="bg-white md:w-[40px] h-[40px] flex items-center justify-center rounded-full border">
//               <span className="text-bio-green">
//                 <FaAngleLeft />
//               </span>
//             </button>

//             <a href="/services" className="bg-bio-green text-white px-6 py-2 rounded">
//               View All
//             </a>

//             <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border">
//               <span className="text-bio-green">
//                 <FaAngleRight />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="block md:hidden">
//           <Swiper
//             spaceBetween={16}
//             slidesPerView="auto"
//             centeredSlides={true}
//             loop={true}
//             onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
//             className="my-6"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <div className="min-w-[100px] mx-2">
//                   <ServiceCard
//                     image={service.Image} // Make sure the key for image is correct
//                     title={service.title}
//                     heading={service.Heading}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Arrow and View All Section */}
//           <div className="flex justify-center items-center mt-6 space-x-4">
//             <button
//               className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//               onClick={goToPreviousService}
//             >
//               <span className="text-bio-green">
//                 <FaAngleLeft />
//               </span>
//             </button>

//             <Link to="/services" className="bg-bio-green text-white px-6 py-2 rounded">
//               View All
//             </Link>

//             <button
//               className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//               onClick={goToNextService}
//             >
//               <span className="text-bio-green">
//                 <FaAngleRight />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// =========================================================================================================================
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Service Card Component - Separate Image and Text
// const ServiceCard = ({ image, title, heading }) => {
//   // If the image URL is relative, prepend base API URL
//   const imageURL = `${process.env.REACT_APP_API_URL}${image}`;

//   return (
//     <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden font-sans">
//       {/* Image Section */}
//       <div className="w-full">
//         <img
//           className="w-full h-70 object-cover"
//           src={imageURL}
//           alt={title}
//         />
//       </div>

//       {/* Text Section */}
//       <div className="p-4 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//         <p className="text-gray-600 mt-2">{heading}</p>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const [services, setServices] = useState([]);

//   // Function to fetch services data
//   const fetchServices = async () => {
//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/services/service_list/`);
//       console.log(response.data); // Log the response to verify the data structure

//       setServices(response.data); // Assuming the API response is an array of services
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   return (
//     <section className="bg-white-100 py-12 m-8 font-sans">
//       <div className="mx-auto px-0">
//         <h2 className="text-3xl font-bold text-gray-800 mb-12 text-start">Services</h2>

//         {/* Desktop View */}
//         <div className="hidden md:block">
//           <div className="flex justify-between space-x-4">
//             {services.map((service, index) => (
//               <div key={index} className="w-full">
//                 <ServiceCard
//                   image={service.Image} // Ensure this matches your API's response key
//                   title={service.title}
//                   heading={service.Heading}
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Arrow and View All Section */}
//           <div className="flex justify-center items-center mt-6 space-x-4">
//             <button className="bg-white md:w-[40px] h-[40px] flex items-center justify-center rounded-full border">
//               <span className="text-bio-green">
//                 <FaAngleLeft />
//               </span>
//             </button>

//             <Link to="/services" className="bg-bio-green text-white px-6 py-2 rounded">
//               View All
//             </Link>

//             <button className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border">
//               <span className="text-bio-green">
//                 <FaAngleRight />
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* Mobile View */}
//         <div className="block md:hidden">
//           <Swiper
//             spaceBetween={16}
//             slidesPerView="auto"
//             centeredSlides={true}
//             loop={true}
//             className="my-6"
//           >
//             {services.map((service, index) => (
//               <SwiperSlide key={index}>
//                 <div className="min-w-[100px] mx-2">
//                   <ServiceCard
//                     image={service.Image} // Ensure this matches your API's response key
//                     title={service.title}
//                     heading={service.Heading}
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Arrow and View All Section */}
//           <div className="flex justify-center items-center mt-6 space-x-4">
//             <button
//               className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//             >
//               <span className="text-bio-green">
//                 <FaAngleLeft />
//               </span>
//             </button>

//             <Link to="/services" className="bg-bio-green text-white px-6 py-2 rounded">
//               View All
//             </Link>

//             <button
//               className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//             >
//               <span className="text-bio-green">
//                 <FaAngleRight />
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // Service Card Component
// const ServiceCard = ({ image, title, heading }) => {
//   // If the image URL is relative, prepend base API URL
//   const imageURL = `${process.env.REACT_APP_API_URL}${image}`;

//   return (
//     <div className="w-full  rounded-lg overflow-hidden font-sans">
//       <img className="w-full h-auto object-cover" src={imageURL} alt={title} />
//       <h3 className="text-xl font-semibold text-center text-gray-800 mt-4 ">
//         {title}
//       </h3>
//       <p className="text-center text-gray-600 mt-2 ">{heading}</p>
//     </div>
//   );
// };

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Function to fetch services data
//   const fetchServices = async () => {
//     try {
//       setLoading(true); // Set loading to true before fetching data
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/services/publicservice_list/`
//       );
//       // console.log(response.data); // Log the response to verify the data structure

//       setServices(response?.data); // Assuming the API response is an array of services
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     } finally {
//       setLoading(false); // Set loading to false after fetching data
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // Navigation functions
//   const goToNextService = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
//   };

//   const goToPreviousService = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + services.length) % services.length
//     );
//   };

//   return (
//     <section className="bg-white-100 py-12 m-8 font-sans">
//       <div className="mx-auto px-0">
//         <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">
//           Services
//         </h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="loader border-t-4 border-b-4 border-bio-green rounded-full w-16 h-16 animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             {/* Desktop View */}
//             <div className="hidden md:block">
//               <div className="flex justify-between space-x-4">
//                 {services.map((service, index) => (
//                   <div key={index} className="w-full flex flex-col ">
//                     {/* Image in a separate div */}
//                     <ServiceCard
//                       image={service.Image} // Make sure the key for image is correct
//                     />

//                     {/* Title and Heading in a separate card */}
//                     <div className="w-full p-4 rounded-lg">
//                       <h3 className="text-lg font-bold text-center">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm text-center text-gray-600">
//                         {service.Heading}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Arrow and View All Section */}

//               <div className="flex justify-center mt-4">
//                 <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//                   <span className="text-bio-green">
//                     <FaAngleLeft />
//                   </span>
//                 </button>
//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>
//                 <button className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border">
//                   <span className="text-bio-green">
//                     <FaAngleRight />
//                   </span>
//                 </button>
//               </div>
//             </div>

//             {/* Mobile View */}
//             <div className="block md:hidden">
//               <Swiper
//                 spaceBetween={16}
//                 slidesPerView="auto"
//                 centeredSlides={true}
//                 loop={true}
//                 onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
//                 className="my-6"
//               >
//                 {services.map((service, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="min-w-[100px] mx-2">
//                       <ServiceCard
//                         image={service.Image} // Make sure the key for image is correct
//                         title={service.title}
//                         heading={service.Heading}
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               {/* Arrow and View All Section */}
//               <div className="flex justify-center items-center mt-6 space-x-4">
//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={goToPreviousService}
//                 >
//                   <span className="text-bio-green">
//                     <FaAngleLeft />
//                   </span>
//                 </button>

//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>

//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={goToNextService}
//                 >
//                   <span className="text-bio-green">
//                     <FaAngleRight />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const ServiceCard = ({ image, title, heading }) => {
//   const imageURL = `${process.env.REACT_APP_API_URL}${image}`;
//   return (
//     <div className="w-full rounded-lg overflow-hidden font-sans">
//       <img className="w-full h-auto object-cover" src={imageURL} alt={title} />
//       <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
//         {title}
//       </h3>
//       <p className="text-center text-gray-600 mt-2">{heading}</p>
//     </div>
//   );
// };

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/services/publicservice_list/`
//         );
//         setServices(response?.data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   return (
//     <section className="bg-white-100 py-12 m-8 font-sans">
//       <div className="mx-auto px-0">
//         <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">
//           Services
//         </h2>
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="loader border-t-4 border-b-4 border-bio-green rounded-full w-16 h-16 animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             <div className="hidden md:block">
//               <div className="flex justify-between space-x-4">
//                 {services.map((service, index) => (
//                   <ServiceCard
//                     key={index}
//                     image={service.Image}
//                     title={service.title}
//                     heading={service.Heading}
//                   />
//                 ))}
//               </div>
//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//                   onClick={() => swiperRef.current?.slidePrev()}
//                 >
//                   <FaAngleLeft className="text-bio-green" />
//                 </button>
//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>
//                 <button
//                   className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//                   onClick={() => swiperRef.current?.slideNext()}
//                 >
//                   <FaAngleRight className="text-bio-green" />
//                 </button>
//               </div>
//             </div>

//             <div className="block md:hidden">
//               <Swiper
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 spaceBetween={16}
//                 slidesPerView={1}
//                 centeredSlides={true}
//                 loop={true}
//                 className="my-6"
//               >
//                 {services.map((service, index) => (
//                   <SwiperSlide key={index}>
//                     <ServiceCard
//                       image={service.Image}
//                       title={service.title}
//                       heading={service.Heading}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               <div className="flex justify-center items-center mt-6 space-x-4">
//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={() => swiperRef.current?.slidePrev()}
//                 >
//                   <FaAngleLeft className="text-bio-green" />
//                 </button>

//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>

//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={() => swiperRef.current?.slideNext()}
//                 >
//                   <FaAngleRight className="text-bio-green" />
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services;


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const ServiceCard = ({ image, title, heading }) => {
//   const imageURL = `${process.env.REACT_APP_API_URL}${image}`;
//   return (
//     <div className="w-full rounded-lg overflow-hidden font-sans">
//       <img className="w-full h-auto object-cover" src={imageURL} alt={title} />
//       <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
//         {title}
//       </h3>
//       <p className="text-center text-gray-600 mt-2">{heading}</p>
//     </div>
//   );
// };

// const Services = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `${process.env.REACT_APP_API_URL}/services/publicservice_list/`
//         );
//         setServices(response?.data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   return (
//     <section className="bg-white-100 py-12 m-8 font-sans">
//       <div className="mx-auto px-0">
//         <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">
//           Services
//         </h2>
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <div className="loader border-t-4 border-b-4 border-bio-green rounded-full w-16 h-16 animate-spin"></div>
//           </div>
//         ) : (
//           <>
//             <div className="hidden md:block">
//               <Swiper
//                 modules={[Navigation]}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 spaceBetween={16}
//                 slidesPerView={3}
//                 centeredSlides={false}
//                 loop={true}
//                 navigation
//                 className="my-6"
//               >
//                 {services.map((service, index) => (
//                   <SwiperSlide key={index}>
//                     <ServiceCard
//                       image={service.Image}
//                       title={service.title}
//                       heading={service.Heading}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="flex justify-center mt-4">
//                 <button
//                   className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//                   onClick={() => swiperRef.current?.slidePrev()}
//                 >
//                   <FaAngleLeft className="text-bio-green" />
//                 </button>
//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>
//                 <button
//                   className="bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
//                   onClick={() => swiperRef.current?.slideNext()}
//                 >
//                   <FaAngleRight className="text-bio-green" />
//                 </button>
//               </div>
//             </div>

//             <div className="block md:hidden">
//               <Swiper
//                 modules={[Navigation]}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//                 spaceBetween={16}
//                 slidesPerView={1}
//                 centeredSlides={true}
//                 loop={true}
//                 navigation
//                 className="my-6"
//               >
//                 {services.map((service, index) => (
//                   <SwiperSlide key={index}>
//                     <ServiceCard
//                       image={service.Image}
//                       title={service.title}
//                       heading={service.Heading}
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               <div className="flex justify-center items-center mt-6 space-x-4">
//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={() => swiperRef.current?.slidePrev()}
//                 >
//                   <FaAngleLeft className="text-bio-green" />
//                 </button>

//                 <Link
//                   to="/services"
//                   className="bg-bio-green text-white px-6 py-2 rounded"
//                 >
//                   View All
//                 </Link>

//                 <button
//                   className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
//                   onClick={() => swiperRef.current?.slideNext()}
//                 >
//                   <FaAngleRight className="text-bio-green" />
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services; 


import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Updated imports
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ServiceCard = ({ image, title, heading }) => {
  const imageURL = `${process.env.REACT_APP_API_URL}${image}`;
  return (
    <div className="w-full rounded-lg overflow-hidden font-sans">
      <img className="w-full h-auto object-cover" src={imageURL} alt={title} />
      <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
        {title}
      </h3>
      <p className="text-center text-gray-600 mt-2">{heading}</p>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/services/publicservice_list/`
        );
        setServices(response?.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="bg-white-100 py-12 m-8 font-sans">
      <div className="mx-auto px-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-12 text-center">
          Services
        </h2>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader border-t-4 border-b-4 border-bio-green rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Desktop View */}
            <div className="hidden md:block">
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={16}
                slidesPerView={4}
                centeredSlides={false}
                loop={true}
                navigation={{
                  prevEl: ".prev-button", // Custom previous button
                  nextEl: ".next-button", // Custom next button
                }}
                className="my-6"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard
                      image={service.Image}
                      title={service.title}
                      heading={service.Heading}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center mt-4">
                <button
                  className="prev-button bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
                >
                  <FaChevronLeft className="text-bio-green" />
                </button>
                <Link
                  to="/services"
                  className="bg-bio-green text-white px-6 py-2 rounded"
                >
                  View All
                </Link>
                <button
                  className="next-button bg-white w-[30.24px] h-[30.24px] flex items-center justify-center rounded-full mx-1 border"
                >
                  <FaChevronRight className="text-bio-green" />
                </button>
              </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
              <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={16}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: ".prev-button", // Custom previous button
                  nextEl: ".next-button", // Custom next button
                }}
                className="my-6"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index}>
                    <ServiceCard
                      image={service.Image}
                      title={service.title}
                      heading={service.Heading}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-center items-center mt-6 space-x-4">
                <button
                  className="prev-button bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
                >
                  <FaChevronLeft className="text-bio-green" />
                </button>

                <Link
                  to="/services"
                  className="bg-bio-green text-white px-6 py-2 rounded"
                >
                  View All
                </Link>

                <button
                  className="next-button bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full border"
                >
                  <FaChevronRight className="text-bio-green" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
