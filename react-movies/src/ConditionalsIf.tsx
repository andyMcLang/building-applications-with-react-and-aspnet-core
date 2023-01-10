import { useState } from "react";
import Simple from "./Simple";

export default function ConditionalsIf() {
  const [selectRate, setSelectRate] = useState(1);

  function displayResult() {
    if (selectRate === 1) {
      return <span>Eeeiiii!!</span>;
    } else if (selectRate === 2) {
      return (
        <>
          <span>Kerro missä oltais pitäny parantaa: </span>
          <input type="text" />
        </>
      );
    } else if (selectRate === 3) {
      return (
        <>
          <Simple />;
        </>
      );
    } else {
      return <div>Thänks!</div>;
    }
  }

  return (
    <>
      <h1>Conditionals If esimerkki</h1>
      <div>Anna arvosana tälle saitille</div>
      <select
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setSelectRate(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>

      <div>{displayResult()}</div>
    </>
  );
}
