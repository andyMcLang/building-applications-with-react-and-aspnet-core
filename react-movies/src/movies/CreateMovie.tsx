import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";
import { moviesPostGetDTO } from "./movies.model";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../endpoints";
import Loading from "../utils/Loading";

export default function CreateMovie() {
  const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<
    movieTheaterDTO[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectedGenres(response.data.genres);
        setNonSelectedMovieTheaters(response.data.movieTheater);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h3>Luodaan Elokuvan tiedot</h3>
      {loading ? (
        <Loading />
      ) : (
        <MovieForm
          model={{
            title: "",
            inTheaters: false,
            trailer: "",
            releaseDate: undefined,
            poster: undefined,
            posterURL: undefined,
            genresIds: [],
            movieTheatersIds: [],
            actors: [],
          }}
          onSubmit={(values) => {
            console.log("Lähetettävät tiedot:", values);
          }}
          selectedGenres={[]} // Aluksi ei ole valittuja genrejä
          nonSelectedGenres={nonSelectedGenres}
          selectedMovieTheaters={[]} // Aluksi ei ole valittuja teattereita
          nonSelectedMovieTheaters={nonSelectedMovieTheaters}
          selectedActors={[]} // Aluksi ei ole valittuja näyttelijöitä
        />
      )}
    </>
  );
}
