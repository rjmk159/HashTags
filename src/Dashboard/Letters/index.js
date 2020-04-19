import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function Letters() {
  return (
    <Content  title="Letters">
      
    </Content>
  );
}
Letters.propTypes = {
  status: PropTypes.bool,
};
Letters.defaultProps = {
  status: false,
};
export default Letters;
