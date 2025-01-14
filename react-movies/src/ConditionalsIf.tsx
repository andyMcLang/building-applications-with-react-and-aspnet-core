import { useState } from "react";
import Simple from "./Simple";

export default function ConditionalsIf() {
  const [arvo, setArvo] = useState(0);

  function naytaTulokset() {
    if (arvo === 1) {
      return <span>Eih!</span>;
    } else if (arvo === 2) {
      return <Simple />;
    } else if (arvo === 3) {
      return (
        <div>
          <br></br>
          kirjoita miksi tämä numero:<br></br>
          <input type="text"></input>
        </div>
      );
    } else if (arvo === 4) {
      return (
        <>
          <h1>Kiitos!</h1>
        </>
      );
    } else if (arvo === 5) {
      return (
        <>
          <h1>Kiitos!</h1>
        </>
      );
    }
  }

  return (
    <>
      <h1>Conditionals If Example</h1>
      <div>Arvostele sivut:</div>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setArvo(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <div>{naytaTulokset()}</div>
    </>
  );
}
