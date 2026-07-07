import { create } from "zustand";

export const useObjectStore = create((set) => ({
  hovered: null,

  selected: null,

  setHovered: (id) => set({ hovered: id }),

  setSelected: (id) => set({ selected: id }),
}));
