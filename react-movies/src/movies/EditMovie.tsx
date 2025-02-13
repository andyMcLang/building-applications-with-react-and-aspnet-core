import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { actorMovieDTO } from "../actors/actors.model";
import MovieForm from "./MovieForm";
import { movieCreationDTO } from "./movies.model";

export default function EditMovie() {
  // Alustetaan valitut ja valitsemattomat genret
  const nonSelectedGenres: genreDTO[] = [{ id: 2, name: "Komedia" }];
  const selectedGenres: genreDTO[] = [{ id: 1, name: "Toiminta" }];

  // Alustetaan valitut ja valitsemattomat elokuvateatterit
  const nonSelectedMovieTheaters: movieTheaterDTO[] = [{ id: 2, name: "Kinopalatsi" }];
  const selectedMovieTheaters: movieTheaterDTO[] = [{ id: 1, name: "Tennispalatsi" }];

  // Alustetaan valitut näyttelijät
  const selectedActors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Morgan Freeman",
      character: "Red",
      picture:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/05/somerset-in-se7en3.jpg",
    },
  
  ];

  // Alustetaan lomakkeen oletusarvot (muokattava elokuva)
  const initialValues: movieCreationDTO = {
    title: "Venom: The Last Dance",
    inTheaters: true,
    trailer: "",
    releaseDate: new Date("2025-02-12T00:00:00"),
    poster: undefined,
    posterURL: "https://m.media-amazon.com/images/M/MV5BZGIxMTU1MjItM2FmMi00YmFiLTgwNDMtMTczYmVjYTBhNGZhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genresIds: selectedGenres.map((genre) => genre.id),
    movieTheatersIds: selectedMovieTheaters.map((theater) => theater.id),
    actors: selectedActors.map((actor) => ({
      id: actor.id,
      character: actor.character,
    })),
  };

  return (
    <>
      <h3>Muokataan Elokuvan Tiedot</h3>
      <MovieForm
        model={initialValues}
        onSubmit={(values) => {
          console.log("Päivitetyt tiedot:", values);
        }}
        nonSelectedGenres={nonSelectedGenres}
        selectedGenres={selectedGenres}
        nonSelectedMovieTheaters={nonSelectedMovieTheaters}
        selectedMovieTheaters={selectedMovieTheaters}
        selectedActors={selectedActors}
      />
    </>
  );
}
