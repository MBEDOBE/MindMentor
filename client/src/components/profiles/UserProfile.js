import React, { useEffect, useState } from "react";
import "./profiles.css";

const UserProfile = () => {
  //Current User details
  const [fullName, setfullName] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("mindmentor-user");

    if (currentUser) {
      try {
        // Parse the currentUser string as JSON
        const currentUserObjects = JSON.parse(currentUser);

        // Accessing the username property
        const getFullname = currentUserObjects.fullname;
        const getProfession = currentUserObjects.profession;
        const getLocation = currentUserObjects.state_country;

        // Seting the username in the component's state
        setfullName(getFullname);
        setProfession(getProfession);
        setLocation(getLocation);
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
              <p className="text-secondary mb-1">{profession}</p>
              <p className="text-muted font-size-sm">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
