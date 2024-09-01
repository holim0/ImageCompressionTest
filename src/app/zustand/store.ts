import { use } from "react";
import { create } from "zustand";

interface AppStoreStates {
  a: number;
  b: number;

  setA: (a: number) => void;
  setB: (b: number) => void;
}

export const appStore = create<AppStoreStates>((set) => ({
  a: 0,
  b: 0,

  setA: (a: number) => set({ a }),
  setB: (b: number) => set({ b }),
}));

interface StoreState {
  user: { name: string; age: number };
  posts: string[];
  updateUser: (name: string, age: number) => void;
  addPost: (post: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  user: { name: "John", age: 30 },
  posts: ["First post"],
  updateUser: (name, age) =>
    set((state) => ({ user: { ...state.user, name, age } })),
  addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
}));
