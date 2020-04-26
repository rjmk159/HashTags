import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/style.scss";
import Card from "./components/Card";
import { checkLogin } from "./slices/index";
import { emailRegex } from "../_const/const";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 1000,
  draggable: false,
});
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const state = useSelector((_state) => _state.dataLogin);
  useEffect(() => {
    let token = localStorage.getItem("icpa_token") || state.token;
    if (token) {
      history.push("/letters");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email is required");
    } else if (!emailRegex.test(email)) {
      toast.error("Email is not valid");
    } else if (password === "") {
      toast.error("Passord is required");
    } else {
      dispatch(
        checkLogin(email, password, (error) => {
          if (error) {
            toast.error("Invalid credentials");
          } else {
            history.push("/letters");
          }
        })
      );
    }
  };

  return (
    <div className="h-100">
      <ToastContainer />
      <div className="fixed-background"></div>
      <div className="flex-center">
        <div className="mx-auto my-auto col-md-6">
          <Card title={"Login"}>
            <div id="login">
              <form id="login-form" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="text-default">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    onKeyUp={({ target: { value } }) => {
                      setEmail(value);
                    }}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-default">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    onKeyUp={({ target: { value } }) => {
                      setPassword(value);
                    }}
                    className="form-control"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg pull-right"
                >
                  LOGIN
                </button>

                <div id="register-link">
                  <Link to="/register" className="text-default">
                    Register
                  </Link>
                  {/* &nbsp;/&nbsp; */}
                  {/* <Link to="/forgot-password" className="text-default">
                    Forgot Password ?
                  </Link> */}
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
Login.propTypes = {
  status: PropTypes.bool,
};
Login.defaultProps = {
  status: false,
};
export default Login;
