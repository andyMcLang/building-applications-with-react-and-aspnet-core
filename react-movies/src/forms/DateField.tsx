import { useFormikContext } from "formik";

export default function DateField(props: dateFieldProps) {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  const formatDate = (date: Date | undefined): string => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.currentTarget.value);
    if (!isNaN(date.getTime())) {
      setFieldValue(props.field, date);
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor={props.field}>{props.displayName}</label>
      <input
        type="date"
        id={props.field}
        name={props.field}
        value={formatDate(values[props.field])}
        onChange={handleDateChange}
      />
      {touched[props.field] && errors[props.field] ? (
        <div className="text-danger">{errors[props.field]?.toString()}</div>
      ) : null}
    </div>
  );
}

interface dateFieldProps {
  field: string;
  displayName: string;
}
