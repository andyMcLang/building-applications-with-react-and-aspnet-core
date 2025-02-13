import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectedGenres: genreDTO[] = [
    { id: 1, name: "Toiminta" },
    { id: 2, name: "Komedia" },
    { id: 3, name: "Draama" },
  ];

  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Tennispalatsi" },
    { id: 2, name: "Kinopalatsi" },
  ];

  return (
    <>
      <h3>Luodaan Elokuvan tiedot</h3>
      <MovieForm
        model={{ title: "", inTheaters: false, trailer: "" }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={[]}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={[]}
      />
    </>
  );
}
