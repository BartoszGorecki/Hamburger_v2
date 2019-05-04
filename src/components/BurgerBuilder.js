import React, { useState } from "react";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import OrderInfo from "./OrderInfo";
import Modal from "./Modal";
import { connect } from "react-redux";
import { removeIngredient, addIngredient } from "../action";
import "../style/BurgerBuilder.css";

export const BurgerBuilder = props => {
  const [process, setProcess] = useState(false);

  const disablePurchase = ing => {
    const sum = Object.keys(ing)
      .map(item => ing[item])
      .reduce((acc, ele) => acc + ele, 0);
    return sum > 0;
  };
  const purchaseProcess = () => {
    setProcess(!process);
  };
  const checkoutProcess = () => {
    props.history.push({
      pathname: "checkout"
    });
  };
  const { ingredients, addIngredient, removeIngredient, totalPrice } = props;
  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  return (
    <React.Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        disabledInfo={disabledInfo}
        totalPrice={totalPrice}
        purchasable={disablePurchase(ingredients)}
        purchaseProcess={purchaseProcess}
      />
      {process && (
        <Modal>
          <OrderInfo
            ingredients={ingredients}
            purchaseProcess={purchaseProcess}
            checkoutProcess={checkoutProcess}
            totalPrice={totalPrice}
          />
        </Modal>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice
  };
};

export default connect(
  mapStateToProps,
  { addIngredient, removeIngredient }
)(BurgerBuilder);
