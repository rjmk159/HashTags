import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function GrevienceSection() {
  return (
    <Content  title="Grevience Section">
    </Content>
  );
}
GrevienceSection.propTypes = {
  status: PropTypes.bool,
};
GrevienceSection.defaultProps = {
  status: false,
};
export default GrevienceSection;
