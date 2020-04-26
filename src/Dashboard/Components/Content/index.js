import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./styles/styles.scss";


export function Content({ title,children }) {
  const state = useSelector((_state) => _state.dataDashboard);
  return (
    <main className={`main-content ${state.isSideBar?'':'sidebar-close'}`}>
      <div className="title">{title}</div>
      {children}
    </main>
  );
}
Content.propTypes = {
  status: PropTypes.bool,
};
Content.defaultProps = {
  status: false,
};
export default Content;
