import { Link } from "react-router-dom";
import Button from "../utils/Button";
import TextField from "../forms/TextField";
import { Formik, Form } from "formik";
import configureValidation from "../Validation";

const Yup = configureValidation();

export default function CreateGenre() {
  return (
    <>
      <h3>Luodaan uusi genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 1));
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Nimi vaaditaan!").firstLetterUppercase(),
        })}
      >
        {(formikProps) => (
          <Form>
            <TextField field="name" displayName="Nimi" />
            <Button disabled={formikProps.isSubmitting} type="submit">Tallenna</Button>
            <Link className="btn btn-secondary" to="/genres">
              Peruuta
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
}
