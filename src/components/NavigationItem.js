import React from "react";
import PropTypes from "prop-types";
import { withRouter, NavLink } from "react-router-dom";
import "../style/NavigationItem.css";

const NavigationItem = ({ children, link }) => {
  return (
    <li>
      <NavLink to={link} exact>
        {children}
      </NavLink>
    </li>
  );
};
NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default withRouter(NavigationItem);
