import React from "react";
import { useState } from "react";

const Greeting = () => {
  const [changedTExt, setChangedTExt] = useState(false);

  function changeTextHandler() {
    setChangedTExt(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedTExt && <p>It's good to see you!</p>}
      {changedTExt && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
