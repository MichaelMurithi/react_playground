import React from "react";
import "./myStyles.css"; //Imports the stylesheet
function Stylesheet(props) {
  let className = props.primary ? "primary" : " "; //Styles the component as of class primary based on parameters given
  return (
    <div>
      <h1 className={`${className}, font-xl`}>Stylesheets</h1>
    </div>
  );
}

export default Stylesheet;
