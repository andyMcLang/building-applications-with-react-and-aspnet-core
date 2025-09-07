import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validation";
import { useState } from "react";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";

configureValidation();

function App() {
  const [claims, setClaims] = useState<claim[]>([
    { name: "email", value: "andy@gotmail.com" },
  ]);

  return (
    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
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
