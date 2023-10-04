import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './resources.css';
import postsData from './posts.json';

export default function Resources() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    setPosts(postsData);
  }, []);

  return (
    <div className="container">
      <section className="text-center">
        <h4 className="mb-5">
          <strong>Latest posts</strong>
        </h4>
        <Form className="d-flex mb-4 gap-2">
          <Form.Group controlId="search" className="w-75">
            <Form.Control type="text" placeholder="Search Resources by Title" />
          </Form.Group>
          <Button variant="primary">Search</Button>
        </Form>
        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-12 mb-4" key={post.id}>
              <div className="card">
                <div
                  className="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img src={post.image} className="img-fluid" alt="#" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text post-content">
                    {post.content.length > 200
                      ? `${post.content.substring(0, 80)}...`
                      : post.content}
                  </p>
                  <Link to={`/post/${post.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
