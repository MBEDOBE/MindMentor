import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import './contact.css';
const Contact = () => {
  return (
    <>
      <div className="container flex-md-column">
        <div className="card mb-4 shadow-lg">
          <div className="card-body">
            <div className="row d-md-flex ">
              <div className="col-md-8">
                <h2>Contact Us</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-lg" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-4 mt-4">
                <img src="./mentor1.jpg" alt="Contact" className="img-fluid" />
              </div>
            </div>
            <div className="row m-5 ">
              <div className="col-md-6 ">
                <div className="mb-3">
                  <h5>Address</h5>
                  <div className="contact-elements">
                    <FaLocationDot size={40} color="#235542" />
                    <div className="address">
                      <p>123 Main Street</p>
                      <p>Wakanda, VK</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="mb-3">
                  <h6>Email</h6>
                  <div className="contact-elements">
                    <MdAlternateEmail size={40} color="#235542" />
                    <div className="my-auto ms-3">
                      <p>mindmentor@wakanda.com</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-md-6">
                <div className="mb-3">
                  <h5>Phone</h5>
                  <div className="contact-elements">
                    <FaPhoneAlt size={40} color="#235542" />
                    <div className="address ms-3">
                      <p>123 Main Street</p>
                      <p>Wakanda, VK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
