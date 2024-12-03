/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Transaction({ setShowAddExpenseModal, transactions, setTransactions }) {
  const userId = sessionStorage.getItem("userId");
  const { groupId } = useParams();

  

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
        console.log("Fetched Data:", data);
        
        // Transform the data into the format required for rendering
        const transformedData = data.balances.map((item) => ({
          label: item.action === "give" ? `You owe ${item.toUser}` : `${item.fromUser} owes you`,
          expenseName: item.expenseName,
          expenseId: item.expenseId,
          balanceId: item.balanceId,
          amount: `€${item.amount.toFixed(2)}`,
          status: item.action === "give" ? "borrowed" : "owed",
          date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }), // Placeholder date
        }));
        transformedData.totalOwed = data.totalOwed;
        transformedData.groupName = data.groupName;
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
        <h2 className="text-lg font-semibold">Transactions</h2>
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
                {/* Icon for the transaction */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    item.status === "borrowed"
                      ? "bg-gray-300 border-gray-500"
                      : "bg-green-100 border-black"
                  } border-2`}
                >
                  <span
                    className={`text-sm font-bold ${
                      item.status === "borrowed" ? "text-gray-500" : "text-black"
                    }`}
                  >
                    {item.label.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">{item.expenseName}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
              <div
                className={`text-right ${
                  item.status === "borrowed" ? "text-gray-500" : "text-black"
                }`}
              >
                <p className="text-sm italic">{item.label}</p>
                <p className="font-bold">{item.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No transactions to display.</p>
        )}
      </div>
    </div>
  );
}
