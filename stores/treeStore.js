import { create } from 'zustand'

const useTreeStore = create((set) => ({
  selectedTree: null,
  setSelectedTree: (tree) => set({ selectedTree: tree }),
  clearSelectedTree: () => set({ selectedTree: null }),
}))

export default useTreeStore
