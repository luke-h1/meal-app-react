import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './AboutDescription.scss';
const AboutDescription = ({ title, desc }) => {
  return (
    <Fragment>
      <div className="about-container">
        <h1 className="about-desc">{title}</h1>
        <p className="para-about">
          {desc}{' '}
          <a href="https://themealdb.com/" target="_blank" rel="noreferrer">
            Link to API
          </a>
        </p>
      </div>
    </Fragment>
  );
};

AboutDescription.defaultProps = {
  title: 'About This App',
  desc: 'This app returns data from the MealDB API.',
};

AboutDescription.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AboutDescription;
