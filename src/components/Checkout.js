import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";
import { connect } from "react-redux";
import "../style/Checkout.css";
import ContactData from "./ContactData";

class Checkout extends Component {
  checkoutCancel = () => {
    this.props.history.goBack();
  };
  checkoutContinue = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  anyIngredientAdded = () =>
    Object.values(this.props.ingredients).reduce((acc, ele) => acc + ele, 0) >
    0;
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancel={this.checkoutCancel}
          checkoutContinue={this.checkoutContinue}
          disabledContinue={this.anyIngredientAdded()}
        />
        <Route path={"/checkout/contact-data"} component={ContactData} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
