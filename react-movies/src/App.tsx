
import { useState } from "react";
import UseEffectExamples from "./UseEffectExamples";

function App() {
  const [piilota, setPiilota] = useState(false);

  return (
    <>
      <input type="checkbox" onChange={() => setPiilota(!piilota)} />
      Piilota!
      {piilota ? null : <UseEffectExamples />}
    </>
  );
}

export default App;
