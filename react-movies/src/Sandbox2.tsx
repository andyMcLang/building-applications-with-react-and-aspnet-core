import { useEffect, useState } from "react";

export default function Sandbox2() {
  const [klikkaukset, setKlikkauset] = useState(0);
  const klikkauksenMaara = () => setKlikkauset(klikkaukset + 1);

  useEffect(() => {
    console.log(`Aktivoitu`);

    return () => console.log(`de-aktivoitu!`);
  }, []);

  useEffect(() => {
    document.title = `${klikkaukset}`;
  }, [klikkaukset]);

  return (
    <>
      <div>Hello, tässä toka sivu!</div>
      <button onClick={klikkauksenMaara}>klikkaa mua!</button>
      <div>Klikkasit {klikkaukset} kertaa!</div>
    </>
  );
}
