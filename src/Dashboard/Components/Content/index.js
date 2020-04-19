import React from "react";
import PropTypes from "prop-types";
import "./styles/styles.scss";


export function Content({ title,children }) {
  return (
    <main className="main-content">
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
