// // import React, { useState } from 'react';

// // const AboutProduct = () => {
// //   const [activeTab, setActiveTab] = useState('about'); // 'about', 'box', or 'video'

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'about':
// //         return (
// //           <div className="flex-1">
// //             <p className="text-gray-600 leading-7 w-full">
// //               Are you a sucker for succulents? Then the Mini Jade succulent will be your dream plant! 
// //               As one of the easiest houseplants to look after, the Crassula Green Mini plant boasts 
// //               a lush foliage which beautifies any room. The Jade is also considered lucky as per 
// //               Feng Shui for its coin-like round plump leaves. So, go ahead and bring Jade home... 
// //               luck just tags along!
// //             </p>
// //           </div>
// //         );
// //       case 'box':
// //         return (
// //           <div className="flex-1">
// //             <p className="text-gray-600 leading-7 w-full">
// //               Pot, Soil
// //             </p>
// //           </div>
// //         );
// //       case 'video':
// //         return (
// //           <div className="flex-1">
// //             <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
// //               <video
// //                 controls
// //                 className="w-full"
// //                 poster="/api/placeholder/640/360"
// //               >
// //                 <source 
// //                   src="https://cdnjs.cloudflare.com/ajax/libs/Dummy-Videos/1.0.0/dummy-video.mp4" 
// //                   type="video/mp4"
// //                 />
// //                 Your browser does not support the video tag.
// //               </video>
// //             </div>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   const getTabStyle = (tabName) => {
// //     return `relative w-full text-left p-4 border-b border-gray-200 transition-colors
// //       ${activeTab === tabName ? 'text-lime-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}
// //       ${tabName === 'about' ? 'border-t' : ''}`;
// //   };

// //   const getGreenLine = (tabName) => {
// //     if (activeTab === tabName) {
// //       return (
// //         <div className="absolute left-0 top-0 h-full w-1 bg-lime-500" />
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className="w-full bg-white">
// //       {/* Header */}
// //       {/* <div className="p-4 border-b border-gray-200">
// //         <h2 className="text-gray-700 text-xl font-medium">About the product</h2>
// //       </div> */}
// //       <div className="flex">
// //      <div className="w-48 border-r border-gray-200">
// //           <button 
// //             className={getTabStyle('about')}
// //             onClick={() => setActiveTab('about')}
// //           >
// //             {getGreenLine('about')}
// //             About the product
// //           </button>
// //       {/* Main content */}
// //       <div className="flex">
// //         {/* Navigation */}
        
// //           <button 
// //             className={getTabStyle('box')}
// //             onClick={() => setActiveTab('box')}
// //           >
// //             {getGreenLine('box')}
// //             What's in the Box
// //           </button>
// //           <button 
// //             className={getTabStyle('video')}
// //             onClick={() => setActiveTab('video')}
// //           >
// //             {getGreenLine('video')}
// //             Video
// //           </button>
// //         </div>

// //         {/* Content area */}
// //         <div className="flex-1 p-6">
// //           {renderContent()}
// //         </div>
// //       </div>
// //     </div>
// //     </div>
// //   );
// // };

// // export default AboutProduct;


// import React, { useEffect, useState } from 'react';
// // import video from '../../../Assets/video.mp4';
// const AboutProduct = (productDetailData) => {
//   const [activeTab, setActiveTab] = useState('about'); // 'about', 'box', or 'video'
//   const[video , setVideo] = useState("");
//   const[productData , setproductData] = useState({});


//   useEffect(() => {
//     if (productDetailData) {
//       setproductData(productDetailData);
//     }
    
//   }, [productDetailData]);
//   console.log(productData,'===============data');
//   const renderContent = () => {
//     switch (activeTab) {
//       case 'about':
//         return (
//           <div>
//             <p className="text-gray-600 leading-7 justify-center text-between ">
              
//             {productDetailData?.data?.product?.short_description || ""}
//             </p>
//           </div>
//         );
//       case 'box':
//         return (
//           <div>
//             <p className="text-gray-600 leading-7 justify-center text-between ">
//             {productDetailData?.data?.product?.whats_included || ""} 
//             </p>
//           </div>
//         );
//       case 'video':
//         return (
//           <div className="rounded-lg overflow-hidden">
//             <video
//               controls
//               className="w-full"
//               poster=""
//             >
//               <source 
//                 src={video}
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const getTabStyle = (tabName) => {
//     return `relative w-full text-left p-4 border-b border-gray-200 transition-colors
//       ${activeTab === tabName ? 'text-lime-600 font-medium bg-gray-100' : 'text-gray-600 hover:bg-gray-50'}`;
//   };

//   const getGreenLine = (tabName) => {
//     if (activeTab === tabName) {
//       return (
//         <div className="absolute left-0 top-0 h-full w-1 bg-lime-500" />
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="w-full bg-white flex">
//       {/* Navigation Tabs */}
//       <div className="w-48 border-r border-gray-200 flex flex-col">
//         <button 
//           className={getTabStyle('about')}
//           onClick={() => setActiveTab('about')}
//         >
//           {getGreenLine('about')}
//           About the product
//         </button>
//         <button 
//           className={getTabStyle('box')}
//           onClick={() => setActiveTab('box')}
//         >
//           {getGreenLine('box')}
//           What's in the Box
//         </button>
//         <button 
//           className={getTabStyle('video')}
//           onClick={() => setActiveTab('video')}
//         >
//           {getGreenLine('video')}
//           Video
//         </button>
//       </div>

//       {/* Content Area */}
//       <div className="flex-1 p-6">
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default AboutProduct;


import React, { useEffect, useState } from 'react';

const AboutProduct = ({ productDetailData }) => {
  const [activeTab, setActiveTab] = useState('about'); // 'about', 'box', or 'video'
  const [video, setVideo] = useState("");
  const [productData, setProductData] = useState({});

  useEffect(() => {
    if (productDetailData) {
      setProductData(productDetailData);
      setVideo(productDetailData?.data?.product?.vedio_link || "");
    }
  }, [productDetailData]);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div>
            <p className="text-gray-600 leading-7 justify-center text-between ">
              {productData?.data?.product?.short_description || ""}
            </p>
          </div>
        );
      case 'box':
        return (
          <div>
            <p className="text-gray-600 leading-7 justify-center text-between ">
              {productData?.data?.product?.whats_included || ""}
            </p>
          </div>
        );
      case 'video':
        return (
          <div className="rounded-lg overflow-hidden">
            <video
              controls
              className="w-full"
              poster=""
            >
              <source 
                src={video}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      default:
        return null;
    }
  };

  const getTabStyle = (tabName) => {
    return `relative w-full text-left p-4 border-b border-gray-200 transition-colors
      ${activeTab === tabName ? 'text-lime-600 font-medium bg-gray-100' : 'text-gray-600 hover:bg-gray-50'}`;
  };

  const getGreenLine = (tabName) => {
    if (activeTab === tabName) {
      return (
        <div className="absolute left-0 top-0 h-full w-1 bg-lime-500" />
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white flex">
      {/* Navigation Tabs */}
      <div className="w-48 border-r border-gray-200 flex flex-col">
        <button 
          className={getTabStyle('about')}
          onClick={() => setActiveTab('about')}
        >
          {getGreenLine('about')}
          About the product
        </button>
        <button 
          className={getTabStyle('box')}
          onClick={() => setActiveTab('box')}
        >
          {getGreenLine('box')}
          What's in the Box
        </button>
        <button 
          className={getTabStyle('video')}
          onClick={() => setActiveTab('video')}
        >
          {getGreenLine('video')}
          Video
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutProduct;