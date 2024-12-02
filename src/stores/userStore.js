import create from "zustand";
import axios from "axios";

const useUserStore = create((set) => ({
  user: null,
  groups: [],
  approvalsSent: [],
  approvalsReceived: [],
  setUser: (user) => set({ user }),
  setGroups: (groups) => set({ groups }),
  setApprovalsSent: (approvals) => set({ approvalsSent: approvals }),
  setApprovalsReceived: (approvals) => set({ approvalsReceived: approvals }),

  // Fetch user data from the API (example)
  fetchUser: async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      set({ user: response.data.user });
      set({ groups: response.data.groups });
      set({ approvalsSent: response.data.approvalsSent });
      set({ approvalsReceived: response.data.approvalsReceived });
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  },

  // Example of adding an expense to the user's group (update group data)
  addExpenseToGroup: async (userId, groupId, expenseData) => {
    try {
      const response = await axios.post(`/api/expenses/add`, {
        groupId,
        ...expenseData,
      });
      // Update groups after the expense is added
      set((state) => ({
        groups: state.groups.map((group) =>
          group._id === groupId
            ? { ...group, expenses: [...group.expenses, response.data.expense] }
            : group
        ),
      }));
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  },
}));

export default useUserStore;
