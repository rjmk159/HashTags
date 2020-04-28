import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import socketIOClient from "socket.io-client";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Login/slices";
import {
  showSidebar,
  getNotificationList,
  setUpreadAndOpen,
} from "../../slices";
import { BASE_URL } from "../../../_utils/api";
import { getToken, timeAgo } from "../../../_utils/helper";
import { urlMap } from "../../../_const/const"
import "./styles/styles.scss";

export function Navbar() {
  const [notification, setNotification] = useState(false);
  const state = useSelector((_state) => _state.dataDashboard);

  const dispatch = useDispatch();
  let history = useHistory();

  const handleNotification = () => {
    setNotification(!notification);
  };
  useEffect(() => {
    const socket = socketIOClient(BASE_URL);
    let token = state.token ? state.token.jwtToken : getToken();
    socket.on("notificationForAll", (data) => {
      dispatch(getNotificationList(token));
    });
    dispatch(getNotificationList(token));
  }, []);

  const toggleSideBar = () => {
    dispatch(showSidebar(!state.isSideBar));
  };

  const handleNotificationClick = (id, type) => {
    let token = state.token ? state.token.jwtToken : getToken();
    dispatch(
      setUpreadAndOpen(id, token, () => {
        setNotification(!notification);
        history.push(`/${urlMap[type]}`);
        dispatch(getNotificationList(token));
      })
    );
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light header">
      <a className="navbar-brand" href="#">
        ICPA LOGO
      </a>
      <button className="navbar-toggler" type="button" onClick={toggleSideBar}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="notification__container">
        <div
          className="notification__icon"
          role="botton"
          onClick={handleNotification}
        >
          <span className="notification__count">{state.unreadCount}</span>
          <i className="fa fa-bell"></i>
        </div>
        <div
          className="notification__icon"
          role="botton"
          onClick={() => dispatch(logout())}
        >
          <i className="fa fa-user"></i>
        </div>
        {/* {state.token.userData?<span>Welcome! {state.token.userData.firstName}</span>:''} */}

        {notification ? (
          <div className="notification__list card">
            <ul>
              {state.notificationList && state.notificationList.length ? (
                state.notificationList.map((item, index) => {
                  return (
                    <li
                      className={item.read ? "" : "notification__unread"}
                      onClick={() =>
                        handleNotificationClick(item._id, item.type)
                      }
                    >
                      <i
                        className={
                          item.read ? "fa fa-envelope-open" : "fa fa-envelope"
                        }
                      ></i>
                      <span className="notification__name">
                        {item.originalName}
                      </span>
                      <span className="notification__label">{item.type}</span>
                      <span className="notification__uploadedBy">
                        <span className="uploaded-by-label">Uploaded by: </span>
                        {item.createdBy}
                      </span>
                      <span className="notification__time">
                        {timeAgo(item.createdDate)}
                      </span>
                    </li>
                  );
                })
              ) : (
                <span className="notification__no-data">Nothing to show</span>
              )}
            </ul>
          </div>
        ) : null}
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
