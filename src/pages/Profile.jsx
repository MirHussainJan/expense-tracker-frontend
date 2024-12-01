import { useState } from "react";

const Profile = () => {
  return (
    <div className="max-w-lg mx-auto rounded-lg p-6 mt-10">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h1>

      {/* Form */}
      <form className="grid grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Confirm Email Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Email Address
          </label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Social Profiles */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Facebook Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Twitter Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border-gray-300 rounded-full  focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-medium rounded-full hover:bg-red-600"
          >
            Update Info
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;