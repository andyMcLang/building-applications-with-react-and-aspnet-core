import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          React Elokuvat
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/genres">
                Genret
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies/filter">
                Suodata Elokuvat
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
