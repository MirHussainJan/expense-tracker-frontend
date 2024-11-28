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
      <div className="mb-2">
        <label htmlFor="groupName" className="block text-gray-600 font-medium mb-1 text-sm">
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          placeholder="Enter group name"
          className="block w-full px-3 py-2 border rounded-full shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        />
      </div>

      {/* Description */}
      <div className="mb-2">
        <label htmlFor="description" className="block text-gray-600 font-medium mb-1 text-sm">
          Description
        </label>
        <textarea
          id="description"
          rows="3"
          placeholder="Enter description"
          className="block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
        ></textarea>
      </div>
      <div>

      {/* Member Management */}
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
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 my-3">
        {/* Form Buttons */}
        <div className="flex justify-between gap-3">
          <button className="px-4 py-2 w-1/4 border-2 border-black rounded-full hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm">
            Cancel
          </button>
          <button className="px-4 py-2 w-3/4 bg-black text-white rounded-full font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm">
            Create
          </button>
        </div>
      </div>
    </>
  );
}
