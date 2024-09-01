"use client";

import { appStore, useStore } from "./store";
import { useShallow } from "zustand/react/shallow";
const BComponent = () => {
  const updateUser = useStore(useShallow((state) => state.updateUser));

  console.log("b rendering");

  return <h1>B Component</h1>;
};

export default BComponent;
