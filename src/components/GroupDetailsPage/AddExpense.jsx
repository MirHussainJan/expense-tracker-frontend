/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddExpense({ members, onClose, onSubmit }) {
  const [amount, setAmount] = useState("");
  const [splitType, setSplitType] = useState("equal");
  const [splitDetails, setSplitDetails] = useState({});
  const [errors, setErrors] = useState({}); // Error state for validation messages

  const handleSplitChange = (memberName, value) => {
    setSplitDetails((prev) => ({
      ...prev,
      [memberName]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};

    // Validate expense amount
    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Please enter a valid expense amount.";
    }

    // Validate split details if split type is not "equal"
    if (splitType !== "equal") {
      const invalidMembers = members.filter((member) => {
        const value = splitDetails[member.name];
        return !value || Number(value) <= 0;
      });

      if (invalidMembers.length > 0) {
        newErrors.splitDetails = `Please provide a valid ${
          splitType === "percentage" ? "percentage" : "amount"
        } for all members.`;
      }

      if (splitType === "percentage") {
        const totalPercentage = Object.values(splitDetails).reduce(
          (sum, val) => sum + Number(val || 0),
          0
        );
        if (totalPercentage !== 100) {
          newErrors.splitDetails = "Total percentage must equal 100%.";
        }
      } else if (splitType === "exact") {
        const totalAmount = Object.values(splitDetails).reduce(
          (sum, val) => sum + Number(val || 0),
          0
        );
        if (totalAmount !== Number(amount)) {
          newErrors.splitDetails =
            "Total exact amounts must equal the expense amount.";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      onSubmit({
        amount,
        splitType,
        splitDetails,
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Add Expense</h3>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Expense Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter total amount"
            className={`block w-full border-2 rounded-full p-2 ${
              errors.amount ? "border-red-500" : ""
            }`}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-2">Split By</label>
          <select
            value={splitType}
            onChange={(e) => setSplitType(e.target.value)}
            className="block w-full border-2 rounded-full p-2"
          >
            <option value="equal">Split Equally</option>
            <option value="percentage">Split by Percentage</option>
            <option value="exact">Split by Exact Amount</option>
          </select>
        </div>

        {splitType !== "equal" && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">
              {splitType === "percentage"
                ? "Enter Percentage for Each Member"
                : "Enter Exact Amount for Each Member"}
            </h4>
            {members.map((member, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="mr-4 w-1/3">{member.name}</span>
                <input
                  type="number"
                  value={splitDetails[member.name] || ""}
                  onChange={(e) =>
                    handleSplitChange(member.name, e.target.value)
                  }
                  placeholder={`Enter ${
                    splitType === "percentage" ? "%" : "amount"
                  }`}
                  className={`w-2/3 border-2 rounded-full p-2 ${
                    errors.splitDetails ? "border-red-500" : ""
                  }`}
                />
              </div>
            ))}
            {errors.splitDetails && (
              <p className="text-red-500 text-sm mt-1">{errors.splitDetails}</p>
            )}
          </div>
        )}

        <div className="flex justify-end mt-4">
          <button
            className="bg-black text-white py-2 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className=" border-2 border-black py-1 px-4 rounded-full ml-2"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
