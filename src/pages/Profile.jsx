import { useState } from "react";
import { FaEnvelope, FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Profile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  return (
    <div className="max-w-3xl mx-auto rounded-lg p-8 pt-24">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">Edit Profile</h1>

      {/* Profile Picture Upload */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-32 h-32 bg-glass rounded-full overflow-hidden border-2 border-black">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
          <label
            htmlFor="profile-picture"
            className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full shadow cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </label>
          <input
            type="file"
            id="profile-picture"
            className="hidden"
            accept="image/*"
          />
        </div>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Username */}
        <div className="relative md:col-span-2">
          <label className="block text-sm font-medium">Username</label>
          <div className="flex items-center mt-2 bg-white rounded-full shadow-md px-3">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Username"
              className="w-full py-2 bg-transparent placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="relative md:col-span-2">
          <label className="block text-sm font-medium">Email Address</label>
          <div className="flex items-center mt-2 bg-white rounded-full shadow-md px-3">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full py-2 bg-transparent placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium">Password</label>
          <div className="flex items-center mt-2 bg-white rounded-full shadow-md px-3">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full py-2 bg-transparent placeholder-gray-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="text-gray-400 ml-2"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-sm font-medium">Confirm Password</label>
          <div className="flex items-center mt-2 bg-white rounded-full shadow-md px-3">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full py-2 bg-transparent placeholder-gray-500 outline-none"
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="text-gray-400 ml-2"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="col-span-1 md:col-span-2 flex justify-end gap-3">
          <button
            type="button"
            className="px-6 py-2 text-sm rounded-full border-2 border-black text-black hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
