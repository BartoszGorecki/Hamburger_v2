import React from "react";
import Navigation from "./Navigation";
import PropTypes from "prop-types";
import "../style/Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.element
};
export default Layout;
