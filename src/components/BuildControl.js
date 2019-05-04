import React from "react";
import PropTypes from "prop-types";
import "../style/BuildControl.css";
import { ButtonLM } from "../style/Button.js";

const BuildControl = ({
  label,
  type,
  addIngredient,
  removeIngredient,
  disabledInfo
}) => {
  return (
    <div className="build-control">
      <div>{label}</div>
      <ButtonLM
        disabled={disabledInfo[type]}
        onClick={() => removeIngredient(type)}
      >
        LESS
      </ButtonLM>
      <ButtonLM onClick={() => addIngredient(type)}>MORE</ButtonLM>
    </div>
  );
};
BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addIngredient: PropTypes.func.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  disabledInfo: PropTypes.object.isRequired
};

export default BuildControl;
