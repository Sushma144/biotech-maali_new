// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         // Assuming the response data is an array of blogs
//         setBlogs(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching blog data:', error);
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true
//         }
//       }
//     ]
//   };

//   // Function to generate the full image URL
//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>
//         <button className="text-[#fff] bg-[#749F09] rounded-md py-2 px-4 font-semibold">
//           View All
//         </button>
//       </div>

//       <div className="hidden md:block"> {/* Hide for mobile view */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center font-sans">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-white overflow-hidden flex flex-col items-center justify-center">
//               <img
//                 src={getFullImageUrl(blog.image)}
//                 alt={blog.title}
//                 className="w-full h-70 object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//                 <a href={blog.link || '#'} className="text-blue-500 hover:underline inline-block">
//                   Read Now
//                 </a>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="md:hidden"> {/* Show slider for mobile view */}
//         <Slider {...sliderSettings}>
//           {blogs.map((blog) => (
//             <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center justify-center">
//               <picture>
//                 <source media="(max-width: 768px)" srcSet={getFullImageUrl(blog.image)} />
//                 <img src={getFullImageUrl(blog.image)} alt={blog.title} className="w-full h-auto md:h-50 object-cover" />
//               </picture>
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//                 <a href={blog.link || '#'} className="text-blue-500 hover:underline inline-block">
//                   Read Now
//                 </a>
//                </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         setBlogs(response.data); // Assuming the response data is an array of blogs
//       })
//       .catch((error) => {
//         console.error('Error fetching blog data:', error);
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   // Function to generate the full image URL
//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>
//         <button className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold">
//           View All
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"> {/* Center blog posts on large screens */}
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//           >
//             <img
//               src={getFullImageUrl(blog.image)}
//               alt={blog.title}
//               className="w-full h-60 object-cover" // Set fixed height for the image
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//               <p className="text-sm text-gray-600 mb-4">{blog.summary}</p> {/* Optional: Summary or description */}
//               <a
//                 href={blog.link || '#'}
//                 className="text-blue-500 hover:underline inline-block mt-2"
//               >
//                 Read Now
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import axios from 'axios';

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         setBlogs(response.data); // Assuming the response data is an array of blogs
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching blog data:', error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   // Function to generate the full image URL
//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>
//         <button className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold">
//           View All
//         </button>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500">Loading...</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center"> {/* Center blog posts on large screens */}
//           {blogs.map((blog) => (
//             <div
//               key={blog.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//             >
//               <img
//                 src={getFullImageUrl(blog.image)}
//                 alt={blog.title}
//                 className="w-full h-60 object-cover" // Set fixed height for the image
//               />
//               <div className="p-4 text-center">
//                 <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
//                 <p className="text-sm text-gray-600 mb-4">{blog.summary}</p> {/* Optional: Summary or description */}
//                 <a
//                   href={blog.link || '#'}
//                   className="text-blue-500 hover:underline inline-block mt-2"
//                 >
//                   Read Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { Link } from "lucide-react";
// import { NavLink } from "react-router-dom";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         setBlogs(response.data); // Assuming the response data is an array of blogs
//         setLoading(false); // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//         setLoading(false); // Set loading to false in case of error
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   // Function to generate the full image URL
//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>

//         <NavLink
//           to="/blogcomponent"
//           className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold"
//         >
//           View All
//         </NavLink>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500">Loading...</p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//           {" "}
//           {/* Center blog posts on large screens */}
//           {blogs
//             .filter((blog) => blog.is_visible) // Filter blogs where 'Visible' is true
//             .map((blog) => (
//               <div
//                 key={blog.id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//               >
//                 <img
//                   src={getFullImageUrl(blog.image)}
//                   alt={blog.title}
//                   className="w-full h-60 object-cover" // Set fixed height for the image
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-xl font-semibold mb-2 px-6">{blog.title}</h3>
//                   <p className="text-sm text-gray-600 mb-4 ">
//                     {blog.summary}
//                   </p>{" "}
//                   {/* Optional: Summary or description */}
//                   <NavLink
//                     to={blog.link || "#"}
//                     className="text-blue-900 hover:underline inline-block mt-2"
//                   >
//                     Read Now &gt;
//                   </NavLink>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         setBlogs(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           dots: true,
//         },
//       },
//     ],
//   };

//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>

//         <NavLink
//           to="/blogcomponent"
//           className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold"
//         >
//           View All
//         </NavLink>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500">Loading...</p>
//         </div>
//       ) : (
//         <>
//           {/* Desktop View */}
//           <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//             {blogs
//               .filter((blog) => blog.is_visible)
//               .map((blog) => (
//                 <div
//                   key={blog.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//                 >
//                   <img
//                     src={getFullImageUrl(blog.image)}
//                     alt={blog.title}
//                     className="w-full h-60 object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h3 className="text-xl font-semibold mb-2 px-6">{blog.title}</h3>
//                     <p className="text-sm text-gray-600 mb-4">
//                       {blog.summary}
//                     </p>
//                     <NavLink
//                       to={blog.link || "#"}
//                       className="text-blue-900 hover:underline inline-block mt-2"
//                     >
//                       Read Now &gt;
//                     </NavLink>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           {/* Mobile View */}
//           <div className="block md:hidden">
//             <Slider {...sliderSettings}>
//               {blogs
//                 .filter((blog) => blog.is_visible)
//                 .map((blog) => (
//                   <div key={blog.id} className="px-4">
//                     <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
//                       <img
//                         src={getFullImageUrl(blog.image)}
//                         alt={blog.title}
//                         className="w-full h-60 object-cover"
//                       />
//                       <div className="p-4 text-center">
//                         <h3 className="text-xl font-semibold mb-2 px-6">{blog.title}</h3>
//                         <p className="text-sm text-gray-600 mb-4">
//                           {blog.summary}
//                         </p>
//                         <NavLink
//                           to={blog.link || "#"}
//                           className="text-blue-900 hover:underline inline-block mt-2"
//                         >
//                           Read Now &gt;
//                         </NavLink>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </Slider>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default Blog;

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from API
//   useEffect(() => {
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/blog/`)
//       .then((response) => {
//         setBlogs(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable auto slide
//     autoplaySpeed: 1000, // Set auto slide interval
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false, // Disable arrows for mobile
//         },
//       },
//     ],
//   };

//   const getFullImageUrl = (imagePath) => {
//     return `${process.env.REACT_APP_API_URL}${imagePath}`;
//   };

//   return (
//     <section className="p-8">
//       <div className="flex justify-between items-center mb-6 font-sans">
//         <h2 className="text-3xl font-bold">Blog</h2>

//         <NavLink
//           to="/blogcomponent"
//           className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold"
//         >
//           View All
//         </NavLink>
//       </div>

//       {loading ? (
//         <div className="flex justify-center items-center h-60">
//           <p className="text-gray-500">Loading...</p>
//         </div>
//       ) : (
//         <>
//           {/* Desktop View */}
//           <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
//             {blogs
//               .filter((blog) => blog.is_visible)
//               .map((blog) => (
//                 <div
//                   key={blog.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center"
//                 >
//                   <img
//                     src={getFullImageUrl(blog.image)}
//                     alt={blog.title}
//                     className="w-full h-60 object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h3 className="text-xl font-semibold mb-2 px-6">
//                       {blog.title}
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-4">{blog.summary}</p>
//                     <NavLink
//                       to={blog.link || "#"}
//                       className="text-blue-900 hover:underline inline-block mt-2"
//                     >
//                       Read Now &gt;
//                     </NavLink>
//                   </div>
//                 </div>
//               ))}
//           </div>

//           {/* Mobile View */}
//           <div className="block md:hidden">
//             <Slider {...sliderSettings}>
//               {blogs
//                 .filter((blog) => blog.is_visible)
//                 .map((blog) => (
//                   <div key={blog.id} className="px-4">
//                     <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
//                       <img
//                         src={getFullImageUrl(blog.image)}
//                         alt={blog.title}
//                         className="w-full h-60 object-cover"
//                       />
//                       <div className="p-4 text-center">
//                         <h3 className="text-xl font-semibold mb-2 px-6">
//                           {blog.title}
//                         </h3>
//                         <p className="text-sm text-gray-600 mb-4">
//                           {blog.summary}
//                         </p>
//                         <NavLink
//                           to={blog.link || "#"}
//                           className="text-blue-900 hover:underline inline-block mt-2"
//                         >
//                           Read Now &gt;
//                         </NavLink>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </Slider>
//           </div>
//         </>
//       )}
//     </section>
//   );
// };

// export default Blog;

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/blog/`)
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto slide
    autoplaySpeed: 1000, // Set auto slide interval
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Disable arrows for mobile
        },
      },
    ],
  };

  const getFullImageUrl = (imagePath) => {
    return `${process.env.REACT_APP_API_URL}${imagePath}`;
  };

  return (
    //     <section className="p-8">
    //       <div className="flex justify-center items-center mb-6 font-sans">
    //   <h2 className="md:text-3xl text-2xl font-bold text-center">Blog</h2>
    // </div>

    <section className="p-8">
      <div className="flex justify-between items-center mb-6 font-sans">
        <h2 className="text-3xl font-bold mx-auto">Blog</h2>

        <NavLink
          to="/blogcomponent"
          className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold"
        >
          View All
        </NavLink>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {blogs
              .filter((blog) => blog.is_visible)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white shadow-md overflow-hidden flex flex-col items-center"
                >
                  <img
                    src={getFullImageUrl(blog.image)}
                    alt={blog.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2 px-6">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{blog.summary}</p>
                    <NavLink
                      to={blog.link || "#"}
                      className="text-blue-900 hover:underline inline-block mt-2"
                    >
                      Read Now &gt;
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <Slider {...sliderSettings}>
              {blogs
                .filter((blog) => blog.is_visible)
                .map((blog) => (
                  <div key={blog.id} className="px-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
                      <img
                        src={getFullImageUrl(blog.image)}
                        alt={blog.title}
                        className="w-full h-60 object-cover"
                      />
                      <div className="p-4 text-center">
                        <h3 className="text-xl font-semibold mb-2 px-6">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">
                          {blog.summary}
                        </p>
                        <NavLink
                          to={blog.link || "#"}
                          className="text-blue-900 hover:underline inline-block mt-2"
                        >
                          Read Now &gt;
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
            {/* View All Button for Mobile */}
            <div className="flex justify-center mt-4">
              <NavLink
                to="/blogcomponent"
                className="text-white bg-bio-green rounded-md py-2 px-4 font-semibold"
              >
                View All
              </NavLink>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Blog;
