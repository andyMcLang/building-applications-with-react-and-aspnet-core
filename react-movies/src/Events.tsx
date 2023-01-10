import React from "react";

export default function Events() {
  let voiNahda = true;

  function handleCheckboxChanged() {
    // alert("arvo on vaihdettu!");
    voiNahda = !voiNahda;
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e.currentTarget.value);
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

      {voiNahda ? (
        <div>Tämän voit nähdä koska arvo on true</div>
      ) : (
        <div>Tämän arvon et voi nähdä, koska arvo on false</div>
      )}
    </>
  );
}
