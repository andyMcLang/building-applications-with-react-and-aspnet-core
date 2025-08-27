import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";
import { urlMovies } from "../endpoints";
import axios, { AxiosResponse } from "axios";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({
    ohjelmistossaNyt: [],
    tulossaLeffat: [],
  });

  useEffect(() => {
    axios.get(urlMovies).then((response: AxiosResponse<any>) => {
      setMovies({
        ohjelmistossaNyt: response.data.inTheaters ?? [],
        tulossaLeffat: response.data.upcomingReleases ?? [],
      });
    });
  }, []);

  return (
    <>
      <h3>Teatterissa</h3>
      <MoviesList movies={movies.ohjelmistossaNyt || []} /> {}
      <h3>Tulossa teattereihin</h3>
      <MoviesList movies={movies.tulossaLeffat || []} /> {}
    </>
  );
}
