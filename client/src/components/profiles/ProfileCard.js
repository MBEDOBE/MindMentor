import React from 'react';
import { Link } from 'react-router-dom';
import './profiles.css';

const ProfileCard = () => {
  return (
    <div className="card profile" style={{ width: '18rem' }}>
      <img src="./mentor1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Pitch Dark</h5>
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
        <Link className="btn btn-primary profile-btn">Go somewhere</Link>
      </div>
    </div>
  );
};

export default ProfileCard;
