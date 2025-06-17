import React, { useState } from "react";

import useConsoleLog from "./useConsoleLog";
import "./Increment.css";

function Increment() {
    const [count, setCount] = useState(0);
    useConsoleLog(count);
  
    function increment() {
      setCount((prevCount) => prevCount + 1);
    }
  
    return (
      <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={increment}>
          Plus 1
        </button>
      </div>
    );
  
}

export default Increment;
