import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { actorMovieDTO } from "../actors/actors.model";
import MovieForm from "./MovieForm";
import { movieCreationDTO } from "./movies.model";

export default function CreateMovie() {
  // Alustetaan valitsemattomat genret
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Toiminta" },
    { id: 2, name: "Komedia" },
    { id: 3, name: "Draama" },
  ];

  // Alustetaan valitsemattomat elokuvateatterit
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Tennispalatsi" },
    { id: 2, name: "Kinopalatsi" },
  ];

  // Alustetaan tyhjä näyttelijälista
  const selectedActors: actorMovieDTO[] = [];

  // Alustetaan lomakkeen oletusarvot
  const initialValues: movieCreationDTO = {
    title: "",
    inTheaters: false,
    trailer: "",
    releaseDate: undefined,
    poster: undefined,
    genresIds: [],
    movieTheatersIds: [],
    actors: [],
  };

  return (
    <>
      <h3>Luodaan Elokuvan tiedot</h3>
      <MovieForm
        model={initialValues}
        onSubmit={(values) => {
          console.log("Lähetettävät tiedot:", values);
        }}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]} // Aluksi ei ole valittuja genrejä
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={[]} // Aluksi ei ole valittuja teattereita
        selectedActors={selectedActors} // Aluksi ei ole valittuja näyttelijöitä
      />
    </>
  );
}
