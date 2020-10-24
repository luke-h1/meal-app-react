import React, { Fragment } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { GoTriangleUp } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <div className="footer-wrap">
          <Link to="/" className="footer-logo">
            <GoTriangleUp className="footer-icon" />
            <a
              className="github-link"
              href="https://github.com/luke-h1/meal-app-react"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer-icon-gh" />
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
