import { create } from "zustand"

export const useAccount = create((set) => ({
  accounts: { phamtuanha: "1234567" },
  signUp: ({ email, password }) =>
    set((state) => {
      const account = { ...state.accounts }
      account[email] = password
      return { accounts: account }
    }),
}))
