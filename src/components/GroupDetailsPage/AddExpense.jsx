import { useState, useEffect } from 'react';
import useExpenseStore from '../../stores/expenseStore'; // Import the Zustand store

export default function AddExpense({ members, onClose, onSubmit }) {
  const totalAmount = useExpenseStore(state => state.totalAmount);
  const splitType = useExpenseStore(state => state.splitType);
  const splitDetails = useExpenseStore(state => state.splitDetails);
  const groupId = useExpenseStore(state => state.groupId);
  const userId = useExpenseStore(state => state.userId);
  const error = useExpenseStore(state => state.error);
  const successMessage = useExpenseStore(state => state.successMessage);
  const addExpense = useExpenseStore(state => state.addExpense);
  const setError = useExpenseStore(state => state.setError);
  const setSuccessMessage = useExpenseStore(state => state.setSuccessMessage);
  const setTotalAmount = useExpenseStore(state => state.setTotalAmount);
  const setSplitType = useExpenseStore(state => state.setSplitType);
  const setSplitDetails = useExpenseStore(state => state.setSplitDetails);
  

  const [formError, setFormError] = useState({});
  const [formSuccess, setFormSuccess] = useState('');

  const handleSplitChange = (memberName, value) => {
    setSplitDetails((prev) => ({
      ...prev,
      [memberName]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};

    if (!totalAmount || Number(totalAmount) <= 0) {
      newErrors.amount = 'Please enter a valid expense amount.';
    }

    if (splitType !== 'equal') {
      const invalidMembers = members.filter((member) => {
        const value = splitDetails[member.name];
        return !value || Number(value) <= 0;
      });

      if (invalidMembers.length > 0) {
        newErrors.splitDetails = `Please provide a valid ${
          splitType === 'percentage' ? 'percentage' : 'amount'
        } for all members.`;
      }

      if (splitType === 'percentage') {
        const totalPercentage = Object.values(splitDetails).reduce(
          (sum, val) => sum + Number(val || 0),
          0
        );
        if (totalPercentage !== 100) {
          newErrors.splitDetails = 'Total percentage must equal 100%.';
        }
      } else if (splitType === 'exact') {
        const totalAmount = Object.values(splitDetails).reduce(
          (sum, val) => sum + Number(val || 0),
          0
        );
        if (totalAmount !== Number(totalAmount)) {
          newErrors.splitDetails = 'Total exact amounts must equal the expense amount.';
        }
      }
    }

    setFormError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateFields()) {
      const expenseData = {
        groupId,
        expenseName: 'Sample Expense', // Or get this from an input field
        totalAmount,
        splitType,
        splitDetails: Object.keys(splitDetails).map((user) => ({
          user,
          amount: splitDetails[user],
        })),
      };

      try {
        const data = await addExpense(expenseData);
        setFormSuccess('Expense added successfully!');
        onSubmit(data.expense); // Pass back the created expense
        onClose(); // Close the form
      } catch (err) {
        setFormSuccess('');
        setError(err.response?.data?.message || 'Failed to add expense');
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Add Expense</h3>

        {/* Expense Amount */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Expense Amount</label>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter total amount"
            className={`block w-full border-2 rounded-full p-2 ${formError.amount ? 'border-red-500' : ''}`}
          />
          {formError.amount && <p className="text-red-500 text-sm mt-1">{formError.amount}</p>}
        </div>

        {/* Split Type */}
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

        {/* Split Details */}
        {splitType !== 'equal' && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">
              {splitType === 'percentage' ? 'Enter Percentage for Each Member' : 'Enter Exact Amount for Each Member'}
            </h4>
            {members.map((member, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="mr-4 w-1/3">{member.name}</span>
                <input
                  type="number"
                  value={splitDetails[member.name] || ''}
                  onChange={(e) => handleSplitChange(member.name, e.target.value)}
                  placeholder={`Enter ${splitType === 'percentage' ? '%' : 'amount'}`}
                  className={`w-2/3 border-2 rounded-full p-2 ${formError.splitDetails ? 'border-red-500' : ''}`}
                />
              </div>
            ))}
            {formError.splitDetails && <p className="text-red-500 text-sm mt-1">{formError.splitDetails}</p>}
          </div>
        )}

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mt-1">{successMessage}</p>}

        <div className="flex justify-end mt-4">
          <button className="bg-black text-white py-2 px-4 rounded-full" onClick={handleSubmit}>
            Submit
          </button>
          <button className="border-2 border-black py-1 px-4 rounded-full ml-2" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}