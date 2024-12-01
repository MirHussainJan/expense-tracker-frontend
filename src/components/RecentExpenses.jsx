import React from "react";

const RecentExpenses = () => {
  const data = [
    { description: "Nike Stores", amount: -100, date: "Sep 17 - 6:50 pm" },
    { description: "Michael", amount: 150, date: "Sep 12 - 6:50 pm" },
    { description: "Cafe Time", amount: -56, date: "Sep 13 - 3:50 pm" },
  ];

  return (
    <div className="col-lg-5 col-md-5 border-2 border-black bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-3">Recent Expenses</h2>
      <hr/>
      <div className="flex flex-col space-y-4">
        {data.map((row, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 border-2 border-black bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-black font-semibold">{row.description.charAt(0)}</span>
              </div>
              <div>
                <p className="text-md font-medium">{row.description}</p>
                <p className="text-sm text-gray-500">{row.date}</p>
              </div>
            </div>
            <p
              className={`text-lg font-semibold ${
                row.amount < 0 ? "text-gray-500" : "text-black"
              }`}
            >
              {row.amount < 0 ? `- ₹${Math.abs(row.amount)}` : `+ ₹${row.amount}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentExpenses;