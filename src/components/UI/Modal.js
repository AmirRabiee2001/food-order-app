import { React, Fragment } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

// Backdrop for modal
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};

// Modal container and content goes here
const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <IoClose className="close-btn" onClick={props.onClick} />
      <div className="modal__content">{props.children}</div>
    </div>
  );
};

// Portal to a div outside of root
const portalID = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onClose} />, portalID)}
      {createPortal(
        <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,
        portalID
      )}
    </Fragment>
  );
};

export default Modal;
