import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function ContactUs() {
  return (
    <Content  title="Contact Us">
    </Content>
  );
}
ContactUs.propTypes = {
  status: PropTypes.bool,
};
ContactUs.defaultProps = {
  status: false,
};
export default ContactUs;
