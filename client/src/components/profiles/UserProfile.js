import React from 'react';
import './profiles.css';

const UserProfile = () => {
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
              <h4>John Doe</h4>
              <p className="text-secondary mb-1">Full Stack Developer</p>
              <p className="text-muted font-size-sm">Wakanda, VK</p>
              <div className="d-flex justify-content-center align-items-center gap-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
