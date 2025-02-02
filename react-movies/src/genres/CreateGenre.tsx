import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { Formik } from "formik";

export default function CreateGenre() {
  return (
    <>
      <h3>Luodaan Genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(value) => {
          // kun lomake on postattu
          console.log(value);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Nimi</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={handleChange}
                value={values.name} // Liitä input Formikin arvoon
              />
            </div>
            <Button type="submit">Tallenna tiedot</Button>
            <Link className="btn btn-secondary" to="/genres">
              Peruuta
            </Link>
          </form>
        )}
      </Formik>
    </>
  );
}
