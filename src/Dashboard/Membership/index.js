import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function Membership() {
  return (
    <Content  title="Membership Form Enroll">
      
    </Content>
  );
}
Membership.propTypes = {
  status: PropTypes.bool,
};
Membership.defaultProps = {
  status: false,
};
export default Membership;
