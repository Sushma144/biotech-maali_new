

// import React from "react";
// import { Star } from "lucide-react";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FaStar } from "react-icons/fa6";

// function RatingsAndReviews({ product_Rating, total_Rating }) {
//   const { avg_rating = 0, num_ratings = 0, stars_given = [] } = product_Rating || {};
//   const totalReviewsIncludingAll = stars_given.reduce((sum, item) => sum + item.count, 0);

//   const Pagination = ({ totalPages = 10, currentPage = 1, onPageChange = () => {} }) => {
//     const getPageNumbers = () => {
//       const pages = [];
//       if (totalPages <= 7) {
//         for (let i = 1; i <= totalPages; i++) pages.push(i);
//       } else {
//         pages.push(1);
//         if (currentPage > 3) pages.push("...");
//         const start = Math.max(2, currentPage - 1);
//         const end = Math.min(totalPages - 1, currentPage + 1);
//         for (let i = start; i <= end; i++) pages.push(i);
//         if (currentPage < totalPages - 2) pages.push("...");
//         pages.push(totalPages);
//       }
//       return pages;
//     };

//     return (
//       <div className="flex items-center justify-center gap-2 mt-6">
//         <button
//           className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
//           onClick={() => onPageChange(Math.max(1, currentPage - 1))}
//           disabled={currentPage === 1}
//         >
//           &lt;
//         </button>
//         {getPageNumbers().map((page, index) => (
//           <button
//             key={index}
//             className={`w-8 h-8 flex items-center justify-center rounded border ${
//               page === currentPage
//                 ? "bg-blue-500 text-white border-blue-500"
//                 : "border-gray-300 hover:bg-gray-50"
//             } ${page === "..." ? "cursor-default hover:bg-white" : ""}`}
//             onClick={() => (page !== "..." ? onPageChange(page) : null)}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
//           onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
//           disabled={currentPage === totalPages}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-full mx-auto p-4 bg-white">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
//         <div>
//           <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2">
//             Write a Review
//           </button>
//           <select className="bg-white border border-gray-300 rounded px-4 py-2">
//             <option>Most Recent</option>
//             <option>Highest Rated</option>
//             <option>Lowest Rated</option>
//           </select>
//         </div>
//       </div>

//       <div className="flex mb-8">
//         <div className="w-1/4 pr-4">
//           <div className="text-4xl font-bold">{avg_rating.toFixed(1)}</div>
//           <div className="flex items-center">
//             {Array.from({ length: 5 }).map((_, i) => {
//               const filled = Math.floor(avg_rating);
//               const half = avg_rating - filled;
//               if (i < filled) return <FaStar key={i} className="text-yellow-400" />;
//               if (i === filled && half > 0) return <FaStarHalfAlt key={i} className="text-yellow-400" />;
//               return <FaStar key={i} className="text-gray-300" />;
//             })}
//           </div>
//           <div className="text-sm text-gray-500">
//             {num_ratings} Ratings & {total_Rating?.length || 0} Reviews
//           </div>
//         </div>
//         <div className="w-3/4">
//           {stars_given.length > 0 ? (
//             stars_given.map((item) => (
//               <div key={item.stars} className="flex items-center mb-1">
//                 <div className="w-12 text-sm text-gray-600">{item.stars} Star</div>
//                 <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
//                   <div
//                     className="bg-green-500 h-2 rounded-full"
//                     style={{ width: `${(item.count / totalReviewsIncludingAll) * 100}%` }}
//                   ></div>
//                 </div>
//                 <div className="w-12 text-sm text-gray-600 text-right">{item.count}</div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-gray-600">No reviews yet</div>
//           )}
//         </div>
//       </div>

//       <div className="space-y-6">
//         {total_Rating?.map((review) => (
//           <div key={review.id} className="bg-white p-4 rounded-lg shadow">
//             <div className="flex items-center mb-2">
//               <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
//                 {review.user_name?.[0] || "A"}
//               </div>
//               <div>
//                 <div className="font-semibold">{review.user_name}</div>
//                 <div className="text-sm text-gray-500">{review.date}</div>
//               </div>
//             </div>
//             <div className="flex items-center mb-2">
//               {[...Array(5)].map((_, i) => (
//                 <Star
//                   key={i}
//                   className={`w-4 h-4 ${
//                     i < review.latest_rating ? "text-yellow-400 fill-current" : "text-gray-300"
//                   }`}
//                 />
//               ))}
//               <span className="ml-2 text-sm text-blue-600">Verified</span>
//             </div>
//             <p className="text-gray-700">{review.product_review}</p>
//           </div>
//         ))}
//       </div>

//       <Pagination totalPages={5} currentPage={1} onPageChange={(page) => console.log("Page:", page)} />
//     </div>
//   );
// }

// export default RatingsAndReviews;



import React, { useState } from "react";
import { Star } from "lucide-react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import WriteAReview from "./WriteAReview";

function RatingsAndReviews({ product_Rating, total_Rating }) {
  const { avg_rating = 0, num_ratings = 0, stars_given = [] } = product_Rating || {};
  const totalReviewsIncludingAll = stars_given.reduce((sum, item) => sum + item.count, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Pagination = ({ totalPages = 10, currentPage = 1, onPageChange = () => {} }) => {
    const getPageNumbers = () => {
      const pages = [];
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
        for (let i = start; i <= end; i++) pages.push(i);
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
      }
      return pages;
    };

    return (
      <div className="flex items-center justify-center font-sans gap-2 mt-6">
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded border ${
              page === currentPage
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 hover:bg-gray-50"
            } ${page === "..." ? "cursor-default hover:bg-white" : ""}`}
            onClick={() => (page !== "..." ? onPageChange(page) : null)}
          >
            {page}
          </button>
        ))}
        <button
          className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white border text-bio-green font-medium border-bio-green rounded px-6 py-3"
          >
            Write a Review
          </button>
          {isModalOpen && <WriteAReview onClose={() => setIsModalOpen(false)} />}
          <select className="bg-white border text-bio-green font-medium border-bio-green rounded px-6 py-3">
            <option>Most Recent</option>
            <option>Highest Rated</option>
            <option>Lowest Rated</option>
          </select>
        </div>
      </div>

      <div className="flex mb-8">
        <div className="w-1/4 pr-4">
          <div className="text-4xl font-bold">{avg_rating.toFixed(1)}</div>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = Math.floor(avg_rating);
              const half = avg_rating - filled;
              if (i < filled) return <FaStar key={i} className="text-yellow-400" />;
              if (i === filled && half > 0) return <FaStarHalfAlt key={i} className="text-yellow-400" />;
              return <FaStar key={i} className="text-gray-300" />;
            })}
          </div>
          <div className="text-sm text-gray-500">
            {num_ratings} Ratings & {total_Rating?.length || 0} Reviews
          </div>
        </div>
        <div className="w-3/4">
          {stars_given.length > 0 ? (
            stars_given.map((item) => (
              <div key={item.stars} className="flex items-center mb-1">
                <div className="w-12 text-sm text-gray-600">{item.stars} Star</div>
                <div className="w-full bg-gray-200 rounded-full h-2 ml-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${(item.count / totalReviewsIncludingAll) * 100}%` }}
                  ></div>
                </div>
                <div className="w-12 text-sm text-gray-600 text-right">{item.count}</div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">No reviews yet</div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {total_Rating?.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2 flex items-center justify-center">
                {review.user_name?.[0] || "A"}
              </div>
              <div>
                <div className="font-semibold">{review.user_name}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.latest_rating ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-blue-600">Verified</span>
            </div>
            <p className="text-gray-700">{review.product_review}</p>
          </div>
        ))}
      </div>

      <Pagination totalPages={5} currentPage={1} onPageChange={(page) => console.log("Page:", page)} />
    </div>
  );
}

export default RatingsAndReviews;

