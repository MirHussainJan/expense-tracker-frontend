import { useState } from "react";
import SidebarImage from "../components/GroupPage/SidebarImage";
import ImageSelector from "../components/GroupPage/ImageSelector";
import Form from "../components/GroupPage/Form";
export default function Group() {
  const [selectedGroupType, setSelectedGroupType] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [members, setMembers] = useState([]);
  const [searchText, setSearchText] = useState("");

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
       <ImageSelector/>

          <Form 
            selectedGroupType={selectedGroupType} 
            searchText={searchText} 
            handleGroupTypeClick={handleGroupTypeClick} 
            togglePopup={togglePopup} 
            handleAddMember={handleAddMember} 
            isPopupVisible={isPopupVisible} setSearchText={setSearchText}
          />
        
        </div>
      </div>
    </div>
  );
}
