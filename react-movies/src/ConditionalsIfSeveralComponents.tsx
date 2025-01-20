
import { useState } from "react";
import Simple from "./Simple";
import SelectNumber from "./SelectNumber";

export default function ConditionalsIfSeveralComponents() {
  const [arvo, setArvo] = useState(0);

  function naytaTulokset() {
    if (arvo === 1) {
      return <div>Huonot pisteet!</div>;
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
      return <div>Kiitos hyvästä pisteestä: 4</div>;
    } else if (arvo === 5) {
      return <div>Kiitos hyvästä pisteestä: 5</div>;
    }
  }

  return (
    <>
      <div>Arvostele sivujamme pisteillä:</div>
      <SelectNumber
        onSelected={setArvo}
        selectContent={(value) => `Valitse ${value}`}
      />
      <div>{naytaTulokset()}</div>
    </>
  );
}
