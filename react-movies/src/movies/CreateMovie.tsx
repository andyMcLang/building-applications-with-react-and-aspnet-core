import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviesPostGetDTO } from "./movies.model";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../endpoints";
import Loading from "../utils/Loading";
import { convertMovieToFormData } from "../utils/formDataUtils";
import { useNavigate } from "react-router-dom";
import DisplayErrors from "../utils/DisplayErrors";

export default function CreateMovie() {
  const [nonSelectedGenres, setNonSelectedGenres] = useState<genreDTO[]>([]);
  const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState<
    movieTheaterDTO[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectedGenres(response.data.genres);
        setNonSelectedMovieTheaters(response.data.movieTheater);
        setLoading(false);
      });
  }, []);

  async function create(movie: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movie);
      const response = await axios({
        method: "post",
        url: urlMovies,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      navigate("/movies");
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <>
      <h3>Luodaan Elokuvan tiedot</h3>
      <DisplayErrors errors={errors} />
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
          onSubmit={async (values) => await create(values)}
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
