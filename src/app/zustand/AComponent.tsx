"use client";

import { useStore } from "./store";
import { useShallow } from "zustand/react/shallow";
const AComponent = () => {
  const user = useStore(useShallow((state) => state.user));

  console.log("A Component Render");

  return (
    <div>
      <h2>User Info (Without Shallow)</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default AComponent;
