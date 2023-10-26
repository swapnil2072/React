import React from "react";
import Input from "./Input";
export const NewProject = () => {
  return (
    <div>
      <menu>
        <li>
          <button>cancel</button>
        </li>
        <li>
          <button>save</button>
        </li>
      </menu>
      <div>
        <Input label="Title"></Input>
        <Input label="Description" textarea></Input>
        <Input label="Due Date"></Input>
      </div>
    </div>
  );
};
