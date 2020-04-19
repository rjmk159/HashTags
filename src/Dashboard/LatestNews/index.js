import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content'


export function LatestNews() {
  return (
    <Content  title="LatestNews">
      
    </Content>
  );
}
LatestNews.propTypes = {
  status: PropTypes.bool,
};
LatestNews.defaultProps = {
  status: false,
};
export default LatestNews;
