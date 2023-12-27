import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SidebarState {
  isHide: boolean;
  toggleVisibility: () => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      isHide: false,
      toggleVisibility: () => set((state) => ({ isHide: !state.isHide })),
    }),
    {
      name: 'sidebar-storage',
    },
  ),
);
