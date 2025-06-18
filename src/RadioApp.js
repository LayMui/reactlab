import "./Radio.css";
import { RadioGroup, RadioOption } from "./RadioGroup";
import { useState } from "react";


/* 
** how to leverage both  React.cloneElement and React.Children.map APIs to build modular components 
** that embrace the children prop. That allows you to offer a simple API to consumers and, 
** as a result, minimize the amount of external local state required to make them work.
*/
function RadioApp() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleSelectionChange = (value) => {
    setSelected(value);
    setSubmitted(false); // Clear the message when user reselects
  };

  return (
    <div className="Radio">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={handleSelectionChange} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected} onClick={handleSubmit}>
        Submit
      </button>

      {submitted && (
        <p>You selected: <strong>{selected.replace("_", " ")}</strong></p>
      )}
    </div>
  );
}

export default RadioApp;
