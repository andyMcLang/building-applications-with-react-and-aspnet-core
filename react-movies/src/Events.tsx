import { useState } from "react";

export default function Events() {
  const [text, setText] = useState("");
  const [voitNahda, setVoitNahda] = useState(false);

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
  }

  function arvonVaihto() {
    setVoitNahda(!voitNahda);
  }

  return (
    <>
      <h1>Events Example</h1>
      <div>Kirjoita jotain kenttään:</div>
      <input
        type="text"
        onKeyUp={(e) => {
          console.log("Key pressed!");
          handleKeyUp(e);
        }}
      ></input>

      <div>{text}</div>
      <br></br>
      <input type="checkbox" onChange={arvonVaihto}></input>
      <div>
        {voitNahda ? (
          <div>Voit nähdä tekstin!</div>
        ) : (
          <div>Et voi nähdä tekstiä!</div>
        )}
      </div>
    </>
  );
}
