import NoProjectImage from "../assets/no-projects.png";
import React from "react";
import Button from "./Button";

const NoProjectSelected = () => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or get started with one </p>
      <p className="mt-4">
        <Button >Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
