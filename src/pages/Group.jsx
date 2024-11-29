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
    <div className="p-6 bg-gray-100 text-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Groups</h1>
        <Link
          to="/create-group"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          + Create Group
        </Link>
      </div>

    <GroupCard groups={groups}/>
    </div>
  );
};

export default Group;
