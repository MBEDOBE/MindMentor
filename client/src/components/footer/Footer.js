import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-footer rounded-4 mx-auto">
      <div className="container p-3 text-center">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 box">
            <span className="copyright quick-links">
              &copy; MindMentor - {year}
            </span>
          </div>
          <div className="col-md-4 ">
            <img className="img-fluid" src="./logo192.png" alt="" />
          </div>
          <div className="col-md-4">
            <Link>Privacy Policy</Link>
            <Link>T&Cs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
