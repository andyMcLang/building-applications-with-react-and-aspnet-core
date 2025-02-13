import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {

  const nonSelectedGenres: genreDTO[] = [
    { id: 2, name: "Komedia" },
  ];

  const selectedGenres: genreDTO[] = [
    { id: 1, name: "Toiminta" }
  ];

  
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [
    
    { id: 2, name: "Kinopalatsi" },
  ];

  
  const selectedMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Tennispalatsi" }
   
  ];

  return (
    <>
      <h3>Muokataan Elokuvan Tiedot</h3>
      <MovieForm
        model={{ title: "Venom: The Last Dance", inTheaters: true, trailer: "",
          releaseDate: new Date('2025-02-12T00:00:00')
         }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}

        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={[]}
      />
    </>
  );
}
