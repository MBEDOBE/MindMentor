import React from 'react';
import { Link } from 'react-router-dom';

const ProfileUpdate = () => {
  return (
    <div className="col-md-8">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">Pitch Dark</div>
          </div>
          <hr />

          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Username</h6>
            </div>
            <div className="col-sm-9 text-secondary">PiDa</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">pida@viking.vk</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Password</h6>
            </div>
            <div className="col-sm-9 text-secondary">************</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <Link className="btn btn-primary ">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
