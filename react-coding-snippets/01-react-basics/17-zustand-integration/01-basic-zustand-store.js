// 📌 Topic: Zustand Store Setup
// 📖 Description: Zustand is a tiny state management library.
// This snippet creates a basic counter store with increment & reset.

import { create } from "zustand";

export const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

// 💡 Usage in component:
// const { count, increment } = useCounterStore();
