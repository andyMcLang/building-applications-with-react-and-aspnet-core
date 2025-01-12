import React, { useState } from "react";

function Test() {
  const [text, setText] = useState("");

  const HandleClick = () => setText("Klikkasit mua!");

  return (
    <div>
      <h3>Example Button</h3>
      <button onClick={HandleClick}>Klikkaa Mua!</button>
      <div>{text}</div>
    </div>
  );
}

export default Test;
