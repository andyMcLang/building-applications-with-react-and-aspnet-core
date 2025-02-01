import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { movieDTO } from "./movies/movies.model";

function App() {
  const testMovie: movieDTO = {
    id: 1,
    title: "No Time To Die",
    poster: "https://cdn.europosters.eu/image/750webp/114389.webp",
  };

  return (
    <>
      <IndividualMovie {...testMovie} />
    </>
  );
}

export default App;
