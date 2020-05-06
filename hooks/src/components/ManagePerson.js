import React, { useCallback, useState } from "react";
import Title from "./Title";
import Content from "./Content";
import Button from "./Button";

const ManagePerson = () => {
  const [age, setAge] = useState(15);
  const [salary, setSalary] = useState(500);
  const increamentAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  //function  will only rerender if the salary value changes
  const increaseSallary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title text="Use Callback practice" />
      <Content content="Age" value={age} />
      <Button clickHandler={increamentAge} text="Increament Age" />
      <Content content="Sallary" value={salary} />
      <Button clickHandler={increaseSallary} text="Increament Salary" />
    </div>
  );
};

export default ManagePerson;
