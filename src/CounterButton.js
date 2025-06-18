// CounterButton.js
import React from "react";
import { useCount } from "./CountContext";

const CounterButton = () => {
  const { setCount } = useCount();
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Increment Count
    </button>
  );
};

export default CounterButton;
