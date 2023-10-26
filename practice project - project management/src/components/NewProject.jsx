import React from "react";
import Input from "./Input";
export const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4 ">
        <li>
          <button className="text-stone-800 hover:text-stone-950">cancel</button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950">save</button>
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
