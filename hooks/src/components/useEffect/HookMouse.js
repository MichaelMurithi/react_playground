import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  //Having an empty dependency array runs useEffect only once
  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    //A return method in usEffect specifies a cleanup function suppose the component unmounts    return () => {
    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hook X - {X} Y- {Y}
    </div>
  );
};

export default HookMouse;
