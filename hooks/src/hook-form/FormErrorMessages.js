import React from "react";
import { useForm } from "react-hook-form";

const FormErrorMessages = () => {
  const { register, handleSubmit, errors } = useForm();
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        name="firstName"
        ref={register({
          required: { value: true, message: "This is a required field" },
          maxLength: { value: 1, message: "Should not be greater than 1" },
        })}
        placeholder="Enter first name here"
      />
      <br />
      {errors?.firstName?.message}
      {/* Returns an error message incase of an invalid field */}
      <br />
      <input
        type="number"
        name="age"
        ref={register({
          min: { value: 18, message: "Age should not be less than 18" },
        })}
      />
      <br />
      {errors?.age?.message}
      <br />
      <input type="submit" />
    </form>
  );
};

export default FormErrorMessages;
