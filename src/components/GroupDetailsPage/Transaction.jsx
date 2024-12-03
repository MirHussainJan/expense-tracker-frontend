/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Transaction({ setShowAddExpenseModal }) {
  const userId = sessionStorage.getItem("userId");
  const { groupId } = useParams();

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/groups/${groupId}/${userId}/user-balances`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
    
        // Transform the data into the format required for rendering
        const transformedData = [
          ...data.toGive.map((item) => ({
            label: item.username,
            amount: `€${item.amount.toFixed(2)}`,
            status: "borrowed",
            date: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }), // Placeholder date
          })),
          ...data.toTake.map((item) => ({
            label: item.username,
            amount: `€${item.amount.toFixed(2)}`,
            status: "owed",
            date: new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }), // Placeholder date
          })),
        ];
        console.log(transformedData);
        setTransactions(transformedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTransactions();
  }, [groupId, userId]);

  return (
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
        {transactions.length > 0 ? (
          transactions.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-2 border-black rounded-lg shadow-md p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold bg-white">
                    {item.label.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
              <div
                className={`text-right ${
                  item.status === "borrowed" ? "text-gray-500" : "text-black"
                }`}
              >
                {item.status === "borrowed" ? "You borrowed" : "You are owed"}
                <p className="font-bold">{item.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No transactions to display.</p>
        )}
      </div>
    </div>
  );
}
