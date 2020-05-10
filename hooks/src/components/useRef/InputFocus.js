import React, { useEffect, useRef } from "react";

const InputFocus = () => {
  //creates refference of the element
  const inputRef = useRef(null);
  useEffect(() => {
    //autofocuses the input element on load
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default InputFocus;
