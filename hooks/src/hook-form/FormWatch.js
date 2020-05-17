import React from "react";
import { useForm } from "react-hook-form";
function FormWatch() {
  const { register, watch, errors } = useForm();
  const hasPassword = watch("hasPassword", true); //Checks for the value of 'hasPassword'  field
  return (
    <form>
      <input
        name="username"
        placeholder="username"
        ref={register({
          maxLength: {
            value: 2,
            message: "Name should not be more than 10 characters",
          },
        })}
      />
      <br />
      {errors?.username?.message}
      <br />
      <input type="checkbox" name="hasPassword" ref={register} /> Do you have a
      password ? <br />
      {/* Password field is rendered based on the value of the checkbox */}
      {hasPassword && (
        <input
          type="password"
          placeholder="Password"
          ref={register({
            min: { value: 8, message: "Password must be atleast 8 chars" },
          })}
        />
      )}
    </form>
  );
}

export default FormWatch;
