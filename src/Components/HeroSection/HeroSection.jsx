import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { isMobile } from 'react-device-detect'; // Importing device detection
import plant from '../../../src/Assets/Plant.png';
import plant1 from '../../../src/Assets/Plant1.png';

const ImageCarousel = (hero_images) => {
  const [current, setCurrent] = useState(0);
  const [startTouch, setStartTouch] = useState(0); // To track touch start position
  const images = [
    { image: plant },
    { image: plant1 },
    { image: plant },
    { image: plant1 },
    { image: plant },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleSwipe = (direction) => {
    if (direction === 'left') {
      handlePrev();
    } else if (direction === 'right') {
      handleNext();
    }
  };

  // Mobile swipe handling
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  const handleTouchMove = (e) => {
    if (!startTouch) return;
    const touchEnd = e.touches[0].clientX;
    if (startTouch - touchEnd > 50) {
      handleNext(); // Swipe left
    } else if (touchEnd - startTouch > 50) {
      handlePrev(); // Swipe right
    }
    setStartTouch(0); // Reset touch start position
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {hero_images.hero && hero_images.hero.map((img, index) => (
          <img
            key={img.id || index}
            src={`${process.env.REACT_APP_API_URL}${img.web_banner}`}
            alt={`Slide ${index}`}
            className="w-full md:h-[500px] h-[450px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Desktop Navigation Buttons */}
      {!isMobile && (
        <>
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Mobile Swiping Feature */}
      {isMobile && (
        <div
          className="absolute inset-0 flex justify-between items-center px-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <button
            className="absolute left-0 bg-black bg-opacity-50 text-white p-2"
            onClick={() => handleSwipe('left')}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 bg-black bg-opacity-50 text-white p-2"
            onClick={() => handleSwipe('right')}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Dot Indicators - Mobile Specific Styling */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === current ? 'w-6 bg-green-500' : 'w-1.5 bg-white bg-opacity-60'
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
