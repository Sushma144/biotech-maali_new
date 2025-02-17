// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { isMobile } from "react-device-detect"; // Import device detection

// const CategoryIcons = () => {
//   const [categoryData, setCategoryData] = useState([]);

//   const getCategory = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/category/`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const categories = response.data.data.categories;
//       if (categories.length > 0) {
//         const updatedCategories = await Promise.all(
//           categories.map(async (category) => {
//             if (category.id) {
//               const subCategory = await getSubCategory(category.id);
//               return { ...category, subCategory };
//             }
//             return category;
//           })
//         );
//         setCategoryData(updatedCategories);
//       }
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   const getSubCategory = async (categoryId) => {
//     try {
//       const response = await axios.get(
//         `${process.env.REACT_APP_API_URL}/category/categoryWiseSubCategory/${categoryId}/`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       return response.data.data.subCategorys || [];
//     } catch (error) {
//       console.error("Error fetching subcategories:", error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     getCategory();
//   }, []);

//   useEffect(() => {
//     console.log("Updated category data:", categoryData);
//   }, [categoryData]);

//   return (
//     <div className="mt-2 w-full mb-2">
//       <div
//         className={`flex items-center justify-start gap-4 px-4 mt-4 sm:py-2 w-full ${
//           isMobile ? "category-container" : ""
//         }`}
//       >
//         {categoryData.map((category, idx) => (
//           <div
//             key={idx}
//             className="relative group shrink-0 flex-grow flex-basis-[14.28%] flex flex-col items-center"
//           >
//             {/* Image */}
//             <img
//               src={`${process.env.REACT_APP_API_URL}${category.image}`}
//               alt={category.name || "Category"}
//               className="w-[100%] h-[100%] sm:w-[70%] sm:h-[70%] md:w-[80%] md:h-[80%] lg:w-[60%] lg:h-[60%] object-contain mb-2 cursor-pointer"
//             />
//             <h2 className="mt-1 text-center text-xs sm:text-sm md:text-base font-medium text-gray-800">
//               {category.name}
//             </h2>

//             {/* Dropdown Menu */}
//             <div
//               className={`absolute top-full left-1/2 transform -translate-x-1/2 -mt-4 hidden w-[180px] bg-white border border-gray-200 shadow-lg z-50 ${
//                 !isMobile ? "group-hover:block" : "hidden"
//               }`}
//             >
//               <div className="p-4">
//                 <h3 className="text-green-700 font-bold mb-2">
//                   {category.name}
//                 </h3>
//                 {category.subCategory && category.subCategory.length > 0 ? (
//                   <ul className="text-gray-700">
//                     {category.subCategory.map((item, index) => (
//                       <li
//                         key={index}
//                         className="hover:text-green-600 cursor-pointer"
//                       >
//                         {item.name}
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-500">No subcategories available</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Custom Scrollbar CSS */}
//       <style jsx>{`
//         .category-container {
//           overflow-x: auto; /* Enables horizontal scrolling */
//           -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
//         }

//         .custom-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .custom-scrollbar {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }

//         /* For mobile view */
//         @media (max-width: 768px) {
//           .category-container {
//             display: flex;
//             flex-wrap: nowrap; /* Prevent items from wrapping onto new lines */
//             gap: 25px;
//             padding: 8px 2;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CategoryIcons;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect"; // Import device detection

const CategoryIcons = () => {
  const [categoryData, setCategoryData] = useState([]);
  // const[publishedCategoryData, setPublishedCategoryData] = useState([]);
  
  const publishedCategoryData = categoryData.filter((category) => category.is_published === true);
  console.log("Published Category Data:", publishedCategoryData);
  

  const getCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/category/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const categories = response.data.data.categories;
      if (categories.length > 0) {
        const updatedCategories = await Promise.all(
          categories.map(async (category) => {
            if (category.id) {
              const subCategory = await getSubCategory(category.id);
              return { ...category, subCategory };
            }
            return category;
          })
        );
        setCategoryData(updatedCategories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getSubCategory = async (categoryId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/category/categoryWiseSubCategory/${categoryId}/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.data.subCategorys || [];
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      return [];
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    // console.log("Updated category data:", categoryData);
  }, [categoryData]);

  return (
    <div className="mt-2 w-full mb-2">
      <div
        className={`flex items-center justify-start gap-4 px-4 mt-4 sm:py-2 w-full ${isMobile ? "category-container" : ""}`}
      >
        {publishedCategoryData.map((category, idx) => (
          <div
            key={idx}
            className="relative group shrink-0 flex-grow flex-basis-[14.28%] flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={`${process.env.REACT_APP_API_URL}${category.image}`}
              alt={category.name || "Category"}
              className="w-[100%] h-[100%] sm:w-[70%] sm:h-[70%] md:w-[80%] md:h-[80%] lg:w-[40%] lg:h-[40%] object-contain mb-2 cursor-pointer"
            />
            <h2 className="mt-1 text-center text-xs sm:text-sm md:text-base font-medium text-gray-800">
              {category.name}
            </h2>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 -mt-4 hidden w-[180px] bg-white border border-gray-200 shadow-lg z-50 ${
                !isMobile ? "group-hover:block" : "hidden"
              }`}
            >
              <div className="p-4">
                <h3 className="text-bio-green font-bold mb-2">
                  {category.name}
                </h3>
                {category.subCategory && category.subCategory.length > 0 ? (
                  <ul className="text-gray-700">
                    {category.subCategory.map((item, index) => (
                      <li
                        key={index}
                        className="hover:text-green-600 cursor-pointer"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No subcategories available</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
        .category-container {
          // overflow-x: auto; /* Enables horizontal scrolling */
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
          display: flex;
          flex-wrap: nowrap;
          gap: 25px;
          padding: 8px 2;
        }

        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /* For mobile view */
        @media (max-width: 768px) {
          .category-container {
            overflow-x: scroll; /* Enable scroll on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryIcons;
