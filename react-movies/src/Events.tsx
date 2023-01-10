import React, { useState } from "react";
import { setTextRange } from "typescript";

export default function Events() {
  const [voiNahda, setVoiNahda] = useState(false);
  const [teksti, setTeksti] = useState("");

  function handleCheckboxChanged() {
    // alert("arvo on vaihdettu!");
    setVoiNahda(!voiNahda);
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
    setTeksti(e.currentTarget.value);
  }

  return (
    <>
      <h1>Events esimerkki</h1>
      <div>
        <input type="checkbox" onChange={handleCheckboxChanged} />
      </div>

      <div>
        <button
          onClick={() => {
            alert("Minut on klikattu!");
          }}
        >
          Klikkaa mua!
        </button>
      </div>

      <div>
        <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
      </div>

      <div>{teksti}</div>

      {voiNahda ? (
        <div>Tämän voit nähdä koska arvo on true</div>
      ) : (
        <div>Tämän arvon et voi nähdä, koska arvo on false</div>
      )}
    </>
  );
}
