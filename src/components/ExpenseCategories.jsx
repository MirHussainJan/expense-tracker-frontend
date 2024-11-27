import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import ExpenseCategory from "./ExpenseCategory";
import { MdOutlineCategory } from "react-icons/md";

const ExpenseCategories = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const categories = [
    { icon: <MdOutlineCategory />, label: "Food" },
    { icon: <MdOutlineCategory />, label: "Travel" },
    { icon: <MdOutlineCategory />, label: "Rent" },
    { icon: <MdOutlineCategory />, label: "Shopping" },
    { icon: <MdOutlineCategory />, label: "Medicine" },
    { icon: <MdOutlineCategory />, label: "Add new", isAddNew: true }, // Added isAddNew flag
  ];

  const handleAddNewClick = () => {
    navigate("/create-group"); // Navigate to the create-group route
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <div className="flex overflow-x-auto space-x-4 py-4">
        {categories.map((category, index) => (
          <div key={index} onClick={category.isAddNew ? handleAddNewClick : null} className="cursor-pointer">
            <ExpenseCategory 
              icon={category.icon} 
              label={category.label} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCategories;
