import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGenres, urlMovies } from "../endpoints";
import { movieDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function FilterMovies() {
  const initialValues: filterMoviesForm = {
    title: "",
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false,
    page: 1,
    recordsPerPage: 10,
  };

  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [movies, setMovies] = useState<movieDTO[]>([]);

  useEffect(() => {
    axios
      .get(`${urlGenres}/all`)
      .then((response: AxiosResponse<genreDTO[]>) => {
        setGenres(response.data);
      });
  }, []);

  useEffect(() => {
    searchMovies(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function searchMovies(values: filterMoviesForm) {
    axios
      .get(`${urlMovies}/filter`, { params: values })
      .then((response: AxiosResponse<movieDTO[]>) => {
        setMovies(response.data);
      });
  }

  return (
    <>
      <h3>Suodata Elokuvat</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          values.page = 1;
          searchMovies(values);
        }}
      >
        {(formikProps) => (
          <>
            <Form>
              <div className="row gx-3 align-items-center mb-3"></div>
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
                  <label
                    className="form-check-label"
                    htmlFor="upcomingReleases"
                  >
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
                  onClick={() => {
                    formikProps.setValues(initialValues);
                    searchMovies(initialValues);
                  }}
                >
                  Tyhjennä
                </Button>
              </div>
            </Form>

            <MoviesList movies={movies} />
          </>
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
  page: number;
  recordsPerPage: number;
}
