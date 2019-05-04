import React from "react";
import PropTypes from "prop-types";
import "../style/OrderInfo.css";
import { ButtonCC, ButtonX } from "../style/Button";

const OrderInfo = ({
  ingredients,
  purchaseProcess,
  totalPrice,
  checkoutProcess
}) => {
  return (
    <div className="order-container">
      <h3>Your order</h3>
      <ButtonX onClick={purchaseProcess}>X</ButtonX>
      <p>Delicious burger with following ingredients:</p>
      <ul>
        {Object.entries(ingredients).map(item => (
          <li key={item[0]}>
            {item[0]} x {item[1]}
          </li>
        ))}
      </ul>
      <b>Total price: ${totalPrice.toFixed(2)}</b>
      <p>Continue to checkout?</p>
      <ButtonCC onClick={purchaseProcess}>Cancel</ButtonCC>
      <ButtonCC onClick={checkoutProcess}>Continue</ButtonCC>
    </div>
  );
};
OrderInfo.propTypes = {
  ingredients: PropTypes.object.isRequired,
  purchaseProcess: PropTypes.func.isRequired,
  checkoutProcess: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default OrderInfo;
