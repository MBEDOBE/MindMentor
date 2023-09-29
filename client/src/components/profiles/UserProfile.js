import React, { useEffect, useState } from "react";
import "./profiles.css";

const UserProfile = () => {
  const [fullName, setfullName] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("mindmentor-user");

    if (currentUser) {
      try {
        // Parse the currentUser string as JSON
        const currentUserObjects = JSON.parse(currentUser);

        // Accessing the username property
        const getFullname = currentUserObjects.fullname;

        // Seting the username in the component's state
        setfullName(getFullname);
      } catch (e) {
        // Handle any parsing errors if the data is not valid JSON
        console.e("Error parsing this data:", e);
      }
    }
  }, []);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body user-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src="./avatar.png"
              alt="Admin"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{fullName}</h4>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
