import * as React from "react";
import "./Radio.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  // Clone children and inject props


/* without React.cloneElement, 
** you would lose the ability to dynamically inject props into each RadioOption, 
** which is a key feature of the RadioGroup. 
** This means you would have to manage the state and props more manually, 
** which can lead to more complex and less maintainable code.
** Benefits:

Efficiency: You avoid redundancy by not having to rewrite all props.
Flexibility: Easily modify only the necessary props while keeping the rest intact.

*/

  const RadioOptions = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      checked: selected === child.props.value,
      onChange,
      name: "radioGroup", // common name to group the radio buttons
    })
  );

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value} 
      type="radio" 
      name={value} //shared among all radios in the group
      value={value}
      checked={checked}
      onChange={(e) => { 
        onChange(e.target.value); 

    //    onChange={() => onChange(value)} // Call parent handler with selected value
      }} 
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
