import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: "Draama" },
    { id: 2, name: "Komedia" },
    { id: 3, name: "Toiminta" },
  ];

  return (
    <>
      <h3>Suodata Elokuvat</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center"></div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Elokuvan nimi"
                {...formikProps.getFieldProps("title")}
              />
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                id="genreId"
                {...formikProps.getFieldProps("genreId")}
              >
                <option value="0">--Valitse genre--</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  id="upcomingReleases"
                  name="upcomingReleases"
                />
                <label className="form-check-label" htmlFor="upcomingReleases">
                  Tulossa
                </label>
              </div>
            </div>
            <div className="col-auto">
              <div className="form-check">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  id="inTheaters"
                  name="inTheaters"
                />
                <label className="form-check-label" htmlFor="inTheaters">
                  Teatterissa
                </label>
              </div>
            </div>
            <div className="col-auto">
              <Button
                className="btn btn-primary"
                onClick={() => formikProps.submitForm()}
              >
                Suodata
              </Button>
              <Button
                className="btn btn-danger ms-3"
                onClick={() => formikProps.setValues(initialValues)}
              >
                Tyhjennä
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface filterMoviesForm {
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheaters: boolean;
}
