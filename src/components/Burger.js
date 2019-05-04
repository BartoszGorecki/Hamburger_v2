import React from "react";
import BurgerIng from "./BurgerIng";
import PropTypes from "prop-types";
import "../style/Burger.css";

const Burger = ({ ingredients }) => {
  const transformIng = Object.keys(ingredients)
    .map(item => {
      return [...Array(ingredients[item])].map((_, ind) => {
        return <BurgerIng key={item + ind} type={item} />;
      });
    })
    .reduce((acc, ele) => acc.concat(ele), []);
  return (
    <div className="burger">
      <BurgerIng type="bread-top" />
      {transformIng.length > 0 ? (
        transformIng
      ) : (
        <p>Please, start adding ingredients!</p>
      )}
      <BurgerIng type="bread-bottom" />
    </div>
  );
};
Burger.propTypes = {
  ingredients: PropTypes.object
};

export default Burger;
