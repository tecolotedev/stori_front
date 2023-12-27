import { create } from "zustand";
import { Account } from "@/types";

type AccountStore = {
  accounts: Account[];
  initAccounts: (accounts: Account[]) => void;
  addAccount: (account: Account) => void;
};

export const accountStore = create<AccountStore>((set) => ({
  accounts: [],
  initAccounts: (accounts: Account[]) => set((state) => ({ accounts })),
  addAccount: (account: Account) =>
    set((state) => ({ accounts: [...state.accounts, account] })),
}));
