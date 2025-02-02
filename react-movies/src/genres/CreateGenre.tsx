import { Link } from "react-router-dom";
import Button from "../utils/Button";
import configureValidation from "../Validation"; // Tuo konfiguraatiofunktio
import TextField from "../forms/TextField";
import { Formik, Form } from "formik";

const Yup = configureValidation(); // Suorita konfiguraatio ja hanki laajennettu Yup-objekti

export default function CreateGenre() {
  return (
    <>
      <h3>Luodaan uusi genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Nimi vaaditaan").firstLetterUppercase(),
        })}
      >
        <Form>
          <TextField field="name" displayName="Nimi" />
          <Button type="submit">Tallenna</Button>
          <Link className="btn btn-secondary" to="/genres">
            Peruuta
          </Link>
        </Form>
      </Formik>
    </>
  );
}