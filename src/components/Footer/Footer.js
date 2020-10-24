import React, { Fragment } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { GoTriangleUp } from "react-icons/go";
import {FaGithub} from 'react-icons/fa';
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <div className="footer-wrap">
          <Link to="/" className="footer-logo">
            <GoTriangleUp className="footer-icon" />
            <FaGithub className='footer-icon-gh' /> 
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
