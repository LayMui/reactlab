// CounterDisplay.js
import React from "react";
import { useCount } from "./CountContext";

const CounterDisplay = () => {
  const { count } = useCount();
  return <h1>Current Count: {count}</h1>;
};

export default CounterDisplay;
