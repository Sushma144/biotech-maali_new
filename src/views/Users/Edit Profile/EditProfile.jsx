import React from "react";

const EditProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full flex items-center justify-between py-4 bg-white shadow-md px-4">
        <button className="text-gray-700">
          <span className="material-icons">arrow_back</span> {/* Back Arrow Icon */}
        </button>
        <h1 className="text-lg font-semibold">Edit Profile</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">
            <span className="material-icons">notifications</span> {/* Notification Icon */}
          </button>
          <button className="text-gray-700">
            <span className="material-icons">search</span> {/* Search Icon */}
          </button>
        </div>
      </header>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 mt-4">
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">First Name</label>
            <input
              type="text"
              placeholder="Mallikjan"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Last Name*</label>
            <input
              type="text"
              placeholder="Baroodwale"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Your Gender*</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                Female
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" className="mr-2" />
                Others
              </label>
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Email Address*</label>
            <input
              type="email"
              placeholder="Mallikjan@Gmail.Com"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Mobile Number*</label>
            <input
              type="text"
              placeholder="+91 8884981840"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Address*</label>
            <input
              type="text"
              placeholder="Mehaboob Nagar"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Pincode */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Pincode*</label>
            <input
              type="text"
              placeholder="580028"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">City*</label>
            <input
              type="text"
              placeholder="Hubli"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-1">Country*</label>
            <input
              type="text"
              placeholder="India"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold p-3 rounded mt-4 hover:bg-green-700"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
