
/* eslint-disable react/prop-types */
export default function GroupTypeSelector({ selectedGroupType, handleGroupTypeClick}) {
    
  
    return (
      <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2">
              Group Type
            </label>
            <div className="flex gap-4">
              {["Trip", "Couple", "Others"].map((type) => (
                <div
                  key={type}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg cursor-pointer ${
                    selectedGroupType === type
                      ? "bg-purple-600 text-white"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleGroupTypeClick(type)}
                >
                  <span className="material-icons">group</span>
                  {type}
                </div>
              ))}
            </div>
          </div>
    );
  }
  