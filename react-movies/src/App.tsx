import React, { useEffect, useState } from "react";

function App() {
  const [myDate, myDateUpdate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      return myDateUpdate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <h3>React Example</h3>
      <input />
      <div>{myDate.toString()}</div>
    </div>
  );
}

export default App;
