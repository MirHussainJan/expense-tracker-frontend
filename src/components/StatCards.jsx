// StatCards.js
import StatCard from "./StatCard";

const StatCards = () => {
  return (
    <div className="flex flex-col gap-5 justify-center col-lg-3 p-0">
      <StatCard
        amount="₹20,500"
        label="Total Income"
      />
      <StatCard
        amount="₹3,500"
        label="Total Expenses"
      />
      <StatCard
        amount="₹17,000"
        label="Total Balance"
      />
    </div>
  );
};

export default StatCards;
