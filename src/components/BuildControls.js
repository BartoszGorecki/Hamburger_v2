import React, { Component } from "react";
import PropTypes from "prop-types";
import BuildControl from "./BuildControl";
import { ButtonCC } from "../style/Button";
import "../style/BurgerControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

class BuildControls extends Component {
  render() {
    const {
      addIngredient,
      removeIngredient,
      disabledInfo,
      totalPrice,
      purchasable,
      purchaseProcess
    } = this.props;
    return (
      <div className="build-controls">
        Current price: <b>${totalPrice.toFixed(2)}</b>
        {controls.map(({ label, type }) => (
          <BuildControl
            key={type}
            label={label}
            type={type}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            disabledInfo={disabledInfo}
          />
        ))}
        <ButtonCC disabled={!purchasable} onClick={purchaseProcess}>
          Order Now
        </ButtonCC>
      </div>
    );
  }
}
BuildControls.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  purchaseProcess: PropTypes.func.isRequired
};

export default BuildControls;
