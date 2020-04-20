import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Card from "./components/Card";

export function ResetPassword() {
  return (
    <div className="h-100">
      <div className="fixed-background"></div>
      <div class="flex-center">
        <div className="mx-auto my-auto col-md-6">
          <Card title={"Reset password"}>
            <div id="login">
              <form id="login-form" className="form" action="" method="post">
                <div className="form-group">
                  <label htmlFor="password" className="text-default">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-default">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm password"
                    id="email"
                    className="form-control"
                  />
                </div>

                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-lg pull-right"
                  value="Reset"
                />

                <div id="register-link">
                  <Link to="/login" className="text-default">
                    Login
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
ResetPassword.propTypes = {
  status: PropTypes.bool,
};
ResetPassword.defaultProps = {
  status: false,
};
export default ResetPassword;
