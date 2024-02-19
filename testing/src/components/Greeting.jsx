import React from "react";
import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedTExt, setChangedTExt] = useState(false);

  function changeTextHandler() {
    setChangedTExt(true);
  }

  return (
    <div>
      <h2>Hello World</h2>
      {!changedTExt && <p>It's good to see you!</p>}
      {changedTExt && (
        <Output>
          <p>Changed!</p>
        </Output>
      )}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
