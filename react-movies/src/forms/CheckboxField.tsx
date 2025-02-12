import { Field } from "formik";

interface checkboxField {
  displayName: string;
  field: string;
}

export default function CheckboxField({ displayName, field }: checkboxField) {
  return (
    <div className="mb-3 form-check">
      <Field
        className="form-check-input"
        id={field}
        name={field}
        type="checkbox"
      />
      <label htmlFor={field}>{displayName}</label>
    </div>
  );
}
