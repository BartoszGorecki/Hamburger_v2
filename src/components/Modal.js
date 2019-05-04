import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../style/Modal.css";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <aside className="modal-cover">
      <div className="modal-content">{children}</div>
    </aside>,
    document.body
  );
};
Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
export default Modal;
