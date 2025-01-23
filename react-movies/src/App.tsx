import { useState } from "react";
import UseEffectExamples from "./UseEffectExamples";

function App() {
  const [piilossa, setPiilossa] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setPiilossa(!piilossa)} /> Piilossa
      {piilossa ? null : <UseEffectExamples />}
    </>
  );
}

export default App;
