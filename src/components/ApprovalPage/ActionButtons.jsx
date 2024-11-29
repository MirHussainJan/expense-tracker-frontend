import React from "react";
import { FaEye, FaCheck, FaTimes } from "react-icons/fa";

const ActionButtons = ({ status, onApprove, onReject }) => {
  return (
    <div className="flex justify-center space-x-4">
      <FaEye className="text-gray-400 cursor-pointer hover:text-white" />
      <FaCheck
        className={`cursor-pointer ${
          status === "approved" ? "text-black" : "text-gray-700"
        }`}
        onClick={onApprove}
      />
      <FaTimes
        className="cursor-pointer text-gray-700 hover:text-gray-400"
        onClick={onReject}
      />
    </div>
  );
};

export default ActionButtons;