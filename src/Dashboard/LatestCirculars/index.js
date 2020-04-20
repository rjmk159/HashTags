import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function LatestCirculars() {
  
  return (
    <Content  title="Latest Circulars">
      
    </Content>
  );
}
LatestCirculars.propTypes = {
  status: PropTypes.bool,
};
LatestCirculars.defaultProps = {
  status: false,
};
export default LatestCirculars;
