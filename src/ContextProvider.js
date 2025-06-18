// App.js
import React from "react";
import { CountProvider } from "./CountContext";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";

function ContextProvider() {
  return (
    <CountProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <CounterDisplay />
        <CounterButton />
      </div>
    </CountProvider>
  );
}

export default ContextProvider;
