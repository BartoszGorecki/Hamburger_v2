import React from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";
import { connect } from "react-redux";
import "../style/Checkout.css";
import ContactData from "./ContactData";

const Checkout = props => {
  const checkoutCancel = () => {
    props.history.goBack();
  };
  const checkoutContinue = () => {
    props.history.replace("/checkout/contact-data");
  };
  const anyIngredientAdded = () =>
    Object.values(props.ingredients).reduce((acc, ele) => acc + ele, 0) > 0;
  return (
    <div>
      <CheckoutSummary
        ingredients={props.ingredients}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
        disabledContinue={anyIngredientAdded()}
      />
      <Route path={"/checkout/contact-data"} component={ContactData} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients
  };
};

export default connect(mapStateToProps)(Checkout);
