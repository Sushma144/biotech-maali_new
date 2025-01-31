import { useState, useEffect } from 'react';

const WriteAReview = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState('yes');

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === 'modal-overlay') {
        onClose();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="max-w-2xl w-full bg-white border border-gray-300 shadow-lg rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>
        
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Peace Lily Plant"
            className="w-20 h-20 rounded"
          />
          <div>
            <h3 className="text-lg font-medium">Peace Lily Plant</h3>
            <p className="text-gray-500 text-sm">2ft / 2ft-GroPot / Ivory</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="font-medium mb-2">Please give rating*</p>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-3xl ${
                  rating >= star ? 'text-yellow-400' : 'text-gray-400'
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <label className="font-medium block mb-2" htmlFor="review-title">
            Review Title*
          </label>
          <input
            id="review-title"
            type="text"
            maxLength="50"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Max 50 Characters"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium block mb-2" htmlFor="comment">
            Comment*
          </label>
          <textarea
            id="comment"
            maxLength="300"
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Max 300 Characters"
          ></textarea>
        </div>

        <div className="mt-4">
          <p className="font-medium mb-2">Will you recommend this product?*</p>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="recommend"
                value="yes"
                checked={recommend === 'yes'}
                onChange={() => setRecommend('yes')}
                className="accent-green-600"
              />
              <span className="text-green-600 font-medium">YES</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="recommend"
                value="no"
                checked={recommend === 'no'}
                onChange={() => setRecommend('no')}
                className="accent-gray-600"
              />
              <span className="text-gray-600 font-medium">No</span>
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={onClose}
            className="border border-green-600 text-green-600 font-medium px-8 py-2 rounded-md hover:bg-green-50"
          >
            CANCEL
          </button>
          <button className="bg-green-600 text-white font-medium px-8 py-2 rounded-md hover:bg-green-700">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};
export default WriteAReview;