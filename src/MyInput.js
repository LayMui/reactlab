import React, { forwardRef } from "react";

// This component accepts a ref and forwards it to the actual input element
const MyInput = forwardRef((props, ref) => {
  return <input ref={ref} placeholder="Type here..." />;
});

export default MyInput;
