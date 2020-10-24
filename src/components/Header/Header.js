import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { GiFoodTruck } from "react-icons/gi";
import "./Header.scss";
const Header = ({ title }) => {
  return (
    <Fragment>
      <header className="header">
        <h1>{title}</h1>
        <GiFoodTruck className="icon" />
      </header>
    </Fragment>
  );
};

Header.defaultProps = {
  title: "Meal Recipe App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
