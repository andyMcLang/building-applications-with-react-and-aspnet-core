


import { useEffect, useState } from "react";

export default function UseEffectExamples() {
  const [klikkaukset, setKlikkaukset] = useState(0);

  useEffect(() => {
    console.log("aktivoitu!");

    return () => {
      console.log("de-aktivoi!");
    };
  }, []);

  useEffect(() => {
    document.title = `${klikkaukset} kertaa!`;
  }, [klikkaukset]);

  return (
    <>
      <h1>UseEffect Examples</h1>
      <div>
        <button onClick={() => setKlikkaukset(klikkaukset + 1)}>
          klikkasit {klikkaukset} kertaa!
        </button>
      </div>
    </>
  );
}
