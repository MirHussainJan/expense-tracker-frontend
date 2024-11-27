// StatCards.js
import React from "react";
import StatCard from "./StatCard";

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <StatCard
        color="bg-green-100"
        amount="₹20,500"
        label="Total Income"
      />
      <StatCard
        color="bg-red-100"
        amount="₹3,500"
        label="Total Expenses"
      />
      <StatCard
        color="bg-purple-100"
        amount="₹17,000"
        label="Total Balance"
      />
    </div>
  );
};

export default StatCards;
