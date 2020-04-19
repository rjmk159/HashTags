import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
export function Navbar({ status }) {
  return (
<nav className="navbar navbar-expand-lg navbar-light">
<a className="navbar-brand" href="#">ICPA LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
   
  </div>
</nav>
  );
}
Navbar.propTypes = {
  status: PropTypes.bool,
};
Navbar.defaultProps = {
  status: false,
};
export default Navbar;
