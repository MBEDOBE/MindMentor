import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './resources.css';

export default function Resources() {
  return (
    <div className="container">
      <section className="text-center">
        <h4 className="mb-5">
          <strong>Latest posts</strong>
        </h4>
        <Form className="d-flex mb-4 gap-2">
          <Form.Group controlId="search" className="w-75">
            <Form.Control
              type="text"
              placeholder="Search Resources by Title"
              value=""
              onChange=""
            />
          </Form.Group>
          <Button variant="primary" onClick="">
            Search
          </Button>
        </Form>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p1.jpg" className="img-fluid" alt="#" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p2.jpg" className="img-fluid" alt="post" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p3.jpg" className="img-fluid" alt="post" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p2.jpg" className="img-fluid" alt="post" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p3.jpg" className="img-fluid" alt="post" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <div
                className="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img src="./postimg/p1.jpg" className="img-fluid" alt="post" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Post title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link className="btn btn-primary">Read</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Content */}

      {/* Pagination */}
      <nav className="my-4 " aria-label="...">
        <ul className="pagination  justify-content-center">
          <li className="page-item">
            <Link className="page-link" tabIndex="-1" aria-disabled="true">
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link">1</Link>
          </li>
          <li className="page-item active" aria-current="page">
            <Link className="page-link">2</Link>
          </li>
          <li className="page-item">
            <Link className="page-link">3</Link>
          </li>
          <li className="page-item">
            <Link className="page-link">Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
