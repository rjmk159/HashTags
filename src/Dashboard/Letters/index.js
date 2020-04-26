import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./styles/style.scss";
import Content from "../Components/Content";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActivityIndicator from "../../_components/ActivityIndicator";
import { uploadFile, listFile, searchList, downloadFile } from "./slices";
import { getToken } from "../../_utils/helper";
import { listCount } from "../../_const/const";

toast.configure({
  autoClose: 1000,
  draggable: false,
});

export function Letters() {
  const [pagination, setPagination] = useState([]);
  const [hasPagination, setHasPagination] = useState(false);
  const [formData, setFormData] = useState(null);
  const [formDescription, setDescription] = useState(null);
  const dispatch = useDispatch();
  const state = useSelector((_state) => _state.dataLogin);
  const list = useSelector((_state) => _state.dataLetters);

  useEffect(() => {
    getList(list.currentPage);
  }, [list.totalCount, list.currentPage]);

  const handleUpload = (e) => {
    const data = new FormData();
    data.append("fileField", e.target.files[0]);
    setFormData(data);
  };

  const handleFormPopup = () => {
    if (!formDescription) {
      return;
    }
    let token = state.token.jwtToken || getToken();
    formData.set("fileDescription", formDescription);
    dispatch(
      uploadFile(formData, "letters", token, (error) => {
        if (error) {
          toast.error("Something went wrong");
        } else {
          toast.success("Uploaded successfully");
          getList();
          setFormData(null);
          setDescription(null);
        }
      })
    );
  };
  const closeUploadModal = () =>{
    setDescription(null);
    setFormData(null);
  }
  const getList = (pageNo = 1) => {
    let token = state.token.jwtToken || getToken();
    dispatch(
      listFile(token, "letters", pageNo, (error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      })
    );
    handlePagination();
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    e.preventDefault();
    dispatch(searchList(value));
  };
  const handleDownload = (download) => {
    let token = state.token.jwtToken || getToken();
    dispatch(
      downloadFile(download, token, (error) => {
        if (error) {
          toast.error("Something went wrong");
        }
      })
    );
  };
  const handlePagination = () => {
    let totalCount = list.totalCount;
    let count = 0;
    let _pagination = [];
    if (totalCount < listCount) {
      setHasPagination(true);
    } else {
      count = totalCount / listCount;
      count = Math.floor(count);
      if (totalCount % listCount > 0) {
        count = count + 1;
      }
      _pagination = [];
      _pagination.push(
        <li
          className={`page-item ${list.currentPage === 1 ? "disabled" : ""}`}
          onClick={
            list.currentPage === 1 ? null : () => getList(list.currentPage - 1)
          }
        >
          <a className="page-link" tabIndex="-1">
            Previous
          </a>
        </li>
      );
      for (let index = 1; index <= count; index++) {
        _pagination.push(
          <li
            className={`page-item ${
              index === list.currentPage ? "active" : ""
            }`}
            onClick={index === list.currentPage ? null : () => getList(index)}
          >
            <a className="page-link">{index}</a>
          </li>
        );
      }
      _pagination.push(
        <li
          className={`page-item ${
            list.currentPage === count ? "disabled" : ""
          }`}
          onClick={
            list.currentPage === list.count
              ? null
              : () => getList(list.currentPage + 1)
          }
        >
          <a className="page-link">Next</a>
        </li>
      );
    }
    setPagination(_pagination);
  };

  return (
    <Content title="Letters">
      <ToastContainer autoClose={1300}/>
      {!list.isLoading ? (
        <>
          {formData ? (
            <div class="modal show fade modal-visible" tabindex="-1" role="dialog">
            <div class="modal-dialog show" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Add Description</h5>
                  <button type="button" class="close" onClick={closeUploadModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <input type="text" class="form-control"  placeholder="Enter Description"
                  onKeyUp={({ target: { value } }) => {
                    setDescription(value);
                  }}/>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" onClick={handleFormPopup}>Add Description</button>
                </div>
              </div>
            </div>
          </div>
          ) : null}
          <form className="input-group mb-3 search__form">
            <input
              type="text"
              className="form-control"
              onKeyUp={handleSearch}
              placeholder="Search Letter"
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          <div className="row">
            {list && list.filesList && list.filesList.length ? (
              list.filesList.map((item, index) => {
                return (
                  <div
                    key={item._id}
                    data-id={item._id}
                    className="col-lg-3 col-md-4 col-sm-6 mb-30"
                  >
                    <div className="card letter__thumbnail">
                      <div className="card-body">
                        <img src={"/public/images/letter.png"} />
                        <p className="card-text">{item.originalName}</p>
                        <button
                          id={item._id}
                          onClick={() => handleDownload(item._id)}
                          className="btn btn-primary"
                        >
                          Download <i className="fa fa-download"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="align-center p-50">No Letters found</div>
            )}
          </div>
          <div className="btn-secondary btn letter__add">
            <input type="file" onChange={handleUpload} />
            <i className="fa fa-plus"></i>
          </div>
          {hasPagination ? (
            <nav>
              <ul className="pagination">{pagination}</ul>
            </nav>
          ) : null}
        </>
      ) : (
        <ActivityIndicator />
      )}
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
