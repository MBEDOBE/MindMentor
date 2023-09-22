import React, { useState, useEffect } from "react";
import {
  BsFillEnvelopeAtFill,
  BsPersonCircle,
  BsShieldLockFill,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../api-routes/APIRoutes";

const Register = () => {
  const navigate = useNavigate();
  //error notification
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  //user loggedin reirect
<<<<<<< HEAD
  /* useEffect(() => {
    if (localStorage.getItem("mindmentor-user")) {
      navigate("/");
    }
  }, []);*/
=======
  useEffect(() => {
    if (localStorage.getItem("mindmentor-user")) {
      navigate("/");
    }
  }, []);
>>>>>>> 78b5e290ff1856087f834c56774545888a03cf8d

  const [values, setValues] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, username, email, fullname } = values;
      const { data } = await axios.post(registerRoute, {
        fullname,
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("mindmentor-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  //handle change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //handle validation
  const handleValidation = () => {
    const { password, confirmpassword, username, email, fullname } = values;
    if (password !== confirmpassword) {
      toast.error("Password and confirm password do not match.", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if (fullname.length < 6) {
      toast.error(
        "Fullname should be greater than 6 characters.",
        toastOptions
      );
      return false;
    }

    return true;
  };

  return (
    <div className="bg">
      <div className="login-container container ">
        <div className="form-container sm:container-fluid">
          <form onSubmit={(e) => handleSubmit(e)}>
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
                name="fullname"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillEnvelopeAtFill />
              <input
                type="email"
                className="form-control auth-input"
                placeholder="Enter email"
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillPersonCheckFill />
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div className="input-container mb-3">
              <BsShieldLockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Enter password"
                name="password"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div className="input-container mb-3">
              <BsShieldLockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Confirm password"
                name="confirmpassword"
                onChange={(e) => handleChange(e)}
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
