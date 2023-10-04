import React, { useState, useEffect, useContext } from "react";
import { BsFillUnlockFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../api-routes/APIRoutes";
import { Context } from "../../context/Context";

const Login = () => {
  const navigate = useNavigate();
  //error notification
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  {
    /*//user loggedin redirect
  useEffect(() => {
    if (localStorage.getItem("mindmentor-user")) {
      navigate("/");
    }
  }, []);*/
  }

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { dispatch } = useContext(Context);
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    if (validateForm()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      dispatch({ type: "LOGIN_FAILURE" });
      if (data.status === true) {
        localStorage.setItem("mindmentor-user", JSON.stringify(data.user));
        navigate("/profile");
      }
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
  };

  //handle change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //handle validation
  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Username/Email and Password is required", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Username/Email and Password is required", toastOptions);
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
              Please Login to your account.
            </h5>
            <div className="input-container mb-3">
              <MdAlternateEmail />
              <input
                type="text"
                className="form-control auth-input"
                placeholder="Enter username"
                name="username"
                autoComplete="username"
                onChange={(e) => handleChange(e)}
                min="3"
                required
              />
            </div>
            <div className="input-container mb-3">
              <BsFillUnlockFill />
              <input
                type="password"
                className="form-control auth-input"
                placeholder="Enter password"
                name="password"
                onChange={(e) => handleChange(e)}
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
