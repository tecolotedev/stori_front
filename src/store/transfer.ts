import { create } from "zustand";
import { Transfer } from "@/types";

type TransferStore = {
  transfers: Transfer[];
  balance: number;
  initTransfers: (transfers: Transfer[]) => void;
  setTransfers: (transfer: Transfer[]) => void;
  updateBalance: (balance: number) => void;
};

export const transferStore = create<TransferStore>((set) => ({
  transfers: [],
  balance: 0,
  initTransfers: (transfers: Transfer[]) => set(() => ({ transfers })),
  setTransfers: (transfers: Transfer[]) => set(() => ({ transfers })),
  updateBalance: (balance: number) => set((state) => ({ ...state, balance })),
}));
