import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";

export default function MovieForm(props: movieFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Nimi" field="title" />
          <CheckboxField displayName="Teatterissa" field="inTheaters" />
          <TextField displayName="Traileri" field="trailer" />
          <DateField displayName="Ensi-ilta" field="releaseDate" />
          <ImageField
            displayName="Posteri"
            field="poster"
            imageURL={props.model.posterURL}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Lähetä
          </Button>
          <Link className="btn btn-secondary" to="/genres">
            Peruuta
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
}
