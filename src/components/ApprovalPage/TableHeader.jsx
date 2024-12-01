import React from "react";

const TableHeader = () => {
  return (
    <div className="grid grid-cols-5 mt-5 items-center py-4 px-6 text-black uppercase text-sm font-bold border-b border-gray-500">
      <span>Admin</span>
      <span className="text-center">Category</span>
      <span className="text-center">Amount</span>
      <span className="text-center">Members</span>
      <span className="text-center">Action</span>
    </div>
  );
};

export default TableHeader;
