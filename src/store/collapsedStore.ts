import { create } from "zustand";

type CollapsedStoreType = {
  isCollapsed: boolean;
  setIsCollapsed: () => void;
};

export const useCollapsedStore = create<CollapsedStoreType>((set) => ({
  isCollapsed: false,
  setIsCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
