import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if rootElement is not null
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found!");
  // Or display a user-friendly error message on the page:
  // document.body.innerHTML = "<h1>Error: Root element not found!</h1>";
}

reportWebVitals();
