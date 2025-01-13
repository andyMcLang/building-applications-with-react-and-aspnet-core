import { useState } from "react";

export default function Events() {
  const [teksti, setTeksti] = useState("");
  let [voitNahda, setVoitNahda] = useState(false);

  function handleClickUp(e: React.KeyboardEvent<HTMLInputElement>) {
    setTeksti(e.currentTarget.value);
  }

  function arvonVaihto() {
    setVoitNahda(!voitNahda);
  }

  return (
    <>
      <h1>Events Example</h1>
      <input type="checkbox" onChange={arvonVaihto} />
      <div>{voitNahda ? "voit nähdä" : "et voi nähdä!"}</div>
      <div>
        <input type="text" onKeyUp={(e) => handleClickUp(e)} />
        <div>{teksti}</div>
      </div>
    </>
  );
}
