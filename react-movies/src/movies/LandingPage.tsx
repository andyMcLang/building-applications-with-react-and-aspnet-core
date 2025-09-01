import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";
import { urlMovies } from "../endpoints";
import axios, { AxiosResponse } from "axios";
import AlertContext from "../utils/AlertContext";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({
    ohjelmistossaNyt: [],
    tulossaLeffat: [],
  });

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<any>) => {
      setMovies({
        ohjelmistossaNyt: response.data.inTheaters ?? [],
        tulossaLeffat: response.data.upcomingReleases ?? [],
      });
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
      <h3>Teatterissa</h3>
      <MoviesList movies={movies.ohjelmistossaNyt || []} /> {}
      <h3>Tulossa teattereihin</h3>
      <MoviesList movies={movies.tulossaLeffat || []} /> {}
    </AlertContext.Provider>
  );
}
