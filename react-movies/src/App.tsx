import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validation";
import { useEffect, useState } from "react";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";
import { getClaims } from "./auth/handleJWT";
import configureInterceptors from "./utils/httpinterceptors";

configureValidation();
configureInterceptors();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === "role" && claim.value === "admin"
      ) > -1
    );
  }

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  route.isAdmin && !isAdmin() ? (
                    <>Sinun ei olisi tarkoitus nähdä tätä sivua</>
                  ) : (
                    route.element
                  )
                }
              />
            ))}
          </Routes>
        </div>
        <footer className="bd-footer py-4 mt-5 bg-light">
          <div className="container">
            React Leffat {new Date().getFullYear().toString()}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>
  );
}

export default App;
