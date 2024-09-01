"use client";

import { useStore } from "./store";
import AComponent from "./AComponent";
import BComponent from "./BComponent";

const Wrapper: React.FC = () => {
  const { updateUser, addPost } = useStore();

  console.log("wrapper render");
  return (
    <div>
      <AComponent />
      <BComponent />
      <button onClick={() => updateUser("John", 31)}>Update Age</button>
      <button onClick={() => addPost("New post")}>Add Post</button>
    </div>
  );
};

export default Wrapper;
