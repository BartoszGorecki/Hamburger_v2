import React, { PureComponent } from "react";
import "../style/BurgerIng.css";
import PropTypes from "prop-types";

class BurgerIng extends PureComponent {
  render() {
    const { type } = this.props;
    let ingredient = null;
    switch (type) {
      case "bread-bottom":
        ingredient = <div className="bread-bottom" />;
        break;
      case "bread-top":
        ingredient = (
          <div className="bread-top">
            <div className="seed-1" />
            <div className="seed-2" />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className="meat" />;
        break;
      case "cheese":
        ingredient = <div className="cheese" />;
        break;
      case "salad":
        ingredient = <div className="salad" />;
        break;
      case "bacon":
        ingredient = <div className="bacon" />;
        break;
      default:
        ingredient = null;
    }
    return <React.Fragment>{ingredient}</React.Fragment>;
  }
}
BurgerIng.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIng;
