
import StatCards from "../components/StatCards"; // Correct path for StatCards component
import ExpenseCategories from "../components/ExpenseCategories"; // Correct path for ExpenseCategories component
import GroupDetailsTable from "../components/GroupDetailsTable"; // Correct path for GroupDetailsTable component

const Home = () => {
  return (
    <div className="p-4 bg-purple-50 min-h-screen">
      <StatCards /> {/* StatCards component */}
      <ExpenseCategories /> {/* ExpenseCategories component */}
      <GroupDetailsTable /> {/* GroupDetailsTable component */}
    </div>
  );
};

export default Home;
