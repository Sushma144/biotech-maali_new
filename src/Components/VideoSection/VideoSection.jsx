
import React from 'react';
import video from '../../../src/Assets/video.mp4';

const VideoSection = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="relative w-full md:w-[1450px] h-[450px] md:h-[500px]">
        <video
          src={video}
          className="w-full h-full object-cover"
          controls // Adds play, pause, and other video controls
          autoPlay={false} // Remove this if you want to autoplay the video
          muted // Mute the video by default (useful if autoplaying)
        />
      </div>
    </div>
  );
};

export default VideoSection;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import ReactPlayer from 'react-player';

// const VideoSection = ({ product }) => {
//   const [video, setVideo] = useState('');
//   const [productData, setProductData] = useState({});

//   useEffect(() => {
//     if (productDetailData) {
//       setProductData(productDetailData);
//       setVideo(productDetailData?.data?.product?.vedio_link || "");
//     }
//   }, [productDetailData]);
//       const fetchVideoLink = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/defaultProduct/${product.id}/`);
//         console.log('API response:', response.data); // Debugging: log the API response

//         const videoUrl = response.data?.data?.product?.vedio_link; // Ensure correct property name
//         if (videoUrl) {
//           setVideo(videoUrl);
//         } else {
//           console.error('Video link not found in API response');
//         }
//       } catch (error) {
//         console.error('Error fetching video link:', error);
//       }
//     };
//  // Ensure effect runs when product.id changes

//   return (
//     <div className="flex justify-center mt-8">
//       <div className="relative w-full md:w-[1450px] h-[450px] md:h-[500px]">
//         {video ? (
//           <ReactPlayer
//             url={video}
//             controls
//             width="100%"
//             height="100%"
//           />
//         ) : (
//           <p>Loading video...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoSection;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import VideoSection from './VideoSection';

// const ProductPage = () => {
//   const [product, setProduct] = useState(null);
//   const [video, setVideo] = useState('');


//   // ✅ Fetch video only when product is available
//   useEffect(() => {
//     if (!product?.id) return;

//     const fetchVideoLink = async () => {
//       const apiUrl = `${process.env.REACT_APP_API_URL}/product/defaultProduct/${product.id}/`;
//       console.log('Fetching API:', apiUrl);

//       try {
//         const response = await axios.get(apiUrl);
//         console.log('API Response:', response.data);
//         setVideo(response.data?.data?.product?.vedio_link || '');
//       } catch (error) {
//         console.error('Error fetching video link:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchVideoLink();
//   }, [product?.id]);

//   return (
//     <div>
//       {product ? <VideoSection product={product} /> : <p>Loading product details...</p>}
//     </div>
//   );
// };

// export default ProductPage;
