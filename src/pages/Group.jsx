import { Link } from "react-router-dom";
import GroupCard from "../components/GroupPage/GroupCard";

const groups = [
  {
    id: 1,
    name: "Weekend Trip",
    type: "Travel",
    image: "https://via.placeholder.com/50", // Placeholder image for group icon
    members: ["Alice", "Bob", "Charlie"],
    totalAmount: "€450.00",
  },
  {
    id: 2,
    name: "Office Lunches",
    type: "Food",
    image: "https://via.placeholder.com/50",
    members: ["John", "Doe", "Smith"],
    totalAmount: "€180.00",
  },
  {
    id: 3,
    name: "Roommates",
    type: "Bills",
    image: "https://via.placeholder.com/50",
    members: ["Jake", "Amy", "Terry"],
    totalAmount: "€300.00",
  },
];

const Group = () => {
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
