import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({
    ohjelmistossaNyt: [],
    tulossaLeffat: [],
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        ohjelmistossaNyt: [
          {
            id: 1,
            title: "Nosferatu",
            poster:
              "https://media.finnkino.fi/1012/Event_14344/portrait_medium/Nosferatu_1080_v2.jpg",
          },
          {
            id: 2,
            title: "Levoton Tuhkimo",
            poster:
              "https://media.finnkino.fi/1012/Event_14300/portrait_medium/LevotonTuhkimo_1080.jpg",
          },
        ],
        tulossaLeffat: [
          {
            id: 1,
            title: "Mission: Impossible - The Final Reckoning",
            poster:
              "https://media.finnkino.fi/1012/Event_14435/portrait_medium/MissionImpossibleTFR_1080.jpg",
          },
          {
            id: 2,
            title: "Karate Kid: Legends",
            poster:
              "https://media.finnkino.fi/1012/Event_14477/portrait_medium/KarateKidLegends_1080.jpg",
          },
        ],
      });
    }, 1000);

    return () => clearTimeout(timerId);
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
