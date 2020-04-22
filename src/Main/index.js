import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/styles.scss";
import Register from "../Login/Register";
import Login from "../Login/Login";
import ForgotPassword from "../Login/ForgotPassword";
import ResetPassword from "../Login/ResetPassword";
import Dashboard, {
  LetterDashboard,
  LatestCircularsDashboard,
  LatestNewsDashboard,
  MembershipDashboard,
  PaymentsDashboard,
  OnlineFormsDashboard,
  ContactUsDashboard,
  GrevienceSectionDashboard,
} from "../Dashboard/";

export function MainApp({ status }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/letters">
          <LetterDashboard />
        </Route>
        <Route path="/latest-circulars" component={LatestCircularsDashboard} />

        <Route path={`/latest-news`} component={LatestNewsDashboard} />

        <Route path={`/membership`} component={MembershipDashboard} />

        <Route path={`/payments`} component={PaymentsDashboard} />

        <Route path={`/online-forms`} component={OnlineFormsDashboard} />

        <Route path={`/contact-us`} component={ContactUsDashboard} />

        <Route path={`/grevience-section`} component={GrevienceSectionDashboard} />
      </Switch>
    </Router>
  );
}
MainApp.propTypes = {
  status: PropTypes.bool,
};
MainApp.defaultProps = {
  status: true,
};
export default MainApp;
