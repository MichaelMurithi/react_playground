import React from "react";
import ReactDOM from "react-dom";

function Modal() {
  return ReactDOM.createPortal(
    <div>
      <h2>This is a portal. Rendered outside the DOM tree</h2>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
