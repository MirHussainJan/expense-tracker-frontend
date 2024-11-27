// ExpenseCategory.js
import React from "react";

const ExpenseCategory = ({ icon, label }) => {
  return (
    <div className="w-24 h-24 border-2 border-black rounded-full shadow-md flex flex-col justify-center items-center bg-white">
      <div className="text-3xl text-purple-500">{icon}</div>
      <p className="mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

export default ExpenseCategory;