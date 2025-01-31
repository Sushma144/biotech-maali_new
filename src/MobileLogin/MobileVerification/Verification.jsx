import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Biotech-Maali.png';
import logoImage from '../../Assets/MobileLogin.png';

const MobileVerification = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here if needed
    navigate('/mobile-login'); // Navigate to the login page
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full rounded-lg p-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="logo"
            className="max-w-xl:"
          />
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-4">
          <img
            src={logoImage}
            alt="Illustration"
            className="w-full max-w-xs h-40"
          />
        </div>

        {/* Tagline */}
        <p className="text-center text-[#FF9630] font-semibold mb-6">
      Enter OTP
        </p>

        {/* OTP Input */}
        <div className="flex justify-center gap-2 mb-6">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit} // Add the handleSubmit function here
          className="w-full bg-[#FF9630] hover:bg-[#FF9630] text-white py-2 rounded-lg font-medium"
        >
          Next
        </button>

        {/* Resend OTP */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Didn’t receive the verification OTP?{' '}
          <span className="text-[#FF9630] cursor-pointer font-semibold">
            Resend OTP
          </span>
        </p>

        {/* Verify Details */}
        <div className="mt-14 text-center">
          <p className="text-gray-600 text-sm font-semibold">VERIFY DETAILS</p>
          <p className="text-gray-800 text-base">
            OTP Sent to{' '}
            <span className="font-semibold">8884981840</span>{' '}
            <span className="text-gray-500 cursor-pointer">&#9998;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileVerification;

