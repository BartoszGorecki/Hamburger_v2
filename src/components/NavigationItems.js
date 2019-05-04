import React from "react";
import NavigationItem from "./NavigationItem";
import "../style/NavigationItems.css";

const NavigationItems = () => {
  return (
    <nav>
      <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/checkout">Checkout</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
      </ul>
    </nav>
  );
};
export default NavigationItems;
