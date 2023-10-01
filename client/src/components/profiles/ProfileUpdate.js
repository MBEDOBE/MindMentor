import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { accountSettingsRoute } from "../../pages/api-routes/APIRoutes";

const ProfileUpdate = () => {
  const navigate = useNavigate();

  //error notification
  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  //user loggedin redirect
  useEffect(() => {
    if (!localStorage.getItem("mindmentor-user")) {
      navigate("/login");
    }
  }, []);

  //Current User details
  const [userName, setUsername] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    const currentUser = localStorage.getItem("mindmentor-user");

    if (currentUser) {
      try {
        // Parse the currentUser string as JSON
        const currentUserObjects = JSON.parse(currentUser);

        // Accessing the username property
        const getUsername = currentUserObjects.username;
        const getFullname = currentUserObjects.fullname;
        const getEmail = currentUserObjects.email;
        const getProfession = currentUserObjects.profession;
        const getLocation = currentUserObjects.state_country;
        const getId = currentUserObjects._id;

        // Setting the username in the component's state
        setUsername(getUsername);
        setfullName(getFullname);
        setEmail(getEmail);
        setProfession(getProfession);
        setLocation(getLocation);
        setUserId(getId);
      } catch (e) {
        // Handle any parsing errors if the data is not valid JSON
        console.e("Error parsing this data:", e);
      }
    }
  }, []);

  const [editMode, setEditMode] = useState(false);

  // Initialize state variables for updated user data
  const [updatedFullName, setUpdatedFullName] = useState("");
  const [updatedUsername, setUpdatedUsername] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedProfession, setUpdatedProfession] = useState("");
  const [updatedLocation, setUpdatedLocation] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation) {
      const updatedUserData = {
        fullname: updatedFullName,
        username: updatedUsername,
        email: updatedEmail,
        profession: updatedProfession,
        state_country: updatedLocation,
        password: updatedPassword,
      };

      // Send a PUT request to update user information
      const { data } = await axios.put(
        accountSettingsRoute + userId,
        updatedUserData
      );
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      } else if (data.status === true) {
        // Update the local user data and exit edit mode
        localStorage.setItem("mindmentor-user", JSON.stringify(data.user));
        setEditMode(false);

        // Refresh the page
        window.location.reload();
      }
    }
  };

  //Delete Profile Function

  const handleDelete = async () => {
    // Show a confirmation dialog to confirm the delete action
    const confirmation = window.confirm(
      "Are you sure you want to delete your profile? This action cannot be undone."
    );

    if (confirmation) {
      try {
        // Send a DELETE request to delete the user's profile
        const { data } = await axios.delete(accountSettingsRoute + userId);

        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        } else if (data.status === true) {
          // Delete was successful, log the user out and redirect to the login page
          localStorage.removeItem("mindmentor-user");
          navigate.push("/login");
        }
      } catch (error) {
        console.error("Error deleting user profile:", error);
        toast.error(
          "An error occurred while deleting your profile. Please try again later.",
          toastOptions
        );
      }
    }
  };

  //handle validation
  const handleValidation = () => {
    const { password, username, email, fullname, profession, state_country } =
      value;
    if (username.length < 3) {
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
    } else if (profession === "") {
      toast.error("What you do is required.", toastOptions);
      return false;
    } else if (state_country === "") {
      toast.error("Your present state and country is required.", toastOptions);
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
    <>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={fullName}
                      name="fullname"
                      value={updatedFullName}
                      onChange={(e) => setUpdatedFullName(e.target.value)}
                    />
                  ) : (
                    fullName
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Username</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={userName}
                      name="username"
                      value={updatedUsername}
                      onChange={(e) => setUpdatedUsername(e.target.value)}
                    />
                  ) : (
                    userName
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={email}
                      name="email"
                      value={updatedEmail}
                      onChange={(e) => setUpdatedEmail(e.target.value)}
                    />
                  ) : (
                    email
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Profession</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={profession}
                      name="profession"
                      value={updatedProfession}
                      onChange={(e) => setUpdatedProfession(e.target.value)}
                    />
                  ) : (
                    profession
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">State/Country</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control"
                      placeholder={location}
                      name="location"
                      value={updatedLocation}
                      onChange={(e) => setUpdatedLocation(e.target.value)}
                    />
                  ) : (
                    location
                  )}
                </div>
              </div>
              <hr />
              {editMode ? (
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0"> New Password</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="********"
                        name="password"
                        value={updatedPassword}
                        onChange={(e) => setUpdatedPassword(e.target.value)}
                      />
                    ) : (
                      "*********"
                    )}
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Password</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">********</div>
                </div>
              )}
              <hr />
              <div className="row">
                <div className="col-sm-12">
                  {editMode ? (
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleToggleEdit}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleToggleEdit}
                    >
                      Edit Profile
                    </button>
                  )}
                  {editMode ? (
                    <button type="submit" className="btn btn-primary ms-2">
                      Update
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger ms-2 "
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* User Preferences */}
      <div className="container my-5">
        <div className="card shadow">
          <div className="card-header bg-success text-white">
            <h1>User Preferences</h1>
          </div>
          <div className="card-body">
            <Form>
              <Form.Group>
                <Form.Label>Add a Support Preference:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="stress, anxiety, depression..."
                />
              </Form.Group>
              <Button className="mt-2" variant="primary">
                Add Preference
              </Button>
            </Form>
            <div className="mt-3">
              <h4>Your Saved Preferences:</h4>
              <div className="btn-group gap-1">
                <Button
                  key=""
                  variant="btn-outline-secondary"
                  className="btn-sm btn-block"
                >
                  X
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h1>Recommended</h1>
        <div className="row mt-4">
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card profile" style={{ width: "18rem" }}>
              <img src="./mentor1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pitch Dark</h5>
                <p className="mb-2 pb-1 user-prof">Senior Journalist</p>
                <div className="d-flex justify-content-between rounded-3 p-2 mb-2 inner-content">
                  <div>
                    <p className="small text-muted mb-1">Category</p>
                    <p className="mb-0">Mentor</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Status</p>
                    <p className="mb-0">Available</p>
                  </div>
                </div>
                <Link className="btn btn-primary profile-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card profile" style={{ width: "18rem" }}>
              <img src="./mentor1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pitch Dark</h5>
                <p className="mb-2 pb-1 user-prof">Senior Journalist</p>
                <div className="d-flex justify-content-between rounded-3 p-2 mb-2 inner-content">
                  <div>
                    <p className="small text-muted mb-1">Category</p>
                    <p className="mb-0">Mentor</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Status</p>
                    <p className="mb-0">Available</p>
                  </div>
                </div>
                <Link className="btn btn-primary profile-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card profile" style={{ width: "18rem" }}>
              <img src="./mentor1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pitch Dark</h5>
                <p className="mb-2 pb-1 user-prof">Senior Journalist</p>
                <div className="d-flex justify-content-between rounded-3 p-2 mb-2 inner-content">
                  <div>
                    <p className="small text-muted mb-1">Category</p>
                    <p className="mb-0">Mentor</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Status</p>
                    <p className="mb-0">Available</p>
                  </div>
                </div>
                <Link className="btn btn-primary profile-btn">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="card profile" style={{ width: "18rem" }}>
              <img src="./mentor1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Pitch Dark</h5>
                <p className="mb-2 pb-1 user-prof">Senior Journalist</p>
                <div className="d-flex justify-content-between rounded-3 p-2 mb-2 inner-content">
                  <div>
                    <p className="small text-muted mb-1">Category</p>
                    <p className="mb-0">Mentor</p>
                  </div>
                  <div className="px-3">
                    <p className="small text-muted mb-1">Status</p>
                    <p className="mb-0">Available</p>
                  </div>
                </div>
                <Link className="btn btn-primary profile-btn">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
