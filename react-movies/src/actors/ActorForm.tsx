import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { actorCreationDTO } from "./actors.model";
import * as Yup from "yup";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import MarkdownField from "../forms/MarkdownField";

export default function ActorForm(props: actorFormProps) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Nimi on pakollinen")
          .test(
            "first-letter-uppercase",
            "Ensimmäisen kirjaimen tulee olla iso",
            function (value) {
              if (value && value.length > 0) {
                return value[0] === value[0].toUpperCase();
              }
              return true;
            }
          ),
        dateOfBirth: Yup.date().nullable().required("Päivämäärä on pakollinen"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Nimi" field="name" />
          <DateField displayName="Date of Birth" field="dateOfBirth" />
          <ImageField
            displayName="Picture"
            field="picture"
            imageURL={props.model.pictureURL}
          />
          <MarkdownField displayName="Profiili" field="biography"/>

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
