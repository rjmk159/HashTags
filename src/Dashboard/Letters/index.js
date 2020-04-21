import React from "react";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Content from '../Components/Content';



export function Letters() {
  const array = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,11,1,1,1];
  return (
    <Content  title="Letters">
        <form class="input-group mb-3 search__form">
          <input type="text" class="form-control" placeholder="Search Letter" />
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button"><i className="fa fa-search"></i></button>
          </div>
        </form>
        <div className="row">
          {array.map((item) => {
            return (
              <div className="col-md-2">
              <div class="card letter__thumbnail">
                <div class="card-body">
                  <img src={'/public/images/postcard.png'} />
                  <p class="card-text">With supporting text below as a natural.</p>
                  <a href="#" class="btn btn-primary">Open Letter</a>
                </div>
              </div>
            </div>
            )
          })}
        </div>
        <button className="btn-secondary btn letter__add" tootip="Add new letter"><i className="fa fa-plus"></i></button>
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
