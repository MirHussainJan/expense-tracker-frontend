import { useState } from "react";
import AddExpense from "../components/GroupDetailsPage/AddExpense";

export default function GroupDetails() {
  const [groupMembers, setGroupMembers] = useState([
    { name: "Ali R.", owes: "€4,143.01" },
    { name: "Abdul M.", owes: "€3,160.77" },
    { name: "Faique A.", owes: "€731.08" },
    { name: "John D.", owes: "€450.00" },
  ]);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [balances, setBalances] = useState(groupMembers);
  const [showBalancesModal, setShowBalancesModal] = useState(false); // To control modal visibility
  const [showSettleUpModal, setShowSettleUpModal] = useState(false); // To control settle-up modal visibility
  const [expenseToSettle, setExpenseToSettle] = useState(null);

  const handleSettleUp = () => {
    setShowSettleUpModal(true); // Show the settle-up modal
  };

  const handleBalances = () => {
    // Open the balances modal
    setShowBalancesModal(true);
  };

  const handleAddExpense = (expenseDetails) => {
    console.log("Expense added:", expenseDetails);
    setShowAddExpenseModal(false);
    // Update balances logic here
  };

  const handleCloseBalancesModal = () => {
    setShowBalancesModal(false);
  };

  const handleCloseSettleUpModal = () => {
    setShowSettleUpModal(false); // Close settle-up modal
  };

  const handleSettleSelectedExpense = (expense) => {
    // Handle the logic to settle the selected expense
    console.log("Settling expense:", expense);
    setExpenseToSettle(expense);
    setShowSettleUpModal(false); // Close the modal after settling
  };

  const visibleMembers = showAllMembers ? groupMembers : groupMembers.slice(0, 3);

  return (
    <div className="pt-24 min-h-screen text-black">
      {/* Header Section */}
      <div className="border-2 rounded-xl border-black text-center relative bg-white p-6 mx-6">
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2">
          <img
            src="/right.jfif"
            alt="Group"
            className="w-20 h-20 rounded-full border-2 bg-cover bg-center object-cover object-center"
          />
        </div>
        <h1 className="font-bold text-xl mt-12">Barfi Enterprises</h1>
        <p className="mt-2">
          You are owed <span className="font-semibold">€1,713.32</span> overall
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {visibleMembers.map((member, index) => (
            <span key={index}>
              {member.name} owes you{" "}
              <span className="font-semibold text-black">{member.owes}</span>
              {index < visibleMembers.length - 1 ? " | " : ""}
            </span>
          ))}
          {groupMembers.length > 3 && !showAllMembers && (
            <button
              className="text-gray-500 underline ml-2"
              onClick={() => setShowAllMembers(true)}
            >
              View More
            </button>
          )}
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="bg-black text-white text-sm font-semibold py-2 px-6 rounded-full"
            onClick={handleSettleUp}
          >
            Settle up
          </button>
          <button
            className="bg-black  text-white text-sm font-semibold py-2 px-6 rounded-full"
            onClick={handleBalances}
          >
            Balances
          </button>
        </div>
      </div>

      {/* Transactions Section */}
      <div className="mt-8 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transactions (November 2024)</h2>
          <button
            className="bg-black text-white py-2 px-6 rounded-full"
            onClick={() => setShowAddExpenseModal(true)}
          >
            + Add Expense
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {[{ date: "Nov 26", label: "Water", amount: "€50.00", status: "borrowed" }, { date: "Nov 25", label: "Sultan Nakshtra", amount: "€223.34", status: "owed" }].map((item, index) => (
            <div key={index} className="flex items-center justify-between border-2 border-black rounded-lg shadow-md p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold bg-white">T</span>
                </div>
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
              <div className={`text-right ${item.status === "borrowed" ? "text-gray-500" : "text-black"}`}>
                {item.status === "borrowed" ? "You borrowed" : "You are owed"}
                <p className="font-bold">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Expense Modal */}
      {showAddExpenseModal && (
        <AddExpense
          members={groupMembers}
          showModal={showAddExpenseModal}
          onClose={() => setShowAddExpenseModal(false)}
          onSubmit={handleAddExpense}
        />
      )}

      {/* Balances Modal */}
      {showBalancesModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Group Balances</h3>
            <ul>
              {balances.map((member, index) => (
                <li key={index} className="flex justify-between py-2 border-b">
                  <span>{member.name}</span>
                  <span className="font-semibold">{member.owes}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                className="bg-black text-white py-1 px-4 rounded-full"
                onClick={handleCloseBalancesModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settle Up Modal */}
      {showSettleUpModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-lg font-semibold mb-4">Select Expense to Settle</h3>
            <ul>
              {[{ label: "Water", amount: "€50.00" }, { label: "Sultan Nakshtra", amount: "€223.34" }].map((expense, index) => (
                <li key={index} className="flex justify-between py-2 border-b">
                  <span>{expense.label}</span>
                  <span className="font-semibold">{expense.amount}</span>
                  <button
                    onClick={() => handleSettleSelectedExpense(expense)}
                    className="ml-4 bg-black text-white text-sm py-1 px-4 rounded-full"
                  >
                    Settle
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                className="border-2 border-black  text-sm py-1 px-4 rounded-full"
                onClick={handleCloseSettleUpModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
