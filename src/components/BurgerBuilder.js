import React, { PureComponent } from "react";
import Burger from "./Burger";
import BuildControls from "./BuildControls";
import OrderInfo from "./OrderInfo";
import Modal from "./Modal";
import { connect } from "react-redux";
import { removeIngredient, addIngredient } from "../action";
import "../style/BurgerBuilder.css";

class BurgerBuilder extends PureComponent {
  state = {
    process: false
  };
  disablePurchase = ing => {
    const sum = Object.keys(ing)
      .map(item => ing[item])
      .reduce((acc, ele) => acc + ele, 0);
    return sum > 0;
  };
  purchaseProcess = () => {
    this.setState({ process: !this.state.process });
  };
  checkoutProcess = () => {
    this.props.history.push({
      pathname: "checkout"
    });
  };

  render() {
    const { process } = this.state;
    const {
      ingredients,
      addIngredient,
      removeIngredient,
      totalPrice
    } = this.props;
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
          purchasable={this.disablePurchase(ingredients)}
          purchaseProcess={this.purchaseProcess}
        />
        {process && (
          <Modal>
            <OrderInfo
              ingredients={ingredients}
              purchaseProcess={this.purchaseProcess}
              checkoutProcess={this.checkoutProcess}
              totalPrice={totalPrice}
            />
          </Modal>
        )}
      </React.Fragment>
    );
  }
}
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
