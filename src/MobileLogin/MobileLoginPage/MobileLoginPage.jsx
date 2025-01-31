
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Biotech-Maali.png';
import logoImage from '../../Assets/MobileLogin.png';

const MobileLoginPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or API call here if needed
    navigate('/'); // Navigate to the login page
  };

  const handleBackToLogin = () => {
    navigate('/mobile-signin'); // Replace '/login' with the path to your login page
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="w-full rounded-lg p-6">
        {/* Logo Section */}
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="logo"
            className="max-w-md"
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

        {/* Form Section */}
        <form className="space-y-4 mt-14" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ranjita"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="referral"
              className="block text-sm font-medium text-gray-700"
            >
              Enter The Referral Code <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="referral"
              placeholder="000000"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9630] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FF9630] hover:bg-[#FF9630] text-white py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        {/* Back to Login Link */}
        <p
          className="text-center text-sm text-blue-500 mt-5 cursor-pointer"
          onClick={handleBackToLogin}
        >
          Back to login
        </p>
      </div>
    </div>
  );
};

export default MobileLoginPage;
