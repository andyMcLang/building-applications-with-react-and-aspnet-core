import { useState } from "react";
import SelectNumber from "./SelectNumber";
import Simple from "./Simple";

export default function ConditionalsIfSeveralComponents() {
  const [arvo, setArvo] = useState(0);

  function naytaTulokset() {
    if (arvo === 1) {
      return <div>Voi ei, ykkönen! :(</div>;
    } else if (arvo === 2) {
      return (
        <>
          <div>Miten voidaan parantaa sivujamme:</div>
          <input type="text" placeholder="kirjoita tänne palaute"></input>
        </>
      );
    } else if (arvo === 3) {
      return <Simple />;
    } else if (arvo === 4) {
      return <div>Kiitos nelosesta!</div>;
    } else if (arvo === 5) {
      return <div>Kiitos vitosesta!</div>;
    }
  }

  return (
    <>
      <div>Arvostele sivujamme:</div>
      <SelectNumber
        onSelected={setArvo}
        selectContent={(value) => `Valitse ${value}`}
      />
      <div>{naytaTulokset()}</div>
    </>
  );
}
