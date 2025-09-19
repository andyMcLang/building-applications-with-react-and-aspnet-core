import { Link, NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";
import Button from "./utils/Button";
import { logout } from "./auth/handleJWT";
import { useContext } from "react";
import AuthenticationContext from "./auth/AuthenticationContext";

export default function Menu() {
  const { update, claims } = useContext(AuthenticationContext);

  function getUserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Elokuvat
        </NavLink>
        <div
          className="collapse navbar-collapse"
          style={{ display: "flex", justifyContent: "space-between" }}
        ></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/filter">
                Suodata Elokuvat
              </NavLink>
            </li>
            <Authorized
              role="admin"
              authorized={
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/genres">
                      Genret
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/actors">
                      Näyttelijät
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/movietheaters">
                      Elokuvateatterit
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/movies/create">
                      Luo Elokuvatiedot
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/users">
                      Käyttäjät
                    </NavLink>
                  </li>
                </>
              }
            />
          </ul>
          <div className="d-flex">
            <Authorized
              authorized={
                <>
                  <span className="nav-link">
                    Tervetuloa, {getUserEmail()}!
                  </span>
                  <Button
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                    className="nav-link btn btn-link"
                  >
                    Kirjaudu ulos
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <Link to="/register" className="nav-link btn btn-link">
                    Rekisteröityminen
                  </Link>
                  <Link to="/login" className="nav-link btn btn-link">
                    Kirjaudu Sisään
                  </Link>
                </>
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
