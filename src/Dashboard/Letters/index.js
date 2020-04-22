import React,{useEffect, useState} from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./styles/style.scss";
import Content from "../Components/Content";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadFile,listFile, searchList,downloadFile } from "../slices";
toast.configure({
  autoClose: 1000,
  draggable: false,
});

export function Letters() {

  const dispatch = useDispatch();
  const state = useSelector((_state) => _state.dataLogin);
  const list = useSelector((_state) => _state.dataSidebar);

  useEffect(() => {
    getList();
  }, [state.filesList]);

  const handleUpload = (e) => {
    const data = new FormData();
    data.append("fileField", e.target.files[0]);
    dispatch(
      uploadFile(data, state.token.jwtToken, (error) => {
        if (error) {
          toast.error("Something went wrong");
        } else {
          toast.success("Uploaded successfully");
        }
      })
    );
  };
  const getList = () => {
    dispatch(
      listFile(state.token.jwtToken, (error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      })
    );
  }
  const handleSearch = (e) => {
    let value = e.target.value;
    dispatch(searchList(value))
  }
  const handleDownload = (download) => {
    dispatch(
      downloadFile(download,state.token.jwtToken, (error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      })
    );
  }
  return (
    <Content title="Letters">
      <ToastContainer />
      <form class="input-group mb-3 search__form">
        <input type="text" class="form-control" onKeyUp={handleSearch} placeholder="Search Letter" />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
      <div className="row">
        {list && list.filesList && list.filesList.length ? list.filesList.map((item,index) => {
          return (
            <div className="col-md-2">
              <div class="card letter__thumbnail">
                <div class="card-body">
                  <img src={"/public/images/letter.png"} />
                  <p class="card-text">
                    {item.originalName}
                  </p>
                  <button id={item._id} onClick = {()=>handleDownload(item._id)} class="btn btn-primary">
                    Download
                  </button>
                </div>
              </div>
            </div>
          );
        }):'No Letters found'}
      </div>
      <div className="btn-secondary btn letter__add">
        <input type="file" onChange={handleUpload} />
        <i className="fa fa-plus"></i>
      </div>
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
