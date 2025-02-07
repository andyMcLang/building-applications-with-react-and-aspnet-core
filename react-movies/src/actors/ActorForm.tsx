import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from "yup";

export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Nimi on pakollinen")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Nimi" field="name" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Lähetä
          </Button>
          <Link className="btn btn-secondary" to="/actors">
            Peruuta
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface actorFormProps {
  model: actorCreationDTO;
  onSubmit(
    values: actorCreationDTO,
    action: FormikHelpers<actorCreationDTO>
  ): void;
}
