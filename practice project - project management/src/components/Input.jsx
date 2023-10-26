import React from "react";

const Input = ({label, textarea,...props }) => {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea /> : <input {...props}/>}
    </p>
  );
};

export default Input;
