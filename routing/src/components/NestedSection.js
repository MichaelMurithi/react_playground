import React from "react";
import { useParams } from "react-router-dom";
function NestedSection() {
  let { section } = useParams();
  return (
    <div>
      The Requested section is:
      <br />
      {section}
    </div>
  );
}
export default NestedSection;
