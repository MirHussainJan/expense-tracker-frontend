import {create} from 'zustand';
import axios from 'axios';

const useExpenseStore = create((set) => ({
  totalAmount: 0,
  splitDetails: {},
  splitType: 'equal',
  groupId: null,
  userId: null,
  error: null,
  successMessage: null,

  setTotalAmount: (amount) => set({ totalAmount: amount }),
  setSplitDetails: (details) => set({ splitDetails: details }),
  setSplitType: (type) => set({ splitType: type }),
  setGroupId: (id) => set({ groupId: id }),
  setUserId: (id) => set({ userId: id }),

  resetState: () => set({ totalAmount: 0, splitDetails: {}, splitType: 'equal', groupId: null, userId: null }),

  setError: (error) => set({ error }),
  setSuccessMessage: (message) => set({ successMessage: message }),

  // Method to add expense via API call
  addExpense: async (expenseData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/expenses/add', expenseData);
      set({ successMessage: 'Expense added successfully!' });
      return response.data; // return the response data for further use in components
    } catch (err) {
      set({ error: err.response?.data?.message || 'Failed to add expense' });
      throw err; // Propagate the error
    }
  }
}));

export default useExpenseStore;
