import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps) {
  return (
    <>
      <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Nimi vaaditaan!")
            .max(50, "Maksimimäärä kirjaimia 50"),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Nimi" />
            <Button disabled={formikProps.isSubmitting} type="submit">
              Lähetä
            </Button>
            <Link className="btn btn-secondary" to="/genres">
              Peruuta
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    values: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ): void;
}
