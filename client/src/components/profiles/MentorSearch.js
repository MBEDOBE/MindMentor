import React from 'react';
import { Link } from 'react-router-dom';
import './profiles.css';

const MentorSearch = () => {
  return (
    <div className="container mt-4">
      <h1>Mentor Search and Filter</h1>

      {/* Filters  */}
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">Filters</h2>
          <div className="d-flex flex-column flex-md-row align-items-end gap-4">
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="category">Category:</label>
                <select className="form-control" id="category">
                  <option value="">All</option>
                  <option value="programming">Mentor</option>
                  <option value="design">Health Professional</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="location">Search:</label>
                <input type="text" className="form-control" id="location" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <button className="btn btn-primary btn-block">Filter</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mentor List as Profile Cards  */}
     
            <div className="row mt-4">
              <div className="col-lg-3 col-sm-6 mb-4">
                <div className="card profile" style={{ width: '18rem' }}>
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
                    <Link className="btn btn-primary profile-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4">
                <div className="card profile" style={{ width: '18rem' }}>
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
                    <Link className="btn btn-primary profile-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4">
                <div className="card profile" style={{ width: '18rem' }}>
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
                    <Link className="btn btn-primary profile-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mb-4">
                <div className="card profile" style={{ width: '18rem' }}>
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
                    <Link className="btn btn-primary profile-btn">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
      {/* <div className="row mt-4">
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card profile" style={{ width: '18rem' }}>
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
      </div> */}
    </div>
  );
};

export default MentorSearch;
