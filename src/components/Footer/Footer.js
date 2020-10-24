import React, { Fragment } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { GoTriangleUp } from 'react-icons/go';
import { FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        <div className="footer-wrap">
          <Link to="/">
            <GoTriangleUp className="footer-icon" />
          </Link>
          <label for="gh-link">Github</label>
          <a
            className="github-link"
            href="https://github.com/luke-h1/meal-app-react"
            target="_blank"
            rel="noreferrer"
            name="gh-link"
          >
            <FaGithub className="footer-icon-gh" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
