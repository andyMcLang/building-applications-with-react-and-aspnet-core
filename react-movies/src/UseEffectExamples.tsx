import { useEffect, useState } from "react";

export default function UseEffectExamples() {
  const [klikkauksia, setKlikkauksia] = useState(0);

  useEffect(() => {
    console.log("Aktivoitu!");

    return () => console.log("De-aktivoitu!");
  }, []);

  useEffect(() => {
    document.title = `Klikkauksia ${klikkauksia}`;
  }, [klikkauksia]);

  return (
    <>
      <h1>UseEffect Esimerkki</h1>
      <button onClick={() => setKlikkauksia(klikkauksia + 1)}>
        klikkauksia {klikkauksia}
      </button>
    </>
  );
}
