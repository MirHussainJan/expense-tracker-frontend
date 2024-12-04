/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import AddExpense from "../components/GroupDetailsPage/AddExpense";
import { useParams } from "react-router-dom";
import Transaction from "../components/GroupDetailsPage/Transaction";
import Header from "../components/GroupDetailsPage/Header";

export default function GroupDetails() {
 
  const [groupMembers, setGroupMembers] = useState([]);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false); // Modal visibility state
  const [balances, setBalances] = useState(groupMembers);
  const [showBalancesModal, setShowBalancesModal] = useState(false); 
  const [showSettleUpModal, setShowSettleUpModal] = useState(false); 
  const [expenseToSettle, setExpenseToSettle] = useState(null);
  const {groupId} = useParams();
  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/groups/${groupId}/members`);
        const data = await response.json();
        setGroupMembers(data.members);
        console.log(data.members);
      } catch (error) {
        console.error("Failed to fetch group details:", error);
      }
    };
    fetchGroupDetails();
  }, [groupId]);
  

  // Handle submission of expense data
  const handleSubmitExpense = (expenseDetails) => {
    console.log("Expense added:", expenseDetails);
    setShowAddExpenseModal(false); // Close the modal after submitting the expense
    // Update balances logic here if needed
  };

  // Handle set-up modal visibility
  const handleSettleUp = () => {
    setShowSettleUpModal(true); // Show settle-up modal
  };

  // Handle balances modal visibility
  const handleBalances = () => {
    setShowBalancesModal(true); // Show balances modal
  };

  // Close balances modal
  const handleCloseBalancesModal = () => {
    setShowBalancesModal(false);
  };

  // Handle close settle-up modal
  const handleCloseSettleUpModal = () => {
    setShowSettleUpModal(false); // Close settle-up modal
  };

  // Settle selected expense
  const handleSettleSelectedExpense = (expense) => {
    console.log("Settling expense:", expense);
    setExpenseToSettle(expense);
    setShowSettleUpModal(false); // Close the modal after settling
  };

  const visibleMembers = showAllMembers ? groupMembers : groupMembers.slice(0, 3);

  return (
    <div className="pt-24 min-h-screen text-black">
      {/* Header Section */}
     <Header setShowSettleUpModal = {setShowAddExpenseModal} setShowBalancesModal = {setShowBalancesModal} visibleMembers = {visibleMembers} groupMembers = {groupMembers} showAllMembers = {showAllMembers} setShowAllMembers= {setShowAllMembers} />

      {/* Transactions Section */}
     <Transaction setShowAddExpenseModal={setShowAddExpenseModal}/>

      {/* Add Expense Modal */}
      {showAddExpenseModal && (
        <AddExpense
          members={groupMembers}
          showModal={showAddExpenseModal} // Passing showModal prop
          onClose={handleCloseAddExpenseModal} // Close modal when requested
          onSubmit={handleSubmitExpense} // Submit expense details
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