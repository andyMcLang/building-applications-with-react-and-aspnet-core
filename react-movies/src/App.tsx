// Section 3: First Steps with React done!

import { useState } from "react";
import UseEffectExamples from "./UseEffectExamples";
import GrandParent from "./Grandparent";
import ValueContext from "./ValueContext";
import DisplayGrade from "./DisplayGrade";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const [piilossa, setPiilossa] = useState(false);
  const grades = [75, 95, -5, 55];

  return (
    <>
      {/* <input type="checkbox" onChange={() => setPiilossa(!piilossa)} /> Piilossa
      {piilossa ? null : <UseEffectExamples />}
      <ValueContext.Provider value={piilossa}>
        <GrandParent />
      </ValueContext.Provider> */}

      {grades.map((grade, index) => (
        <ErrorBoundary
          key={index}
          errorUI={<h3>Virhe tulostaessaan gradea</h3>}
        >
          <DisplayGrade grade={grade} />
        </ErrorBoundary>
      ))}
    </>
  );
}

export default App;
