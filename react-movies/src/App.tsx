import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./Validation";

configureValidation();

function App() {
  
  return (
    
    <BrowserRouter>
      <Menu />
      <div className="container">
        
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
