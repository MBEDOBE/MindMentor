import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

const MentorProfile = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-content-center gutters-sm ">
        <div className="col-lg-4 d-flex justify-content-center align-content-center mb-3">
          <div className="card profile" style={{ width: '18rem' }}>
            <img src="./mentor1.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Pitch Dark</h5>
              <p className="mb-2 pb-1 user-prof">Senior Journalist</p>
            </div>
          </div>
        </div>
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
                <div className="col-sm-3">
                  <h6 className="mb-0">Occupation</h6>
                </div>
                <div className="col-sm-9 text-secondary">Senior Journalist</div>
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
        {/* User Preferences */}
        <div className="container my-5">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h1>Mentor Expertise</h1>
            </div>
            <div className="card-body">
              <Form>
                <Form.Group>
                  <Form.Label>Add a Support Area:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="stress, anxiety, depression..."
                  />
                </Form.Group>
                <Button className="mt-2" variant="primary">
                  Add Expertise
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
      </div>
    </div>
  );
};

export default MentorProfile;
