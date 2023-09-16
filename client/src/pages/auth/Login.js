import React from 'react';
import {  BsFillUnlockFill } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './auth.css';
const Login = () => {
  return (
    <div className="bg">
      <div className="login-container container ">
        <div className="form-container sm:container-fluid">
          <form>
            <Link to="/" className='mb-5'>
              <img
                src="./logo192.png"
                alt="MindMentor Logo"
                className="mb-3 contrast"
              />
              <span>Mind<span className='colored'>Mentor</span></span>
            </Link>
            <h5 className="top-text text-center mb-4">
              Please Login to your account.
            </h5>
            <div className="input-container mb-3">
              <MdAlternateEmail />
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillUnlockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="remember">
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label
                  className="mx-2 custom-control-label"
                  htmlFor="customCheck1"
                >
                  Remember me
                </label>
              </div>
              <p className="">
                Forgot <Link to="">password?</Link>
              </p>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn mb-3 auth-btn">
                Login
              </button>
            </div>
            <p className="forgot-password text-center">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
