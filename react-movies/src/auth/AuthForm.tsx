import { Form, Formik, FormikHelpers } from "formik";
import { userCredentials } from "./auth.models";
import * as Yup from "yup";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function AuthForm(props: authFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Väärä söhkpostiosoitteen muoto")
          .required("Sähköpostiosoite on pakollinen"),
        password: Yup.string()
          .required("Salasana on pakollinen")
          .min(4, "Salasanan pituuden tulee olla vähintään 4 merkkiä")
          .max(20, "Salasanan pituuden tulee olla enintään 20 merkkiä"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Sähköposti" field="email" />
          <TextField displayName="Salasana" field="password" type="password" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Lähetä
          </Button>
          <Link className="btn btn-secondary ms-2" to="/">
            Peruuta
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface authFormProps {
  model: userCredentials;
  onSubmit(
    values: userCredentials,
    actions: FormikHelpers<userCredentials>
  ): void;
}
