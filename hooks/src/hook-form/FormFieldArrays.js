import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function FormFieldArrays() {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "test",
  });
  function submitData(data) {
    return console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`test[${index}].name`}
                defaultValue={item.name}
                ref={register()}
              />
              <button onClick={() => remove(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <section>
        <button type="button" onClick={() => append({ name: "test" })}>
          Append Element
        </button>
        <button type="button" onClick={() => prepend({ name: "test1" })}>
          Prepend Element
        </button>
      </section>
      <input type="submit" />
    </form>
  );
}

export default FormFieldArrays;
