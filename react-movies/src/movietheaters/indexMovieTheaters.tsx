import { Link } from "react-router-dom";

export default function IndexMovieTheaters() {
  return (
    <>
      <h3>Elokuvateatterit</h3>
      <Link className="btn btn-primary" to="/movietheaters/create">Luodaan Elokuvateatterin tiedot</Link>
    </>
  );
}
