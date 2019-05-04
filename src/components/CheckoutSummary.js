import React from "react";
import PropTypes from "prop-types";
import "../style/CheckoutSummary.css";
import Burger from "./Burger";
import { ButtonLM } from "../style/Button";

const CheckoutSummary = ({
  ingredients,
  checkoutCancel,
  checkoutContinue,
  disabledContinue
}) => {
  return (
    <div className="checkout-container">
      <h3>Hope it tastes well!</h3>
      <div className="checkout-burger">
        <Burger ingredients={ingredients} />
      </div>
      <ButtonLM onClick={checkoutCancel}>CANCEL</ButtonLM>
      <ButtonLM onClick={checkoutContinue} disabled={!disabledContinue}>
        CONTINUE
      </ButtonLM>
    </div>
  );
};
CheckoutSummary.propTypes = {
  ingredients: PropTypes.object,
  checkoutCancel: PropTypes.func.isRequired,
  checkoutContinue: PropTypes.func.isRequired,
  disabledContinue: PropTypes.bool
};

export default CheckoutSummary;
