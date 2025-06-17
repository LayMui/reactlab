import { useState, useEffect, useRef } from "react";

function usePrevious(val) {
    const ref = useRef();
  
    useEffect(() => {
      ref.current = val;
    }, [val]);
  
    return ref.current;
  }
  

  export default function UpdateDay() {
  const [day, setDay] = useState("Monday");

  const prevDay = usePrevious(day);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const getNextDay = () => {
    const currentIndex = days.indexOf(day);
    const nextIndex = (currentIndex + 1) % days.length;
    setDay(days[nextIndex]);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}



