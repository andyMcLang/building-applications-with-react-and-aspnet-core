import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({
    ohjelmistossaNyt: [],
    tulossaLeffat: [],
  });

  useEffect(() => {}, []);

  return (
    <>
      <h3>Teatterissa</h3>
      <MoviesList movies={movies.ohjelmistossaNyt || []} /> {}
      <h3>Tulossa teattereihin</h3>
      <MoviesList movies={movies.tulossaLeffat || []} /> {}
    </>
  );
}
