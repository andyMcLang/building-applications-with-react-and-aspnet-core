import { useState } from "react";
import UseEffectExamples from "./UseEffectExamples";
import GrandParent from "./Grandparent";
import ValueContext from "./ValueContext";

function App() {
  const [piilossa, setPiilossa] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setPiilossa(!piilossa)} /> Piilossa
      {piilossa ? null : <UseEffectExamples />}
      <ValueContext.Provider value={piilossa}>
        <GrandParent />
      </ValueContext.Provider>
    </>
  );
}

export default App;
