import { ErrorMessage, Field } from "formik";

interface textFieldProps {
  displayName: string;
  field: string;
  type?: "text" | "password" | "email";
}

export default function TextField({ displayName, field, type = "text" }: textFieldProps) {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {displayName}
      </label>
      <Field
        type={type}
        name={field}
        id={field}
        className="form-control"
      />
      <ErrorMessage name={field}>
        {(msg) => <div className="text-danger">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
