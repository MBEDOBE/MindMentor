import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import { TiSocialTwitter, TiSocialLinkedin } from 'react-icons/ti';
import { SlSocialGithub } from 'react-icons/sl';

const About = () => {
  return (
    <>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="lc-block">
                <div contentEditable="true">
                  <p className="lead fw-bold text-secondary">About</p>
                  <h2 className="fw-bold display-2">MindMentor </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="lc-block">
                <div contentEditable="true">
                  <p className="rfs-9">
                    Welcome to MindMentor, where we are committed to supporting
                    your mental health and personal growth journey. Our platform
                    connects you with experienced mentors and mental health
                    professionals who are dedicated to helping you thrive. We
                    believe that positive relationships, expert guidance, and a
                    user-centric approach can make a profound impact on your
                    journey towards mental health and self-improvement.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="d-flex container-fluid"
          lc-helper="background"
          style={{
            height: '50vh',
            background: 'url(./about-hero.jpg) center / cover no-repeat',
          }}
        ></div>
        <div
          className="container bg-light shadow py-4"
          style={{ marginTop: '-100px' }}
        >
          <div className="row text-center justify-content-center">
            <div className="col-12">
              <div className="lc-block">
                <div editable="rich">
                  <p className="fw-bold display-5">MindMentor</p>
                </div>
              </div>
            </div>
            <div className="col-5">
              <hr />
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-lg-10 col-xxl-8">
              <div className="lc-block mb-5">
                <div editable="rich">
                  <p className="">
                    Our mission is to provide a safe and supportive environment
                    for individuals seeking guidance, mentorship, and
                    counseling. We believe in the power of positive
                    relationships and expert support in achieving personal and
                    professional success.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Link
                  className="btn btn-primary btn-lg"
                  to="/contact"
                  role="button"
                >
                  Keep in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 py-lg-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{}}
                  lc-helper="svg-icon"
                >
                  <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"></path>
                </svg>
              </div>

              <div className="lc-block">
                <span className="display-4" editable="inline">
                  <b className="fw-bold">274</b>
                </span>
                <div editable="rich">Professionals</div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{}}
                  lc-helper="svg-icon"
                >
                  <path d="M8 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  <path d="M9.5 2c-.9 0-1.75.216-2.501.6A5 5 0 0 1 13 7.5a6.5 6.5 0 1 1-13 0 .5.5 0 0 1 1 0 5.5 5.5 0 0 0 8.001 4.9A5 5 0 0 1 3 7.5a6.5 6.5 0 0 1 13 0 .5.5 0 0 1-1 0A5.5 5.5 0 0 0 9.5 2zM8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                </svg>
              </div>
              <div className="lc-block">
                <span className="display-4" editable="inline">
                  <b className="fw-bold">24/7</b>
                </span>
                <div editable="rich">
                  <p>Available</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center">
              <div className="lc-block mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3em"
                  height="3em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{}}
                  lc-helper="svg-icon"
                >
                  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-11z"></path>
                </svg>
              </div>
              <div className="lc-block">
                <span className="display-4" editable="inline">
                  <b className="fw-bold">+AAA</b>
                </span>
                <div editable="rich">Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <div className="mb-2">
        <div className="row g-0 custom-row">
          <div className="custom-column">
            <div className="bg-team text-white p-5 mt-5">
              <h5 className="mb-4 fw-bold">PROFESSIONAL & CREATIVE TEAM</h5>
              {/* <h2 className="mb-4 fw-bolder">Meet the team</h2> */}
              <p className="mb-4 ">
                Meet the faces behind MindMentor, and let us help you thrive,
                grow, and achieve your goals. Your journey to a better you
                starts here with our dedicated team by your side.
                <p className="fst-italic mt-2">
                  What unites us is our shared mission: to create a safe,
                  judgment-free space where you can connect with mentors, access
                  resources, and receive the care you deserve. We are committed
                  to your success, and we're with you every step of the way.
                </p>
              </p>
            </div>
          </div>
          <div className="py-5 team4">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 mb-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src="./Taiwo.jpg"
                        alt="profile"
                        className="img-fluid rounded-circle p-5"
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">
                        Taiwo Abiodun
                        </h5>
                        <h6 className="subtitle mb-3">Full Stack Engineer, IT & IT-Security Specialist</h6>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialTwitter size={30} color="#235542" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialLinkedin size={30} color="#235542" />
 
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <SlSocialGithub size={25} color="#235542" />
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 mb-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src="./0.png"
                        alt="profile"
                        className="img-fluid rounded-circle p-5"
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">
                        D. Mbedobe KUNJI
                        </h5>
                        <h6 className="subtitle mb-3">Frontend Engineer</h6>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialTwitter size={30} color="#235542" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialLinkedin size={30} color="#235542" />
 
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <SlSocialGithub size={25} color="#235542" />
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src="./Habiibullah.png"
                        alt="profile"
                        className="img-fluid rounded-circle p-5"
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">
                        Habiibullah Ajiboye
                        </h5>
                        <h6 className="subtitle mb-3">Backend Engineer</h6>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialTwitter size={30} color="#235542" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialLinkedin size={30} color="#235542" />
 
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <SlSocialGithub size={25} color="#235542" />
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 mb-4">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        src="./Avatar.png"
                        alt="profile"
                        className="img-fluid rounded-circle p-5"
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="pt-2">
                        <h5 className="mt-4 font-weight-medium mb-0">
                        Ibukun Akintola
                        </h5>
                        <h6 className="subtitle mb-3">Frontend Engineer</h6>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialTwitter size={30} color="#235542" />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <TiSocialLinkedin size={30} color="#235542" />
 
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              href="#"
                              className="text-decoration-none d-block px-1"
                            >
                              <SlSocialGithub size={25} color="#235542" />
                            </a>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
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
                <h3 className="text-white">
                  Join our community and start your journey towards a happier,
                  healthier, and more empowered you.
                </h3>
              </div>
            </div>
            <div className="col-md-3 text-md-right">
              <Link
                className="btn btn-primary btn-lg"
                to="/register"
                role="button"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <section>
        <div className="row">
          <div className="col-lg-6 col-xl-5 m-auto text-center">
            <div className="section-title section-title--light">
              <h3>Services We Offer</h3>
              <p className="text-muted">
                Our platform is built on the foundation of caring, expertise,
                and user-centric care. Explore our services to discover how we
                can assist you on your path to growth and well-being.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/mentorship.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">Mentorship</h5>
                  <p className="card-text text-white">
                    Connect with experienced mentors who are passionate about
                    guiding you through life's challenges and opportunities.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Mentorship</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/counselling.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">
                    Counseling and Support
                  </h5>
                  <p className="card-text text-white">
                    Access confidential and compassionate counseling services
                    provided by licensed mental health professionals.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Counseling</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/library.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">
                    Knowledge and Inspiration
                  </h5>
                  <p className="card-text text-white">
                    Explore a rich library of articles, videos, and self-help
                    materials curated to empower you.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Resource Hub</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/community.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">
                    Supportive Community
                  </h5>
                  <p className="card-text text-white">
                    Join a vibrant and supportive community of individuals who
                    share similar journeys and experiences.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Community</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/professional.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">
                    User-Centric Approach
                  </h5>
                  <p className="card-text text-white">
                    Your well-being is at the heart of everything we do, and
                    we're committed to your growth and success.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Professionalism</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card position-relative aboutservice-card">
                <img
                  src="/services/access.jpeg"
                  className="card-img-top"
                  alt="A Mentor"
                />
                <div className="overlay text-center ">
                  <h5 className="card-title text-white">
                    Online Accessibility
                  </h5>
                  <p className="card-text text-white">
                    Enjoy the convenience of accessing our platform online from
                    anywhere, making support readily available when you need it.
                  </p>
                </div>
                <div className="card-footer text-center">
                  <h2>
                    <strong>Flexible Access</strong>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
