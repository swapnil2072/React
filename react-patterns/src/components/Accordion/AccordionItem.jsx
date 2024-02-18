import React, { Children } from "react";

const AccordionItem = ({ className,title, children }) => {
  return (
    <li>
      <h3>{title}</h3>
      <div>{children}</div>
    </li>
  );
};

export default AccordionItem;
