import { useState } from "react";
import SelectNumber from "./SelectNumber";
import Simple from "./Simple";

export default function ConditionalsIfSeveralComponents() {
  const [arvo, setArvo] = useState(0);

  function naytaTulokset() {
    if (arvo === 1) {
      return <div>Voi ei, onpa surkeet arvostelut!</div>;
    } else if (arvo === 2) {
      return (
        <>
          <div>Kerro miten voidaan parantaa sivujamme:</div>
          <input type="text"></input>
        </>
      );
    } else if (arvo === 3) {
      return <Simple />;
    } else if (arvo === 4) {
      return (
        <>
          <div>Kiitos hyvästä arvostelusta, numero nelosesta!</div>
        </>
      );
    } else if (arvo === 5) {
      return (
        <>
          <div>Kiitos hyvästä arvostelusta, numero vitosesta!</div>
        </>
      );
    }
  }

  return (
    <>
      <div>Arvostele sivut:</div>
      <SelectNumber maxValue={5} onSelected={setArvo} />
      <div>{naytaTulokset()}</div>
    </>
  );
}
