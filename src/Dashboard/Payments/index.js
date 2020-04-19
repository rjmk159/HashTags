import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function Payments() {
  return (
    <Content  title="Payments">
      
    </Content>
  );
}
Payments.propTypes = {
  status: PropTypes.bool,
};
Payments.defaultProps = {
  status: false,
};
export default Payments;
