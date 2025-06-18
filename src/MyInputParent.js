import React, { useRef } from "react";
import MyInput from "./MyInput"; // import the input

function MyInputParent() {
  const inputRef = useRef(); // create a ref

  const handleClick = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <div style={{ padding: "2rem" }}>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}

export default MyInputParent;
