import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import React from "react";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
