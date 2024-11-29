import { Link } from "react-router-dom";
import GroupCard from "../components/GroupPage/GroupCard";
import {MdFamilyRestroom, MdPerson, MdHome } from "react-icons/md";
const groups = [
  {
    id: 1,
    name: "Weekend Trip",
    type: "Travel",
    icon: <MdHome size={25}/>, // Placeholder image for group icon
    members: ["Alice", "Bob", "Charlie"],
    totalAmount: "€450.00",
  },
  {
    id: 2,
    name: "Office Lunches",
    type: "Food",
    icon: <MdFamilyRestroom size={25}/>,
    members: ["John", "Doe", "Smith"],
    totalAmount: "€180.00",
  },
  {
    id: 3,
    name: "Roommates",
    type: "Bills",
    icon: <MdPerson size={25}/>,
    members: ["Jake", "Amy", "Terry"],
    totalAmount: "€300.00",
  },
];

const Group = () => {
  return (
    <div className="p-6 bg-gray-100 text-black min-h-screen font-poppins pt-24">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Groups</h1>
        <Link
          to="/create-group"
          className="bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          + Create Group
        </Link>
      </div>

    <GroupCard groups={groups}/>
    </div>
  );
};

export default Group;
