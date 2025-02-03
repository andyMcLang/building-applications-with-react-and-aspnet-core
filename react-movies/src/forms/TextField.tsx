import { ErrorMessage, useField } from "formik";

interface TextFieldProps {
  field: string;
  displayName?: string;
}

export default function TextField({ field, displayName }: TextFieldProps) {
  const [inputProps, meta] = useField(field);
  const labelText = displayName || field;

  return (
    <>
      <div className="mb-3">
        <label htmlFor={field}>{labelText}</label>
        <input
          type="text"
          {...inputProps} // Sisältää onChange, onBlur, value jne.
          id={field}
          className="form-control"
        />
        <ErrorMessage name={field}>
          {(msg) => <div className="text-danger">{msg}</div>}
        </ErrorMessage>
      </div>
    </>
  );
}