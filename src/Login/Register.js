import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/style.scss";
import Card from "./components/Card";
import { emailRegex } from "../_const/const";
import { registerUser } from "./slices/index";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  autoClose: 3000,
  draggable: false,
});
export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("east");
  const [dob, setDob] = useState("");
  const [gender, setgender] = useState("male");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === "") {
      toast.error("First Name is required");
    } else if (lastName === "") {
      toast.error("Last Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!emailRegex.test(email)) {
      toast.error("Email is not valid");
    } else if (contact === "") {
      toast.error("Contact is required");
    } else if (password === "") {
      toast.error("Passord is required");
    } else if (dob === "") {
      toast.error("Dob is required");
    } else {
      let obj = {
        email,
        password,
        contact,
        firstName,
        lastName,
        region,
        dob,
        gender,
      };
      dispatch(
        registerUser(obj, (error) => {
          if (error) {
            toast.error("Something went wrong");
          } else {
            toast.success("Success! Proceed to Login");
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
          <Card title={"Register"}>
            <div id="register">
              <form id="register-form" className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username" className="text-default">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onKeyUp={({ target: { value } }) => {
                          setFirstName(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username" className="text-default">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onKeyUp={({ target: { value } }) => {
                          setLastName(value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="username" className="text-default">
                        EMAIL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onKeyUp={({ target: { value } }) => {
                          setEmail(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password" className="text-default">
                        CONTACT
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        onKeyUp={({ target: { value } }) => {
                          setContact(value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="password" className="text-default">
                        PASSWORD
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        onKeyUp={({ target: { value } }) => {
                          setPassword(value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="dob" className="text-default">
                        DOB
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={({ target: { value } }) => {
                          setDob(value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="region" className="text-default">
                        REGION
                      </label>
                      <select
                        className="form-control"
                        onChange={({ target: { value } }) => {
                          setRegion(value);
                        }}
                      >
                        <option selected value="east">
                          East
                        </option>
                        <option value="west">West</option>
                        <option value="north">North</option>
                        <option value="south">South</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="region" className="text-default">
                        GENDER
                      </label>
                      <select
                        className="form-control"
                        onChange={({ target: { value } }) => {
                          setgender(value);
                        }}
                      >
                        <option selected value="male">
                          Male
                        </option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  name="submit"
                  className="btn btn-primary btn-lg pull-right"
                  value="Register"
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
Register.propTypes = {
  status: PropTypes.bool,
};
Register.defaultProps = {
  status: false,
};
export default Register;
