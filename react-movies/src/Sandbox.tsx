import { useState } from "react";
import Sandbox2 from "./Sandbox2";

export default function Sandbox() {
  const [piilossa, setPiilossa] = useState(false)

  return (
    <>
      <h3>Ykkössivun sisältö</h3>
      <input type="checkbox" onChange={() => setPiilossa(!piilossa)} />
      Piilossa
      {piilossa ? null : <Sandbox2 />}
    </>
  );
}
