import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/style.scss";
export function Login({ status }) {
  return (
    <div className="h-100">
      <div className="fixed-background"></div>
      <div className="flex-center">
        <div className="mx-auto my-auto col-md-6">
          <Card title={"Login"}>
            <div id="login">
              <form id="login-form" className="form" action="" method="post">
                <div className="form-group">
                  <label for="username" className="text-default">
                    EMAIL
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="text-default">
                    PASSWORD
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>

                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-lg pull-right"
                  value="LOGIN"
                />

                <div id="register-link">
                  <Link to="/register" className="text-default">
                    Register
                  </Link>
                  &nbsp;/&nbsp;
                  <Link to="/forgot-password" className="text-default">
                    Forgot Password ?
                  </Link>
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
