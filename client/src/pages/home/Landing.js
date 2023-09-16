import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaComments } from 'react-icons/fa';
import { BiSolidBookReader } from 'react-icons/bi';
import './landing.css';

const Landing = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Your path to personal growth and mental well-being
            </h1>
            <p className="lead">
              Connect with experienced mentors and caring mental health
              professionals for guidance, support, and transformation.
            </p>
            <div className="">
              <button type="button" className="btn btn-primary btn-lg">
                Connect
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="./hero-img.png"
              className="d-block mx-lg-auto img-fluid"
              alt="MindMentor"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="./habout1.jpg"
                        className="img-fluid"
                        alt="by Taha Mazandarani on Unsplash "
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-6">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="./logo-black.png"
                        className="img-fluid"
                        alt="MindMentor"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-4 pt-2">
                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                      <img
                        src="./connect.jpg"
                        className="img-fluid"
                        alt="Teens"
                      />
                      <div className="img-overlay bg-dark"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
            <div className="section-title ml-lg-5">
              <h5 className="text-custom font-weight-normal mb-3">About Us</h5>
              <h4 className="title mb-4">
                Our mission is to <br />
                make your life easier.
              </h4>
              <p className="text-muted mb-0">
                MindMentor is committed to supporting your mental health and
                personal growth journey. We are driven by a shared commitment to
                making a positive impact on your life.
              </p>

              <div className="row">
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-play h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <Link className="text-dark">Empathy</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-file-download h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <Link className="text-dark">Confidentiality</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-user h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <Link className="text-dark">Inclusivity</Link>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 pt-2">
                  <div className="media align-items-center rounded shadow p-3">
                    <i className="fa fa-image h4 mb-0 text-custom"></i>
                    <h6 className="ml-3 mb-0">
                      <Link className="text-dark">Development</Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mt-4 pt-2 text-right">
                  <Link to="/about" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-cta my-5">
        <div className="container space-2">
          <div className="row align-items-md-center text-center text-md-left">
            <div className="col-md-2 d-none d-md-inline-block">
              <img
                className="img-fluid"
                src="./logo-black.png"
                alt="MindMentor Logo"
              />
            </div>
            <div className="col-md-7 mb-4 mb-md-0">
              <div className="pl-lg-4">
                <h2 className="text-white mb-1">Get started with MindMentor</h2>
                <h3>Join our community of learners and achievers today!</h3>
                <p className="lead text-white mb-0">
                  MindMentor gives you access to mentors and professionals -
                  Explore our Resource Hub - Connect with a supportive community
                  - Personalized recommendations
                </p>
              </div>
            </div>
            <div className="col-md-3 text-md-right">
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* How it works */}
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row gy-5 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">How MindMentor Works</h2>
                  <p className="lead fs-4 text-secondary mb-5"></p>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        1
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-3">Sign Up</h4>
                      <p className="mb-0 text-secondary">
                        Begin your journey by creating an account on MindMentor.
                        It's quick, easy, and free!
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        2
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-3">Explore Services</h4>
                      <p className="mb-0 text-secondary">
                        Browse our range of services, including mentorship,
                        counseling, and a wealth of resources to support your
                        growth.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        3
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-3">Connect & Learn</h4>
                      <p className="mb-0 text-secondary">
                        Connect with mentors or mental health professionals who
                        match your needs. Schedule sessions, ask questions, and
                        gain valuable insights.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        4
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-3">Access Resources</h4>
                      <p className="mb-0 text-secondary">
                        Dive into our Resource Hub, filled with articles,
                        videos, and self-help materials designed to empower you.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <span className="btn btn-primary bsb-btn-circle pe-none me-4">
                        5
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-3">Grow & Thrive</h4>
                      <p className="mb-0 text-secondary">
                        With MindMentor, you're on your way to personal and
                        professional growth. Join us today and start your
                        journey toward a brighter future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded"
                loading="lazy"
                src="./process.svg"
                alt="Work illustrations by Storyset on Freepik"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our Services */}
      <section className="container pt-3 mb-3">
        <h2 className="h3 block-title text-center">Discover Our Services</h2>
        <div className="row pt-5 mt-30">
          <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <Link className="card">
              <div className="box-shadow bg-white rounded-circle mx-auto d-flex justify-content-center align-items-center card-shad">
                <BiSolidBookReader size={60} color="#235542" />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title pt-1 heading">Resource Hub</h3>
                <p className="card-text text-sm description">
                  Explore our library of articles, videos, and self-help
                  materials to support your well-being.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <Link className="card">
              <div className="box-shadow bg-white rounded-circle mx-auto d-flex justify-content-center align-items-center card-shad">
                <FaComments size={60} color="#235542" />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title pt-1 heading">Counselling</h3>
                <p className="card-text text-sm description">
                  Address anxiety, depression, stress, and other mental health
                  issues with the help of our dedicated professionals.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-5">
            <Link className="card">
              <div className="box-shadow bg-white rounded-circle mx-auto d-flex justify-content-center align-items-center card-shad">
                <FaUsers size={60} color="#235542" />
              </div>
              <div className="card-body text-center">
                <h3 className="card-title pt-1 heading">Mentorship</h3>
                <p className="card-text text-sm description">
                  Receive one-on-one mentorship tailored to your unique goals
                  and aspirations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Contact</h2>
              <p className="text-secondary mb-5 text-center">
                At MindMentor, we leave no one behind.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form action="#!">
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12">
                      <label htmlFor="fullname" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
