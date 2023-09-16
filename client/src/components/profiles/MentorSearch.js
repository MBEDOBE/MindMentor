import React from 'react';
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
          <label for="category">Category:</label>
          <select className="form-control" id="category">
            <option value="">All</option>
            <option value="programming">Mentor</option>
            <option value="design">Health Professional</option>
          </select>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="form-group">
          <label for="location">Search:</label>
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
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card search-card">
            <div className="card-body p-3 p-md-4">
              <div className="flex text-black text-center">
                <div className="flex-shrink-0">
                  <img
                    src="./mentor1.jpg"
                    alt="Generic placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1">Picka Dilly</h4>
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
                  <div className="d-flex pt-1">
                    
                    <button type="button" className="btn btn-primary flex-grow-1">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card search-card">
            <div className="card-body p-3 p-md-4">
              <div className="flex text-black text-center">
                <div className="flex-shrink-0">
                  <img
                    src="./mentor1.jpg"
                    alt="Generic placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1">Picka Dilly</h4>
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
                  <div className="d-flex pt-1">
                    
                    <button type="button" className="btn btn-primary flex-grow-1">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card search-card">
            <div className="card-body p-3 p-md-4">
              <div className="flex text-black text-center">
                <div className="flex-shrink-0">
                  <img
                    src="./mentor1.jpg"
                    alt="Generic placeholder"
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1">Picka Dilly</h4>
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
                  <div className="d-flex pt-1">
                    
                    <button type="button" className="btn btn-primary flex-grow-1">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default MentorSearch;
