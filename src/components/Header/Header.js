import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { GiFoodTruck } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = ({ title }) => {
  return (
    <Fragment>
      <header className="header">
        <Link to="/" className="react-link">
          <h1>{title}</h1>
        </Link>
        <Link to="/" className="react-link">
          <GiFoodTruck className="icon" />
        </Link>
      </header>
    </Fragment>
  );
};

Header.defaultProps = {
  title: 'Meal Recipe App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
