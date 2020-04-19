import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function OnlineForms() {
  return (
    <Content  title="Online Forms">
      
    </Content>
  );
}
OnlineForms.propTypes = {
  status: PropTypes.bool,
};
OnlineForms.defaultProps = {
  status: false,
};
export default OnlineForms;
