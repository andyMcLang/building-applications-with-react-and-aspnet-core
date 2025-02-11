import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup'
import Map from "../utils/Map";

export default function MovieTheaterForm(props: movieTheaterForm) {
  return (
    <Formik
    initialValues={props.model}
    onSubmit={props.onSubmit}
    validationSchema={Yup.object({
        name: Yup.string().required('Tämä kenttä on täytettävä').firstLetterUppercase()
    })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Name" field="name" />

          <div style={{marginBottom: '1rem'}}>
            <Map />
          </div>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Lähetä
          </Button>
          <Link className="btn btn-secondary" to="/movietheaters">
            Peruuta
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieTheaterForm {
  model: movieTheaterCreationDTO;
  onSubmit(
    values: movieTheaterCreationDTO,
    actions: FormikHelpers<movieTheaterCreationDTO>
  ): void;
}