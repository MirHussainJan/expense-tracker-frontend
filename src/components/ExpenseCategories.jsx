// ExpenseCategories.js
import React from "react";
import ExpenseCategory from "./ExpenseCategory";
import { MdOutlineCategory } from "react-icons/md";

const ExpenseCategories = () => {
  const categories = [
    { icon: <MdOutlineCategory />, label: "Food" },
    { icon: <MdOutlineCategory />, label: "Travel" },
    { icon: <MdOutlineCategory />, label: "Rent" },
    { icon: <MdOutlineCategory />, label: "Shopping" },
    { icon: <MdOutlineCategory />, label: "Medicine" },
    { icon: <MdOutlineCategory />, label: "Add new" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {categories.map((category, index) => (
          <ExpenseCategory key={index} icon={category.icon} label={category.label} />
        ))}
      </div>
    </div>
  );
};

export default ExpenseCategories;