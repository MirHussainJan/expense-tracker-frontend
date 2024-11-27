/* eslint-disable react/prop-types */
import MemberManagement from "./MemeberManagement";
import GroupTypeSelector from "./GroupTypeSelector";

export default function Form({
  selectedGroupType,
  searchText,
  handleGroupTypeClick,
  togglePopup,
  handleAddMember,
  isPopupVisible,
  setSearchText,
}) {
  return (
    <>
      {/* Group Name */}
      <div className="mb-4">
        <label htmlFor="groupName" className="block text-gray-600 font-medium mb-1">
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
        <label htmlFor="description" className="block text-gray-600 font-medium mb-1">
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
        <button className="px-4 py-2 bg-red-200 text-red-700 border rounded-lg hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
          Create
        </button>
      </div>
    </>
  );
}
