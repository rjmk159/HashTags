import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./styles/styles.scss";
export function Navbar() {
  const [notification, setNotification] = useState(false);
  const handleNotification = () =>{
    setNotification(!notification);
  }
  return (
<nav className="navbar navbar-expand-lg navbar-light header">
<a className="navbar-brand" href="#">ICPA LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>

  </button>
  <div className="notification__container">
  <div className="notification__icon" role="botton" onClick={handleNotification}>
    <i className="fa fa-bell"></i>
  </div>
{notification?
  <div className="notification__list card">
    <ul>
      <li><i className="fa fa-envelope"></i> With supporting text below as a natural.</li>
      <li><i className="fa fa-envelope"></i> With supporting text below as a natural.</li>
      <li><i className="fa fa-envelope"></i> With supporting text below as a natural. supporting text below as a natural.ion</li>
      <li><i className="fa fa-envelope"></i> With supporting text below as a natural.</li>
    </ul>
  </div>:null}
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
