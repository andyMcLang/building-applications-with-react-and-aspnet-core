import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import DateField from "../forms/DateField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckboxField";
import MultipleSelector, {
  multipleSelectorModel,
} from "../forms/MultipleSelector";
import { useState } from "react";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorMovieDTO } from "../actors/actors.model";
import MarkdownField from "../forms/MarkdownField";

export default function MovieForm(props: movieFormProps) {
  function mapToModel(items: { id: number; name: string }[] = []) {
    return items.map((item) => ({
      key: item.id,
      value: item.name,
    }));
  }
  // Käytetään useStatea hallitsemaan valittuja ja valitsemattomia kohteita
  const [selectedGenres, setSelectedGenres] = useState(
    mapToModel(props.selectedGenres ?? [])
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState(
    mapToModel(props.nonSelectedGenres ?? [])
  );

  const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(
    mapToModel(props.selectedMovieTheaters ?? [])
  );
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(
    mapToModel(props.nonSelectedMovieTheaters ?? [])
  );

  const [selectedActors, setSelectedActors] = useState<actorMovieDTO[]>(
    props.selectedActors ?? []
  );

  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((item) => item.key);
        values.movieTheatersIds = selectedMovieTheaters.map((item) => item.key);
        values.actors = selectedActors.map((actor) => ({
          id: actor.id,
          character: actor.character ?? "", // Varmistetaan, ettei character ole undefined
        }));
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("Tämä kenttä on pakollinen")
          .test(
            "firstLetterUppercase",
            "Nimen ensimmäinen kirjain pitää olla iso",
            (value) => (value ? /^[A-Z]/.test(value) : false)
          ),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField displayName="Nimi" field="title" />
          <CheckboxField displayName="Teatterissa" field="inTheaters" />
          <TextField displayName="Traileri" field="trailer" />
          <DateField displayName="Ensi-ilta" field="releaseDate" />
          <ImageField
            displayName="Kuva"
            field="poster"
            imageURL={props.model.posterURL}
          />

          <MarkdownField displayName="Yhteenveto" field="summary" />

          <MultipleSelector
            displayName="Genret"
            nonSelected={nonSelectedGenres}
            selected={selectedGenres}
            onChange={(selected, nonSelected) => {
              setSelectedGenres(selected);
              setNonSelectedGenres(nonSelected);
            }}
          />

          <TypeAheadActors
            displayName="Näyttelijät"
            actors={selectedActors}
            onAdd={(actors) => setSelectedActors(actors)}
            onRemove={(actor) => {
              setSelectedActors((prevActors) =>
                prevActors.filter((a) => a.id !== actor.id)
              );
            }}
            listUi={(actor: actorMovieDTO) => (
              <>
                {actor.name} /
                <input
                  placeholder="Hahmo"
                  type="text"
                  value={actor.character ?? ""}
                  onChange={(e) => {
                    const newValue = e.currentTarget.value;
                    setSelectedActors((prevActors) =>
                      prevActors.map((a) =>
                        a.id === actor.id ? { ...a, character: newValue } : a
                      )
                    );
                  }}
                />
              </>
            )}
          />

          <MultipleSelector
            displayName="Elokuvateatterit"
            nonSelected={nonSelectedMovieTheaters}
            selected={selectedMovieTheaters}
            onChange={(selected, nonSelected) => {
              setSelectedMovieTheaters(selected);
              setNonSelectedMovieTheaters(nonSelected);
            }}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Lähetä
          </Button>
          <Link className="btn btn-secondary" to="/movies">
            Peruuta
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface movieFormProps {
  model: movieCreationDTO;
  onSubmit(
    values: movieCreationDTO,
    actions: FormikHelpers<movieCreationDTO>
  ): void;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheaterDTO[];
  nonSelectedMovieTheaters: movieTheaterDTO[];
  selectedActors: actorMovieDTO[];
}
