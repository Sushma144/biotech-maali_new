
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../Assets/Biotech-Maali.png';
import logoImage from '../../Assets/MobileSignin.png';

const MobileSignIn = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation or API call here if needed
        navigate('/mobile-verification'); // Replace '/next-page' with your desired route
    };

    return (
        <div className="flex items-center justify-center bg-gray-50">
            <div className="w-full rounded-lg p-6">
                {/* Logo Section */}
                <div className="flex justify-center mb-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="max-w-md "
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

              
                {/* Login/Signup Form */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3 text-left">
                        Login or Signup
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="mobileNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Enter Your Mobile Number
                            </label>
                            <input
                                type="text"
                                id="mobileNumber"
                                placeholder="+91 8884981840"
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9630] focus:border-transparent"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF9630] hover:bg-[#FF9630] text-white py-2 rounded-lg font-medium"
                        >
                            Get OTP
                        </button>
                        <div>
                            <p className="text-center text-xs text-gray-500 mt-10 space-y-1 ">
                                <p>
                                    By clicking through, I agree with the{' '}
                                </p>
                                <p>
                                    <span className="text-[#FF9630] cursor-pointer"> Terms of Service <span className='text-gray-500'> & </span>Privacy Policy</span>.
                                </p>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default MobileSignIn;
