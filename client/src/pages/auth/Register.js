import React from "react";
import {
  BsFillEnvelopeAtFill,
  BsPersonCircle,
  BsShieldLockFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./auth.css";
const Register = () => {
  return (
    <div className="bg">
      <div className="login-container container ">
        <div className="form-container sm:container-fluid">
          <form>
            <Link to="/" className="mb-5">
              <img src="./logo192.png" alt="MindMentor Logo" className="mb-3" />
              <span>
                Mind<span className="colored">Mentor</span>
              </span>
            </Link>
            <h5 className="top-text text-center mb-4">
              Please create an account.
            </h5>
            <div className="input-container mb-3">
              <BsPersonCircle />
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Full name"
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillEnvelopeAtFill />
              <input
                type="email"
                className="form-control auth-input"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillPersonCheckFill />
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Username"
                required
              />
            </div>

            <div className="input-container mb-3">
              <BsShieldLockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="input-container mb-3">
              <BsShieldLockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Confirm password"
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn mb-3 auth-btn">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
