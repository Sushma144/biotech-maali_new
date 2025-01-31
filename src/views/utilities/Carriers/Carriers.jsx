// import React, { useState } from 'react';

// const Carriers = () => {
//   const [activeTab, setActiveTab] = useState('non-tech');
//   const [expanded, setExpanded] = useState(null);

//   const jobListings = [
//     { id: 1, title: 'Lead Procurement (Flower and Plants)' },
//     { id: 2, title: 'Senior Product Manager(Marketing)' },
//     { id: 3, title: 'Senior Product Manager(Marketing)' },
//     { id: 4, title: 'Senior Product Manager(Marketing)' },
//     { id: 5, title: 'Senior Product Manager(Marketing)' },
//     { id: 6, title: 'Senior Product Manager(Marketing)' },
//     { id: 7, title: 'Senior Product Manager(Marketing)' },
//     { id: 8, title: 'Senior Product Manager(Marketing)' },
//     { id: 9, title: 'Senior Product Manager(Marketing)' },
//     { id: 10, title: 'Senior Product Manager(Marketing)' },
//   ];

//   const handleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between p-4">
//        <div className="w-full border-b">
//       {/* Header Title */}
//       <div className="text-center py-4 border-b">
//         <h1 className="text-xl font-semibold text-gray-800">
//           Shape the Future with Biotech Maali
//         </h1>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="flex justify-center">
//   <button
//     onClick={() => setActiveTab('non-tech')}
//     className={`px-8 py-3 relative ${
//       activeTab === 'non-tech' ? 'text-gray-800' : 'text-gray-500'
//     }`}
//   >
//     Non -Tech Positions
//     {activeTab === 'non-tech' && (
//       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div> // Bottom line only
//     )}
//   </button>
//   <button
//     onClick={() => setActiveTab('tech')}
//     className={`px-8 py-3 relative ${
//       activeTab === 'tech' ? 'text-gray-800' : 'text-gray-500'
//     }`}
//   >
//     Technology Positions
//     {activeTab === 'tech' && (
//       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div> // Bottom line only
//     )}
//   </button>
// </div>

//     </div>

//       {/* Content */}
//       <div className="flex-grow w-full mt-6">
//         {activeTab === 'tech' ? (
//           <div className="text-center py-12">
//             <div className="mb-4">
//               <svg
//                 className="w-16 h-16 mx-auto text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium mb-2">Sorry Currently</h3>
//             <p className="text-gray-500">We have no opening</p>
//             <p className="text-gray-500">Stay tuned</p>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             {jobListings.map((job) => (
//               <div
//                 key={job.id}
//                 className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
//                 onClick={() => handleExpand(job.id)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span className="font-medium">{job.title}</span>
//                   </div>
//                   <svg
//                     className={`w-5 h-5 transform transition-transform ${expanded === job.id ? 'rotate-180' : ''}`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carriers;


// import React, { useState, useEffect } from 'react';

// const Carriers = () => {
//   const [activeTab, setActiveTab] = useState('non-tech');
//   const [expanded, setExpanded] = useState(null);
//   const [formData, setFormData] = useState({
//     category: '',
//     positionName: '',
//     jobSummary: '',
//     responsibilities: '',
//     desiredSkills: '',
//   });

//   const [jobListings, setJobListings] = useState([]);

//   const handleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   // Fetch data from backend (using GET method with environment variable for API URL)
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/carrier/publicCarrier/`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'success') {
//           setJobListings(data.data.carrier); // Update state with fetched data
//         } else {
//           console.error('Error fetching data:', data.message);
//         }
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Filter job listings based on the active tab
//   const filteredJobs = jobListings.filter(
//     (job) =>
//       (activeTab === 'non-tech' && job.categories === 'Non-Tech Positions') ||
//       (activeTab === 'tech' && job.categories === 'Tech Positions')
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-between p-4">
//       <div className="w-full border-b">
//         {/* Header Title */}
//         <div className="text-center py-4 border-b">
//           <h1 className="text-xl font-semibold text-gray-800">
//             Shape the Future with Biotech Maali
//           </h1>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="flex justify-center">
//           <button
//             onClick={() => setActiveTab('non-tech')}
//             className={`px-8 py-3 relative ${
//               activeTab === 'non-tech' ? 'text-gray-800' : 'text-gray-500'
//             }`}
//           >
//             Non -Tech Positions
//             {activeTab === 'non-tech' && (
//               <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
//             )}
//           </button>
//           <button
//             onClick={() => setActiveTab('tech')}
//             className={`px-8 py-3 relative ${
//               activeTab === 'tech' ? 'text-gray-800' : 'text-gray-500'
//             }`}
//           >
//             Technology Positions
//             {activeTab === 'tech' && (
//               <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-grow w-full mt-6">
//         {filteredJobs.length === 0 ? (
//           <div className="text-center py-12">
//             <h3 className="text-lg font-medium mb-2">Sorry, no positions available</h3>
//             <p className="text-gray-500">Stay tuned for new openings!</p>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             {filteredJobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
//                 onClick={() => handleExpand(job.id)}
//               >
//                 <div className="flex justify-between items-center">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <span className="font-medium">{job.position_name}</span>
//                   </div>
//                   <svg
//                     className={`w-5 h-5 transform transition-transform ${
//                       expanded === job.id ? 'rotate-180' : ''
//                     }`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//                 {expanded === job.id && (
//                   <div className="mt-2 text-gray-500">
//                     <p><strong>Job Summary:</strong> {job.job_summary}</p>
//                     <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
//                     <p><strong>Desired Skills:</strong> {job.desired_skills}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carriers;



import React, { useState, useEffect } from 'react';

const Carriers = () => {
  const [activeTab, setActiveTab] = useState('non-tech');
  const [expanded, setExpanded] = useState(null);
  const [jobListings, setJobListings] = useState([]);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  // Fetch data from backend (using GET method with environment variable for API URL)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/carrier/publicCarrier/`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'success') {
          setJobListings(data.data.carrier); // Update state with fetched data
        } else {
          console.error('Error fetching data:', data.message);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter job listings based on the active tab
  const filteredJobs = jobListings.filter(
    (job) =>
      (activeTab === 'non-tech' && job.categories === 'Non-Tech Positions') ||
      (activeTab === 'tech' && job.categories === 'Tech Positions')
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-4">
      <div className="w-full border-b">
        {/* Header Title */}
        <div className="text-center py-4 border-b">
          <h1 className="text-xl font-semibold text-gray-800">
            Shape the Future with Biotech Maali
          </h1>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center">
          <button
            onClick={() => setActiveTab('non-tech')}
            className={`px-8 py-3 relative ${
              activeTab === 'non-tech' ? 'text-gray-800' : 'text-gray-500'
            }`}
          >
            Non -Tech Positions
            {activeTab === 'non-tech' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-8 py-3 relative ${
              activeTab === 'tech' ? 'text-gray-800' : 'text-gray-500'
            }`}
          >
            Technology Positions
            {activeTab === 'tech' && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow w-full mt-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">Sorry, no positions available</h3>
            <p className="text-gray-500">Stay tuned for new openings!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleExpand(job.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">{job.position_name}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expanded === job.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {expanded === job.id && (
                  <div className="mt-2 text-gray-500">
                    <p><strong>Job Summary:</strong> {job.job_summary}</p>
                    <p><strong>Responsibilities:</strong> {job.responsibilities}</p>
                    <p><strong>Desired Skills:</strong> {job.desired_skills}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carriers;
