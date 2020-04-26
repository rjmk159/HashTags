import React, { useEffect } from "react";
import PropTypes from "prop-types";
// https://www.getpostman.com/collections/f0d134d430194dbfc594
import BodyClassName from 'react-body-classname';
import { useHistory } from "react-router-dom";
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

export function Dashboard({ children }) {
  const state = useSelector((_state) => _state.dataLogin);
  let history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("icpa_token") || state.token;
    if (!token) {
      history.push("/login");
    }
  });
  return (
    <BodyClassName className="dashboard">
    <div className="dashboard">
      <Navbar />
      <div className="sidebar">
        <MainSidebar />
      </div>
      <div className="content">{children}</div>
    </div>
    </BodyClassName>
  );
}
Dashboard.propTypes = {
  status: PropTypes.bool,
};
Dashboard.defaultProps = {
  status: false,
};
export default Dashboard;

export const LetterDashboard = () => {
  return (
    <Dashboard>
      <Letters />
    </Dashboard>
  );
};
export const LatestNewsDashboard = () => {
  return (
    <Dashboard>
      <LatestNews />
    </Dashboard>
  );
};
export const LatestCircularsDashboard = () => {
  return (
    <Dashboard>
      <LatestCirculars />
    </Dashboard>
  );
};
export const MembershipDashboard = () => {
  return (
    <Dashboard>
      <Membership />
    </Dashboard>
  );
};
export const PaymentsDashboard = () => {
  return (
    <Dashboard>
      <Payments />
    </Dashboard>
  );
};
export const ContactUsDashboard = () => {
  return (
    <Dashboard>
      <ContactUs />
    </Dashboard>
  );
};
export const OnlineFormsDashboard = () => {
  return (
    <Dashboard>
      <OnlineForms />
    </Dashboard>
  );
};
export const GrevienceSectionDashboard = () => {
  return (
    <Dashboard>
      <GrevienceSection />
    </Dashboard>
  );
};
