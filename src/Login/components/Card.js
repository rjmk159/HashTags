import React from "react";
import PropTypes from "prop-types";


export function Card({ children, title, subtitle }) {
  return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {subtitle?<h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>:null}
            { children }
          </div>
        </div>
  );
}
Card.propTypes = {
  status: PropTypes.any,
};

export default Card;
