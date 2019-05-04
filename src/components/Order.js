import React from "react";
import PropTypes from "prop-types";
import "../style/Order.css";

const Order = ({ price, ingredients }) => {
  const ingredientsArr = [];
  for (let ingredient in ingredients) {
    ingredientsArr.push({
      name: ingredient,
      amount: ingredients[ingredient]
    });
  }
  const ingredientOutput = ingredientsArr.map(({ name, amount }) => {
    return (
      <span className="order-ing" key={name}>
        ({amount}){name}
      </span>
    );
  });
  return (
    <div className="order-container">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Total price: $ {(+price).toFixed(2)}</p>
    </div>
  );
};
Order.propTypes = {
  price: PropTypes.number,
  ingredients: PropTypes.object
};

export default Order;
