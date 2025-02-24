import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { useSendFields } from "../hooks";

const Form = () => {
  const { register, control, handleSubmit, reset } = useForm();
  const { onSendFields, isSendingFields, wasSent } = useSendFields();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  const handleAddField = () => {
    append({ value: "" });
  };

  const handleRemoveField = (index: number) => () => {
    remove(index);
  };

  const handleSendFields = (fields: FieldValues) => {
    onSendFields(fields as { fields: [] });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleSendFields)}>
      {isSendingFields && "Sending fields...."}
      {wasSent && "Send successfully"}
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`fields.${index}.value`)} required/>
          <button type="button" onClick={handleRemoveField(index)}>
            Delete
          </button>
        </div>
      ))}
      <br />
      <button type="button" onClick={handleAddField}>
        Add field
      </button>
      <button type="submit">Send fields</button>
    </form>
  );
};

export default Form;
