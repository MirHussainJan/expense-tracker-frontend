/* eslint-disable react/prop-types */
// StatCard.js

const StatCard = ({ color, amount, label }) => {
  return (
    <div
      className={`p-4 border-2 border-black rounded-full shadow-md flex justify-between items-center ${color}`}
    >
      <div>
        <h2 className="text-xl font-semibold">{amount}</h2>
        <p className="text-sm text-gray-700">{label}</p>
      </div>
      <div className="w-12 h-8 bg-white rounded-md"></div>
    </div>
  );
};

export default StatCard;