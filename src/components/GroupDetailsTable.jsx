// GroupDetailsTable.js
import React from "react";

const GroupDetailsTable = () => {
  const data = [
    { group: "Group A", members: 10, status: "Active" },
    { group: "Group B", members: 5, status: "Inactive" },
    { group: "Group C", members: 12, status: "Active" },
  ];
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">My Groups</h2>
      <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Group</th>
            <th className="border px-4 py-2 text-left">Members</th>
            <th className="border px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border px-4 py-2">{row.group}</td>
              <td className="border px-4 py-2">{row.members}</td>
              <td className="border px-4 py-2">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupDetailsTable;