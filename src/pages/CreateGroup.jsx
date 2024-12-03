import { useState } from "react";

import ImageSelector from "../components/CreateGroupPage/ImageSelector";
import Form from "../components/CreateGroupPage/Form";
export default function CreateGroup() {
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
    <div className="h-screen flex font-poppins items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          {/* <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Create a Group
          </h2> */}

          {/* Added Members */}
          {members.length > 0 && (
            <div className="">
              <h3 className="text-gray-600 font-medium">Added Members</h3>
              <div className="flex flex-wrap gap-2">
                {members.map((member) => (
                  <div
                    key={member}
                    className="flex items-center gap-2 px-3 py-1 bg-glass border-2 border-white my-2 text-black rounded-full text-sm"
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
