import { Customer } from "@/interfaces";
import { create } from "zustand";

export type ModalType = "createCustomer" | "updateCustomer" | "deleteCustomer";

interface ModalData {
  customer?: Customer;
}

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  getCustomer: () => void;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  getCustomer: () => {}, 
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => {
    set((state) => {
      state.getCustomer(); // call the function to update customers
      return { type: null, isOpen: false, data: {} };
    });
  },
}));
