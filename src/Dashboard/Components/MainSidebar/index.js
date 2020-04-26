import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
import {navMenus} from '../../../_const/const'
import { useSelector, useDispatch } from 'react-redux';
import {
  setActiveSidebar,
} from '../../slices';


export function MainSidebar({ status }) {
  const dispatch = useDispatch();
  const state = useSelector((_state) => _state.dataDashboard);
  const handleClick = (e) => {
  console.log(e.target.scrollTop)
  //  dispatch(setActiveSidebar(item.name))
  }
  return (
    state.isSideBar ?
    <div className="main-menu">
      <ul className="list-unstyled nav flex-column">
        {navMenus.map((item, index) => {
          return (
            <li key = {index} onClick={handleClick} className={`nav-item${item.url === window.location.pathname  ? " active" : ""}`}>
            <Link to={item.url} className={item.url === window.location.pathname ? "active" : ""}>
              <i className="fa fa-user"></i> <span>{item.name}</span>
            </Link>
          </li>
          )
        })}
      </ul>
    </div> : null
  );
}
MainSidebar.propTypes = {
  status: PropTypes.bool,
};
MainSidebar.defaultProps = {
  status: false,
};
export default MainSidebar;
