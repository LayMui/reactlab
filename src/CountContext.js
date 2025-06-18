// CountContext.js
import React, { createContext, useState, useContext } from "react";

// Create context
const CountContext = createContext();

// Create provider
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Create custom hook (optional for easier access)
export const useCount = () => useContext(CountContext);
