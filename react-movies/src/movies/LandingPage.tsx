import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies.model";
import axios, { AxiosResponse } from "axios";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import MoviesList from "./MoviesList";
import Authorized from "../auth/Authorized";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
      setMovies(response.data);
    });
  }

  return (
    <AlertContext.Provider
      value={() => {
        loadData();
      }}
    >
      <Authorized
        authorized={<>Sinulla on valtuudet</>}
        notAuthorized={<>Sinulla ei ole valtuuksia</>}
        role="admin"
      />
      <h3>Teatterissa</h3>
      <MoviesList movies={movies.inTheaters || []} /> {}
      <h3>Tulossa teattereihin</h3>
      <MoviesList movies={movies.upcomingReleases || []} /> {}
    </AlertContext.Provider>
  );
}
