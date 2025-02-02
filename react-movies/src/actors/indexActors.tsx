import { Link } from "react-router-dom";

export default function IndexActors() {
  return (
    <>
      <h3>Näyttelijät</h3>
      <Link className="btn btn-primary" to="/actors/create">Luodaan Näyttelijä</Link>
    </>
  );
}
