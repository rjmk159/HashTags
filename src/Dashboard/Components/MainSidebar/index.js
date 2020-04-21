import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
import {navMenus} from '../../../_const/const'
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveSidebar,
} from '../../slices';

export function MainSidebar({ status }) {
  const state = useSelector((_state) => _state.dataSidebar);
  return (
    <div className="main-menu">
      <ul className="list-unstyled nav flex-column">
        {navMenus.map((item, index) => {
          return (
            <li className={`nav-item${index === 0 ? " active" : ""}`}>
            <Link to={item.url} className={item.name === state.active ? "active" : ""}>
              <i className="fa fa-user"></i> <span>{item.name}</span>
            </Link>
          </li>
          )
        })}
      </ul>
    </div>
  );
}
MainSidebar.propTypes = {
  status: PropTypes.bool,
};
MainSidebar.defaultProps = {
  status: false,
};
export default MainSidebar;
