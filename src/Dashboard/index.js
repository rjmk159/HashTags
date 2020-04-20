import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route, useHistory } from "react-router-dom";
import "./styles/style.scss";
import MainSidebar from "./Components/MainSidebar";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import Letters from "./Letters";
import OnlineForms from "./OnlineForms";
import GrevienceSection from "./GrevienceSection";
import Membership from "./Membership";
import LatestNews from "./LatestNews";
import LatestCirculars from "./LatestCirculars";
import ContactUs from "./ContactUs";
import Payments from "./Payments";

const url = "/dashboard";
export function Dashboard() {
  const state = useSelector((_state) => _state.dataLogin);
  let history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("icpa_token") || state.token;
    if (!token) {
      history.push("/login");
    }
  });
  return (
    <div className="dashboard">
      <Navbar />
      <div className="sidebar">
        <MainSidebar />
      </div>
      <div className="content">
        <Switch>
          <Route exact path={`${url}/letters`} component={Letters} />
        </Switch>
        <Switch>
          <Route
            exact
            path={`${url}/latest-circulars`}
            component={LatestCirculars}
          />
        </Switch>
        <Switch>
          <Route exact path={`${url}/latest-news`} component={LatestNews} />
        </Switch>
        <Switch>
          <Route exact path={`${url}/membership`} component={Membership} />
        </Switch>
        <Switch>
          <Route exact path={`${url}/payments`} component={Payments} />
        </Switch>
        <Switch>
          <Route exact path={`${url}/online-forms`} component={OnlineForms} />
        </Switch>
        <Switch>
          <Route exact path={`${url}/contact-us`} component={ContactUs} />
        </Switch>
        <Switch>
          <Route
            exact
            path={`${url}/grevience-section`}
            component={GrevienceSection}
          />
        </Switch>
      </div>
    </div>
  );
}
Dashboard.propTypes = {
  status: PropTypes.bool,
};
Dashboard.defaultProps = {
  status: false,
};
export default Dashboard;
