/* eslint-disable react/prop-types */
// StatCard.js

import { BsGraphUp } from "react-icons/bs";

const StatCard = ({amount, label }) => {
  return (
    <div
      className={`p-4 bg-white rounded-lg border-2 border-black flex justify-between items-center`}
    >
      <div>
        <h2 className="text-xl font-semibold">{amount}</h2>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
        <BsGraphUp size={25}/>
    </div>
  );
};

export default StatCard;