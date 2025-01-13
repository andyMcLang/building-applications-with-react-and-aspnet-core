import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Simple from "./Simple"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Simple />
  </React.StrictMode>
);

