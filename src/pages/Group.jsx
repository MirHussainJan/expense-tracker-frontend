import { useState } from "react";
import MemberManagement from "../components/GroupPage/MemeberManagement";
import GroupTypeSelector from "../components/GroupPage/GroupTypeSelector";
import SidebarImage from "../components/GroupPage/SidebarImage";
import { MdImage } from "react-icons/md"; // Import the icon for the image selection
export default function Group() {
  const [selectedGroupType, setSelectedGroupType] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [image, setImage] = useState(null); // To hold the selected image

  const handleGroupTypeClick = (type) => {
    setSelectedGroupType(type);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
    setSearchText("");
  };

  const handleAddMember = (member) => {
    if (!members.includes(member)) {
      setMembers([...members, member]);
    }
  };

  const handleRemoveMember = (member) => {
    setMembers(members.filter((m) => m !== member));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set the image URL once it's loaded
      };
      reader.readAsDataURL(file); // Read the image as a data URL
    }
  };

  return (
    <div className="h-screen flex font-poppins">
      {/* Left Side (Image) */}
      <SidebarImage />
      {/* Right Side (Form) */}
      <div className="w-full md:w-1/2 bg-white p-8 flex justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Create a Group
          </h2>

          {/* Added Members */}
          {members.length > 0 && (
            <div className="mb-4">
              <h3 className="text-gray-600 font-medium mb-2">Added Members</h3>
              <div className="flex flex-wrap gap-2">
                {members.map((member) => (
                  <div
                    key={member}
                    className="flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {member}
                    <button
                      onClick={() => handleRemoveMember(member)}
                      className="text-red-600 hover:text-red-800"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Group Image with Image Selector */}
        <div className="mb-4 ">
          <div
            id="groupImage"
            className="relative block w-full px-4 py-10 border rounded-tl-lg rounded-tr-lg shadow-sm bg-zinc-500"
          >
            {/* Display selected image or icon */}
            {image ? (
              <img
                src={image}
                alt="Group"
                className="object-cover w-full h-full absolute top-0 left-0"
              />
            ) : (
              <MdImage className="text-white text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            )}

            {/* File Input for Image Selection */}
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange} 
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
            />

            {/* Hover Scaling Effect */}
            <div className="absolute inset-0 transition-transform transform hover:scale-105"></div>
          </div>
        </div>


          {/* Group Name */}
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-gray-600 font-medium mb-1"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              placeholder="Enter group name"
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="3"
              placeholder="Enter description"
              className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
            ></textarea>
          </div>

          <MemberManagement
            isPopupVisible={isPopupVisible}
            togglePopup={togglePopup}
            searchText={searchText}
            setSearchText={setSearchText}
            handleAddMember={handleAddMember}
          />
          {/* Group Type */}
          <GroupTypeSelector
            selectedGroupType={selectedGroupType}
            handleGroupTypeClick={handleGroupTypeClick}
          />
          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-200">
              Cancel
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
