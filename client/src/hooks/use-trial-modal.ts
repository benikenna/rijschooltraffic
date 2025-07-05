import { create } from 'zustand';

interface TrialModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useTrialModal = create<TrialModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));
